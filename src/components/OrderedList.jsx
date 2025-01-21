import React from 'react';
import { useSelector } from 'react-redux';

const OrderedList = () => {
    const orders = useSelector((state) => state.orders);

    // Sort orders by ID (ascending)
    const sortedOrders = [...orders].sort((a, b) => a.id - b.id);

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Ordered List</h2>
            {sortedOrders.length > 0 ? (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {sortedOrders.map((order) => (
                        <li
                            key={order.id}
                            style={{
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                padding: '10px',
                                margin: '10px 0',
                            }}
                        >
                            <h4>Order #{order.id}</h4>
                            <p>Total: €{order.total}</p>
                            <p>
                                Address: {order.address.houseNumber}, {order.address.streetName}
                            </p>
                            <p>Phone: {order.address.phone}</p>
                            <p>Email: {order.address.email}</p>
                            <h5>Items:</h5>
                            <ul>
                                {order.items.map((item) => (
                                    <li key={item.id}>
                                        {item.name} - {item.quantity} x {item.price}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No orders have been placed yet.</p>
            )}
        </div>
    );
};

export default OrderedList;
