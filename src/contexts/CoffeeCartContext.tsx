import { createContext, ReactNode, useEffect, useState } from "react";
import { produce } from "immer"

interface CoffeeCartContextType {
    coffeesCart: Coffee[],
    addCoffeeCart: (coffee: Coffee) => void
    changeCartItemQuantity: (coffeeCartId: number, type: 'increase' | 'decrease') => void
    removeCoffeeCart: (coffeeCartId: number) => void
    cartItemsTotal: number
}

export interface Coffee {
    id: number
    name: string
    tags: string[]
    description: string
    photo: string
    price: number
    quantity: number | undefined
}

interface CoffeeCartContextProps {
    children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems"

export const CoffeeCartContext = createContext({} as CoffeeCartContextType)

export function CoffeeCartProvider({ children }: CoffeeCartContextProps) {

    const [coffeesCart, setCoffeesCart] = useState<Coffee[]>(() => {
        const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)

        if(storedCartItems) {
            return JSON.parse(storedCartItems)
        }

        return []
    })

    function addCoffeeCart(coffee: Coffee) {

        const coffeeExistsInCart = coffeesCart.findIndex((coffees: Coffee) => coffees.id === coffee.id)

        const newCart = produce(coffeesCart, (draft) => {
            if (coffeeExistsInCart < 0) {
                draft.push(coffee)
            } else {
                draft[coffeeExistsInCart].quantity += coffee.quantity
            }
        })

        setCoffeesCart(newCart)
    }

    function changeCartItemQuantity(coffeeCartId: number, type: 'increase' | 'decrease') {
        const newCart = produce(coffeesCart, (draft) => {
            const coffeeExistsInCart = coffeesCart.findIndex(coffeeCart => coffeeCart.id === coffeeCartId)

            if(coffeeExistsInCart >= 0) {
                const item = draft[coffeeExistsInCart]
                draft[coffeeExistsInCart].quantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1;
            }
        })

        setCoffeesCart(newCart)
    }

    function removeCoffeeCart(coffeeCartId: number) {
        const newCart = produce(coffeesCart, (draft) => {
            const coffeeExistsInCart = coffeesCart.findIndex(coffeeCart => coffeeCart.id === coffeeCartId)

            if(coffeeExistsInCart >= 0) {
                draft.splice(coffeeExistsInCart, 1)
            }
        })

        setCoffeesCart(newCart)
    }

    const cartItemsTotal = coffeesCart.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity
    }, 0)

    console.log(coffeesCart)

    useEffect(() => {
        localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(coffeesCart))
    }, [coffeesCart])

    return (
        <CoffeeCartContext.Provider value={{ coffeesCart, addCoffeeCart, changeCartItemQuantity, removeCoffeeCart, cartItemsTotal }} >
            {children}
        </CoffeeCartContext.Provider>
    )
}