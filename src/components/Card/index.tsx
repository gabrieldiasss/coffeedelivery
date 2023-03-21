import { ShoppingCart } from 'phosphor-react'
import Expresso from '../../assets/Expresso.svg'
import { CounterCart } from '../CounterCart'
import {
	CardCoffeeContainer,
	CoffeeTag,
	CoffeeTagList,
	FooterCardCoffee, 
	HeaderCardCoffee, Icon, Price
} from './style'

export function Card() {

	return (
		<CardCoffeeContainer>
			<HeaderCardCoffee>
				<img src={Expresso} alt="" />
				<CoffeeTagList>
					<CoffeeTag>TRADICIONAL</CoffeeTag>
				</CoffeeTagList>
				<strong>Expresso Tradicional</strong>
			</HeaderCardCoffee>

			<p>O tradicional café feito com áu quente e grãos moídos</p>

			<FooterCardCoffee>
				<Price>
					<span>R$</span> <strong>9,90</strong>
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