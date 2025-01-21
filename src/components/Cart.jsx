import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../redux/cartSlice';
import { addOrder } from '../redux/ordersSlice';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        houseNumber: '',
        streetName: '',
        phone: '',
        email: '',
    });

    const [orderSubmitted, setOrderSubmitted] = useState(false);

    const handleIncreaseQuantity = (id) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecreaseQuantity = (id) => {
        dispatch(decreaseQuantity(id));
    };

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach((item) => {
            const price = parseFloat(item.price.replace('€', ''));
            totalPrice += price * item.quantity;
        });
        return totalPrice.toFixed(2);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleOrderSubmit = () => {
        const { houseNumber, streetName, phone, email } = formData;

        if (!houseNumber || !streetName || !phone || !email) {
            alert('Please fill in all fields before submitting your order.');
            return;
        }

        const order = {
            id: Date.now(),
            items: cartItems,
            total: calculateTotalPrice(),
            address: formData,
        };

        dispatch(addOrder(order));
        setOrderSubmitted(true);
    };

    if (orderSubmitted) {
        return (
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h2>Thank You!</h2>
                <p>Your order has been submitted successfully.</p>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Cart</h2>
            {cartItems.length > 0 ? (
                <>
                    <div>
                        {cartItems.map((item) => (
                            <div key={item.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
                                <h4>{item.name}</h4>
                                <p>Price: {item.price}</p>
                                <p>
                                    Quantity: {item.quantity}{' '}
                                    <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                                    <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                                    <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                                </p>
                            </div>
                        ))}
                    </div>
                    <p>Total: €{calculateTotalPrice()}</p>
                    <h3>Address Details</h3>
                    <form>
                        <input
                            type="text"
                            name="houseNumber"
                            placeholder="House Number"
                            value={formData.houseNumber}
                            onChange={handleInputChange}
                            style={{ display: 'block', margin: '10px auto' }}
                        />
                        <input
                            type="text"
                            name="streetName"
                            placeholder="Street Name"
                            value={formData.streetName}
                            onChange={handleInputChange}
                            style={{ display: 'block', margin: '10px auto' }}
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            style={{ display: 'block', margin: '10px auto' }}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            style={{ display: 'block', margin: '10px auto' }}
                        />
                    </form>
                    <button onClick={handleOrderSubmit}>Submit Order</button>
                </>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
