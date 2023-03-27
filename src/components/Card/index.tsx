import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CoffeeCartContext } from '../../contexts/CoffeeCartContext'
import { formatPrice } from '../../utils/formatPrice'
import { CounterCart } from '../CounterCart'
import {
	CardCoffeeContainer,
	CoffeeTag,
	CoffeeTagList,
	FooterCardCoffee, 
	HeaderCardCoffee, Icon, Price
} from './style'

interface CoffeeCardProps {
    coffee: Coffees
}

interface Coffees {
    id: number
    name: string
    tags: string[]
    description: string
    photo: string
    price: number
	quantity?: number | undefined
}

export function Card({ coffee }: CoffeeCardProps) {

	const { addCoffeeCart } = useContext(CoffeeCartContext)
    const [quantity, setQuantity] = useState(1)

	function handleIncreaseCoffee() {
		setQuantity((state) => state + 1)
	}

	function handleDecreaseCoffee() {
		setQuantity((state) => state - 1)
	}

	function handleAddCoffeeCart() {
		const newCoffee = {
			...coffee,
			quantity,
		}

		addCoffeeCart(newCoffee)
	}

	return (
		<CardCoffeeContainer>
			<HeaderCardCoffee>
				<img src={`/coffees/${coffee.photo}`} />
				<CoffeeTagList>
					{coffee.tags.map((tag) => (
						<CoffeeTag key={tag} >{tag}</CoffeeTag>
					))}
				</CoffeeTagList>
				<strong>{coffee.name}</strong>
			</HeaderCardCoffee>

			<p>{coffee.description}</p>

			<FooterCardCoffee>
				<Price>
					<span>R$</span> <strong>{formatPrice(coffee.price)}</strong>
				</Price>

				<div>
					<CounterCart onIncrease={handleIncreaseCoffee} onDecrease={handleDecreaseCoffee} quantity={quantity} />
					<Icon>
						<ShoppingCart onClick={handleAddCoffeeCart} size={24} weight="fill" />
					</Icon>
				</div>
			</FooterCardCoffee>
		</CardCoffeeContainer>
	)
}