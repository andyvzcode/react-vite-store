import './styles.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { shoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';

const CheckoutSideMenu = () => {
    const { isCheckoutOpen, checkoutClose, cartProducts } = useContext(shoppingCartContext)
    return (
        <aside className={`${isCheckoutOpen ? 'flex' : 'hidden'} checkou-side-menu flex-col fixed right-0 top-68 bottom-1 border border-black rounded-lg bg-white overflow-y-scroll`}>
            <div className='flex justify-between items-center p-4 border-b border-black'>
                <h2 className='text-xl font-medium'>My Order</h2>
                <button className='text-black-500 cursor-pointer' onClick={() => checkoutClose()}><XMarkIcon className="size-6 text-black-500" /> </button>
            </div>
            <div className='flex flex-col p-2'>
                {
                cartProducts ? cartProducts.map(product => {
                    return <OrderCard key={product.id} title={product?.title} imageUrl={product?.images[0]} price={product?.price} />
                }) : <p className='text-sm font-light'>Your cart is empty</p> 
                }
                
                
            </div>
        </aside>
    )
}

export default CheckoutSideMenu 