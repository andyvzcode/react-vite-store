import  { createContext, useState } from 'react'


export const shoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images: [],
    });
    const [cartProducts, setCartProducts] = useState([])

    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
    const checkoutOpen = () => setIsCheckoutOpen(true)
    const checkoutClose = () => setIsCheckoutOpen(false)
    return (
        <shoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            setProductToShow,
            productToShow,
            cartProducts,
            setCartProducts,
            isCheckoutOpen,
            checkoutOpen,
            checkoutClose
        }}>
            {children}
        </shoppingCartContext.Provider>
    )
}


