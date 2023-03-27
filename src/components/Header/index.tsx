import Logo from '../../assets/Logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { CounterCartLenght, HeaderContainer, HeaderContent, Icon, Location } from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeCartContext } from '../../contexts/CoffeeCartContext'

export function Header() {

    const { coffeesCart } = useContext(CoffeeCartContext)

    return (
        <HeaderContainer>
            <HeaderContent>
                <NavLink to="/" title="Home" >
                    <img src={Logo} alt="Coffee Delivery" />
                </NavLink>

                <nav>
                    <ul>
                        <Location>
                            <MapPin
                                weight='fill'
                                size={24}
                            />
                            Porto Alegre, RS
                        </Location>

                        <NavLink to="/checkout" title="Checkout" >
                            <Icon>
                                <ShoppingCart size={24} weight="fill" />
                                {coffeesCart.length >= 1 && (
                                    <CounterCartLenght>{coffeesCart.length }</CounterCartLenght>
                                )}
                            </Icon>
                        </NavLink>
                    </ul>
                </nav>
            </HeaderContent>
        </HeaderContainer>
    )
}