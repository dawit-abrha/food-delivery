// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <nav
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: '#fff',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src="https://gorabelu.com/wp-content/uploads/2024/03/ty.png"
                    alt="Food Delivery Logo"
                    style={{
                        width: '150px',
                        height: '100px',
                        borderRadius: '50%',
                        marginRight: '10px',
                    }}
                />
                <h1 style={{ margin: 0, fontSize: '24px' }}>AGELGIL</h1>
            </div>
            <ul
                style={{
                    listStyle: 'none',
                    display: 'flex',
                    gap: '20px',
                    margin: 0,
                    padding: 0,
                }}
            >
                <li>
                    <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link to="/cart" style={{ color: '#fff', textDecoration: 'none' }}>
                        Cart ({cartItems.length})
                    </Link>
                </li>
                <li>
                    <Link to="/orderdlist" style={{ color: '#fff', textDecoration: 'none' }}>
                        Order List
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;