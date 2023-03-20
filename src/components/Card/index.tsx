import { IconContext, Minus, Plus, ShoppingCart } from 'phosphor-react'
import Expresso from '../../assets/Expresso.svg'
import { CardCoffeeContainer, CoffeeTag, CoffeeTagList, CounterCart, FooterCardCoffee, HeaderCardCoffee, Icon, Price } from './style'

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
                    <CounterCart>
                        <IconContext.Provider value={{ color: '#8047F8', size: '20px' }} >
                            <button type='button' ><Minus /></button>
                            1
                            <button type='button' ><Plus /></button>
                        </IconContext.Provider>
                    </CounterCart>

                    <Icon>
                        <ShoppingCart size={24} weight="fill" />
                    </Icon>
                </div>
            </FooterCardCoffee>
        </CardCoffeeContainer>
    )
}