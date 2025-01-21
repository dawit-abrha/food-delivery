import React, { useState } from 'react';
import MenuItem from '../components/MenuItem';

const RestaurantDetail = () => {
    const [cartItems, setCartItems] = useState([]);
    const menuItems = [
        {
            id: 1,
            name: 'Aynet',
            price: '€ 15',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a7/0c/d2/our-yetsom-beyanetu-special.jpg?w=900&h=500&s=1'
        },
        {
            id: 2,
            name: 'Tibsi',
            price: '€ 20',
            image: 'https://lucyethiopianrestaurant.com/wp-content/uploads/2022/01/Derak-Tibs-300x300.jpg'
        },
        {
            id: 3,
            name: 'Shiro',
            price: '€ 11',
            image: 'https://www.chefspencil.com/wp-content/uploads/Ethiopian-Shiro-Wat.jpg'
        },
        {
            id: 4,
            name: 'Special Aynet',
            price: '€ 20',
            image: 'https://m.media-amazon.com/images/I/81spwdx81UL._AC_UF350,350_QL80_.jpg'
        },
        {
            id: 5,
            name: 'Kitfo',
            price: '€ 30',
            image: 'https://media.cnn.com/api/v1/images/stellar/prod/190205150343-kitfo.jpg?q=w_1600,h_900,x_0,y_0,c_fill'
        },
        {
            id: 6,
            name: 'Kikil',
            price: '€ 15',
            image: 'https://static.ffx.io/images/$zoom_0.378%2C$multiply_0.7725%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/0b7b298261231f597f918cdac59903ecc08ccbfb'
        },
    ];

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    return (
        <div style={{ maxWidth: '800px', margin: '40px auto' }}>
            <h1>Menu</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
            }}>
                {menuItems.map((item) => (
                    <MenuItem key={item.id} item={item} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default RestaurantDetail;