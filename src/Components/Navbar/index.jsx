import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { shoppingCartContext} from '../../Context';
import {  ShoppingCartIcon } from '@heroicons/react/24/solid'
const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'
    const { count,checkoutOpen } = useContext(shoppingCartContext)

    return (
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/' >Shopi</NavLink>
                </li>
                <li>
                    <NavLink to='/all' className={({ isActive }) => isActive ? activeStyle : undefined}    >All</NavLink>
                </li>
                <li>
                    <NavLink to='/clothes' className={({ isActive }) => isActive ? activeStyle : undefined}    >Clothes</NavLink>
                </li>
                <li>
                    <NavLink to='/electronics' className={({ isActive }) => isActive ? activeStyle : undefined}>Electronics</NavLink>
                </li>
                <li>
                    <NavLink to='/furniture' className={({ isActive }) => isActive ? activeStyle : undefined}>Furniture</NavLink>
                </li>
                <li>
                    <NavLink to='/toys' className={({ isActive }) => isActive ? activeStyle : undefined}>Toys</NavLink>
                </li>
                
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    andresvz@gmail.com
                </li>
                <li>
                    <NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyle : undefined}>My Account</NavLink>
                </li>
                <li>
                    <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined}>My Orders</NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in' className={({ isActive }) => isActive ? activeStyle : undefined}>Sign In</NavLink>
                </li>
                <li className="flex items-center justify-center " onClick={() => checkoutOpen()}>
                    <ShoppingCartIcon className="size-6 text-black-500 " /> <span className='text-m'>{count}</span>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;
