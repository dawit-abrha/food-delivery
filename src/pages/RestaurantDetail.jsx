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
            name: 'Zahla',
            price: '€ 30',
            image: 'https://www.yeprecipes.com/data/media/7/atakilt-wat-recipe.jpg'
        },
        {
            id: 6,
            name: 'Kikie',
            price: '€ 15',
            image: 'https://spicecravings.com/wp-content/uploads/2018/10/Misir-Wot-1.jpg'
        },
    ];

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    return (
        <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 10px' }}>
            <h1>Menu</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
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
