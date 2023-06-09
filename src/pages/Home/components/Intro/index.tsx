import { Coffee, Cube, ShoppingCart, Timer } from "phosphor-react";
import { IntroHomeContainer, IntroHomeContent, IntroHomeItems, ItemBox, ItemCoffee, ItemShopping, ItemTimer } from "./styles";

import ImgCoffe from '../../../../assets/coffee-home.png'

export function Intro() {

    return (
        <IntroHomeContainer>
                <IntroHomeContent>
                    <div>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                        <IntroHomeItems>
                            <span>
                                <ItemShopping>
                                    <ShoppingCart
                                        className="shopping"
                                        weight="fill"
                                        size={24}
                                        color="#fff"
                                    />
                                </ItemShopping>

                                Compra simples e segura
                            </span>

                            <span>
                                <ItemBox>
                                    <Cube
                                        className="cube"
                                        size={24}
                                        weight="fill"
                                        color="#fff"
                                    />
                                </ItemBox>
                                Embalagem mantém o café intacto

                            </span>

                            <span>
                                <ItemTimer>
                                    <Timer
                                        className="timer"
                                        size={24}
                                        weight="fill"
                                        color="#fff"
                                    />
                                </ItemTimer>

                                Entrega rápida e rastreada
                            </span>

                            <span>
                                <ItemCoffee>
                                    <Coffee
                                        className="coffee"
                                        size={24}
                                        weight="fill"
                                        color="#fff"
                                    />
                                </ItemCoffee>

                                O café chega fresquinho até você
                            </span>
                        </IntroHomeItems>
                    </div>
                    <img src={ImgCoffe} alt="" />
                </IntroHomeContent>
            </IntroHomeContainer>
    )
}