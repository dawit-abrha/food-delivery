import React from 'react';

const RestaurantList = ({ restaurants }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {restaurants.map((restaurant) => (
                <div key={restaurant.id} style={{ margin: '10px', textAlign: 'center' }}>
                    <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '10px',
                            objectFit: 'cover',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        }}
                    />
                    <h3>{restaurant.name}</h3>
                    <p>{restaurant.cuisine}</p>
                    <p>{restaurant.price}</p>
                </div>
            ))}
        </div>
    );
};

export default RestaurantList;