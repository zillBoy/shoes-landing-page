import React from 'react'
import {ReactComponent as UserIcon} from '../assets/user.svg'

const Navigation = () => {
    return (
        <nav className='navigation-container'>
            <section className='navigation-container-section'>
                <li className='navigation-item'>Shop</li>
                <li className='navigation-item'>Collections</li>
                <li className='navigation-item'>Contact</li>
            </section>
            <section className='navigation-container-section'>
                <li className='navigation-item navigation-item--icon'>
                    <UserIcon />
                    <span>Sign in</span>
                </li>
            </section>
        </nav>
    )
}

export default Navigation
