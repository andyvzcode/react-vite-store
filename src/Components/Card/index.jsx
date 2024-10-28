import { useContext } from 'react';
import { shoppingCartContext } from '../../Context';
import {  PlusIcon } from '@heroicons/react/24/solid'
const Card = (data) => {
    const { count, setCount, openProductDetail, setProductToShow} = useContext(shoppingCartContext)


    const showProduct = (productDetail) => {
        openProductDetail()
        setProductToShow(productDetail)
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
            <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-1' onClick={
                (e) => {
                e.stopPropagation() 
                setCount(count + 1)}}>
                <span className='text-black text-sm' ><PlusIcon className="size-5 text-black-400" /></span>
            </div>
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light'>{data?.data?.title || "Product"}</span>
            <span className='text-lg text-black'>${data?.data?.price}</span>
        </p>
    </div>
)}

export default Card;
