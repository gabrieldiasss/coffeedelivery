import Logo from '../../assets/Logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { HeaderContainer, HeaderContent, Icon, Location } from './styles'

export function Header() {

    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={Logo} alt="Coffee Delivery" />

                <nav>
                    <ul>
                        <Location>
                            <MapPin
                                weight='fill'
                                size={24}
                            /> 
                            Porto Alegre, RS
                        </Location>

                        <Icon>
                            <ShoppingCart size={24} />
                        </Icon>
                    </ul>
                </nav>
            </HeaderContent>
        </HeaderContainer>
    )
}