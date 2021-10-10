import React from "react";
import Link from 'next/link';
import NavbarStyles from '../styles/Nav.module.css';

const Navbar = () => {
    return (
        <nav className={NavbarStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Main</Link>
                </li>
                <li>
                    <Link href='/animals'>Animals</Link>
                </li>
                <li>
                    <Link href='/plants'>Plants</Link>
                </li>
                <li>
                    <Link href='/equipment'>Supplies</Link>
                </li>
                <li>
                    <Link href='/care'>Care Sheets</Link>
                </li>
                <li>
//                    <i className="fas fa-address-card"></i>
                    <Link href='/registration'>Registration</Link>
                </li>
                <li>
                    <Link href='/gallery'>Gallery</Link>
                </li>
                <li>
                    <Link href='/forum'>Forum</Link>
                </li>
                <li>
                    <Link href='/auction'>Auction</Link>
                </li>
                <li>
                    <Link href='/about'>About Us</Link>
                </li>
                <li>
                    <Link href='/terms'>Terms</Link>
                </li>
                <li>
                    <i className="fas fa-shopping-cart"></i>
                    <Link href='/cart'>Checkout</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;