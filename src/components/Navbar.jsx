import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
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
                position: 'relative',
                flexWrap: 'wrap', // Ensures items wrap for mobile view
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src="https://gorabelu.com/wp-content/uploads/2024/03/ty.png"
                    alt="Food Delivery Logo"
                    style={{
                        width: '100%',
                        height: '50px',
                        borderRadius: '50%',
                        marginRight: '10px',
                    }}
                />
                <h1 style={{ margin: 0, fontSize: '24px' }}>AGELGIL</h1>
            </div>

            {/* Mobile menu toggle button */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontSize: '24px',
                    display: 'none', // Hidden by default for larger screens
                    cursor: 'pointer',
                }}
            >
                ☰
            </button>

            {/* Navigation Links */}
            <ul
                style={{
                    listStyle: 'none',
                    display: menuOpen ? 'block' : 'flex', // Toggle between block and flex
                    flexDirection: menuOpen ? 'column' : 'row',
                    gap: menuOpen ? '10px' : '20px',
                    margin: 0,
                    padding: menuOpen ? '10px' : '0',
                    backgroundColor: menuOpen ? '#007bff' : 'transparent',
                    position: menuOpen ? 'absolute' : 'static',
                    top: menuOpen ? '60px' : 'auto',
                    right: menuOpen ? '20px' : 'auto',
                    zIndex: 1,
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
                    <Link to="/orderdlist" style={{ color: '#fff', textDecoration: 'none' }}>
                        Order List
                    </Link>
                </li>

                {/* Cart Link */}
                <li>
                    <Link to="/cart" style={{ color: '#fff', textDecoration: 'none' }}>
                        Cart ({cartItems.length})
                    </Link>
                </li>
            </ul>

            {/* Mobile-specific styling */}
            <style>
                {`
                    @media (max-width: 768px) {
                        /* Show the menu toggle button on smaller screens */
                        button {
                            display: block;
                        }

                        /* Adjust the navbar items for mobile screens */
                        nav {
                            flex-direction: column;
                            align-items: flex-start;
                        }

                        ul {
                            flex-direction: column;
                            width: 100%;
                        }

                        /* Optional: Add padding and make cart more visible on mobile */
                        li {
                            padding: 10px;
                            text-align: left;
                        }

                        /* Styling for the cart on mobile to ensure visibility */
                        .cart-link {
                            font-size: 16px;
                        }
                    }
                `}
            </style>
        </nav>
    );
};

export default Navbar;
