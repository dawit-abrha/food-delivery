import React from 'react';

const ContactUs = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Contact Us</h1>
            <p>Have questions or feedback? Reach out to us!</p>

            {/* Contact Information */}
            <div style={{ marginBottom: '20px' }}>
                <p>Email: <a href="mailto:your-email@example.com">fre.mercy16@gmail.com</a></p>
                <p>Phone: <a href="tel:+1234567890">+31685602133</a></p>
            </div>

            {/* Contact Form */}
            <form style={{ maxWidth: '400px', margin: '0 auto' }}>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="email"
                        placeholder="Your Email"
                        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <textarea
                        placeholder="Your Message"
                        rows="5"
                        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        backgroundColor: '#007bff',
                        color: '#fff',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactUs;