import React from 'react';
import RestaurantList from '../components/RestaurantList';

const Home = () => {
    const restaurants = [
        {
            id: 1,
            name: 'Margherita Pizza',
            cuisine: 'Italian',
            price: '$10',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a7/0c/d2/our-yetsom-beyanetu-special.jpg?w=900&h=500&s=1',
        },
        {
            id: 2,
            name: 'Pepperoni Pizza',
            cuisine: 'Italian',
            price: '$12',
            image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
            id: 3,
            name: 'Burger King',
            cuisine: 'American',
            price: '$8',
            image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2. 1&auto=format&fit=crop&w=1352&q=80',
        },
    ];

    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Restaurants</h1>
            <RestaurantList restaurants={restaurants} />
        </div>
    );
};

export default Home;