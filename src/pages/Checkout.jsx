import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const [userName, setUserName] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [userCity, setUserCity] = useState('');
    const [userState, setUserState] = useState('');
    const [userZip, setUserZip] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price.slice(1)), 0);

    const handlePlaceOrder = () => {
        // Add logic to place the order with the user's information
        console.log(`Order placed by ${userName} with items:`, cartItems);
        console.log('User   Information:');
        console.log(`Name: ${userName}`);
        console.log(`Address: ${userAddress}, ${userCity}, ${userState} ${userZip}`);
        console.log(`Phone: ${userPhone}`);
    };

    return (
        <div>
            <h2>Checkout</h2>
            {cartItems.length > 0 ? (
                <>
                    <form>
                        <label>
                            Your Name:
                            <input
                                type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </label>
                        <label>
                            Address:
                            <input
                                type="text"
                                value={userAddress}
                                onChange={(e) => setUserAddress(e.target.value)}
                            />
                        </label>
                        <label>
                            City:
                            <input
                                type="text"
                                value={userCity}
                                onChange={(e) => setUserCity(e.target.value)}
                            />
                        </label>
                        <label>
                            State:
                            <input
                                type="text"
                                value={userState}
                                onChange={(e) => setUserState(e.target.value)}
                            />
                        </label>
                        <label>
                            Zip:
                            <input
                                type="text"
                                value={userZip}
                                onChange={(e) => setUserZip(e.target.value)}
                            />
                        </label>
                        <label>
                            Phone:
                            <input
                                type="text"
                                value={userPhone}
                                onChange={(e) => setUserPhone(e.target.value)}
                            />
                        </label>
                    </form>
                    <h3>Order Summary:</h3>
                    {cartItems.map((item) => (
                        <div key={item.id}>
                            <h4>{item.name}</h4>
                            <p>{item.price}</p>
                        </div>
                    ))}
                    <h3>Total: ${total.toFixed(2)}</h3>
                    <button onClick={handlePlaceOrder}>Place Order</button>
                </>
            ) : (
                <div>
                    <p>Your cart is empty.</p>
                    <p>Please add items to your cart to proceed with checkout.</p>
                </div>
            )}
        </div>
    );
};

export default Checkout;