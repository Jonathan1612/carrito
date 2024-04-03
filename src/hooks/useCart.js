import { useState, useEffect, useMemo } from 'react'
import { db } from '../data/db'

export const useCart = () => {

    const inicialCart = () => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const [data, setData] = useState([])
    const [cart, setCart] = useState(inicialCart)
    const MAX_ITEMS = 5
    const MIN_ITEMS = 1

    useEffect(() => {
        setData(db)
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function addToCard(item) {

        const itemExist = cart.findIndex((product) => product.id === item.id)

        if (itemExist >= 0) {
            if (cart[itemExist].quantity >= MAX_ITEMS) return
            const updatedCart = [...cart]
            updatedCart[itemExist].quantity++
            setCart(updatedCart)
        } else {
            item.quantity = 1
            setCart([...cart, item])
        }
    }

    function remuveFromCart(id) {
        setCart(prevCart => prevCart.filter(product => product.id !== id))
    }

    function increaseQueantity(id) {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function decreaseQueantity(id) {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function clearCart() {
        setCart([])
    }

    //State derivado
    const isEmpty = useMemo( () => cart.length === 0, [cart])
    const cartTotal =useMemo( () => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart])

    return {
        data,
        cart,
        addToCard,
        remuveFromCart,
        increaseQueantity,
        decreaseQueantity,
        clearCart,
        isEmpty,
        cartTotal
    }
}