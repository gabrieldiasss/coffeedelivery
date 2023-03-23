import { ShoppingCart } from 'phosphor-react'
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
}

export function Card({ coffee }: CoffeeCardProps) {

	console.log(coffee.photo)

	return (
		<CardCoffeeContainer>
			<HeaderCardCoffee>
				<img src={`/coffees/${coffee.photo}`} />
				<CoffeeTagList>
					{coffee.tags.map((tag) => (
						<CoffeeTag>{tag}</CoffeeTag>
					))}
				</CoffeeTagList>
				<strong>{coffee.name}</strong>
			</HeaderCardCoffee>

			<p>{coffee.description}</p>

			<FooterCardCoffee>
				<Price>
					<span>R$</span> <strong>{coffee.price}</strong>
				</Price>

				<div>
					<CounterCart />

					<Icon>
						<ShoppingCart size={24} weight="fill" />
					</Icon>
				</div>
			</FooterCardCoffee>
		</CardCoffeeContainer>
	)
}