import './styles.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { shoppingCartContext } from '../../Context';

const ProductDetail = () => {
    const { isProductDetailOpen, closeProductDetail,productToShow } = useContext(shoppingCartContext)

    console.log(productToShow)
    return (
        <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 top-68 bottom-1 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-4 border-b border-black'>
                <h2 className='text-xl font-medium'>Product Detail</h2>
                <button className='text-black-500' onClick={() => closeProductDetail()}><XMarkIcon className="size-6 text-black-500" /> </button>
            </div>
            <div className='flex flex-col items-center p-2'>
                <figure>
                    <img src={productToShow?.images[0]} onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg';
                    }} alt={productToShow?.title} className='w-full h-full rounded-lg' />
                </figure>
                <p className='flex flex-col p-6 justify-center'>
                    <span className='text-2xl font-medium text-center'>{productToShow?.title}</span>
                    <span className='text-md font-medium'>${productToShow?.price}</span>
                    <span className='text-md font-light text-justify'>{productToShow?.description}</span>
                </p>
            </div>
        </aside>
    )
}

export default ProductDetail