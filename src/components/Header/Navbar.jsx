import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
    const links = <>
        <NavLink to="/" className='m-2'>Home</NavLink>
        <NavLink to="/about" className='m-2'>About</NavLink>
        <NavLink to="/readList" className='m-2'>Read List</NavLink>
        <a className='m-2'>Book</a>
    </>


    return (
        <div className="navbar bg-base-200 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div >
                <div className="navbar-center flex lg:hidden">
                    {links}
                </div>
                </div>
                <a className="btn btn-ghost text-xl">Boi poka</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                {links}
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    )
}

export default Navbar