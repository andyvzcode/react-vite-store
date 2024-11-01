import { useContext } from 'react';
import { shoppingCartContext } from '../../Context';
import {  PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
const Card = (data) => {
    const { count, setCount, openProductDetail, setProductToShow, cartProducts, setCartProducts,checkoutOpen, closeProductDetail, checkoutClose} = useContext(shoppingCartContext)

    const showProduct = (productDetail) => {
        openProductDetail()
        setProductToShow(productDetail)
        checkoutClose()
    }

    const addProductToCart = (product) => {
        setCount(count + 1)
        setCartProducts([...cartProducts, product])
        checkoutOpen()
        closeProductDetail()
    }
    const renderIcon = (id) => {
        const isProductInCart = cartProducts.filter(product => product.id === id).length > 0
        if(!isProductInCart){ 
            return (<div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-1' onClick={(e) => {
                e.stopPropagation()
                addProductToCart(data.data) 
            }}>
                <span className='text-black text-sm' ><PlusIcon className="size-5 text-black-400" /></span>
            </div>)
        }else{
            return (<div className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-1' >
                <span className='text-white text-sm' ><CheckIcon className="size-5 text-white-600" /></span>
            </div>)
        }


    }
    return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg' onClick={() => showProduct(data.data)}>
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg px-2 text-black text-xs font-medium m-2 py-0.5'>
                {data.data?.category?.name || 'Category'}
            </span>
            <img
            src={data?.data?.images[0]}
            onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg';
            }}
            alt=''
            className='w-full h-full object-cover rounded-lg'
            />
            {renderIcon(data.data.id)}
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light'>{data?.data?.title || "Product"}</span>
            <span className='text-lg text-black'>${data?.data?.price}</span>
        </p>
    </div>
)}

export default Card;
