// src/components/MenuItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const MenuItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem(item));
        alert(`Item added to cart: ${item.name}`);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}>
            <img src={item.image} alt={item.name} style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '10px 10px 0 0',
            }} />
            <h2 style={{ margin: '10px 0' }}>{item.name}</h2>
            <p style={{ margin: '10px 0' }}>{item.price}</p>
            <button style={{
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
            }} onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default MenuItem;