import React from 'react';

const AboutUs = () => {
    // Define styles as JavaScript objects
    const styles = {
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'left', // Default text alignment (can be adjusted for RTL languages)
        },
        section: {
            marginBottom: '40px',
        },
        heading: {
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '20px',
        },
        paragraph: {
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '20px',
        },
        image: {
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            borderRadius: '8px',
            marginBottom: '20px',
        },
        list: {
            listStyleType: 'disc',
            paddingLeft: '20px',
            marginBottom: '20px',
        },
        listItem: {
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '10px',
        },
        cta: {
            textAlign: 'center', // Center-align for CTA section
        },
    };

    return (
        <div style={styles.container}>
            {/* Section 1: Introduction */}
            <section style={styles.section}>
                <h1 style={styles.heading}>About Us</h1>
                <p style={styles.paragraph}>
                    Welcome to <strong>AGELGL-Food Delivery</strong>, where we bring the world’s flavors to your doorstep! Founded in <strong>Amsterdam</strong>, our mission is to connect food lovers with the best local restaurants and cuisines from around the globe. We believe that food is not just a necessity but a way to experience different cultures and create lasting memories.
                </p>
                <img
                    src="https://www.habeshamalden.com/files/img/about.jpg"
                    alt="Food Delivery Service"
                    style={styles.image}
                />
            </section>

            {/* Section 2: Vision */}
            <section style={styles.section}>
                <h2 style={styles.heading}>Our Vision</h2>
                <p style={styles.paragraph}>
                    At <strong>AGELGL food delivery</strong>, we envision a world where everyone can enjoy a diverse range of culinary experiences without leaving their homes. We strive to make food delivery accessible, convenient, and enjoyable for everyone.
                </p>
            </section>

            {/* Section 3: Values */}
            <section style={styles.section}>
                <h2 style={styles.heading}>Our Values</h2>
                <ul style={styles.list}>
                    <li style={styles.listItem}>
                        <strong>Quality</strong>: We partner with only the best restaurants to ensure high-quality meals.
                    </li>
                    <li style={styles.listItem}>
                        <strong>Customer Satisfaction</strong>: Your happiness is our priority. We are committed to providing excellent service and support.
                    </li>
                    <li style={styles.listItem}>
                        <strong>Community</strong>: We believe in supporting local businesses and contributing to the communities we serve.
                    </li>
                </ul>
                <img
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/YVdFYC1aTXCKalvy5cQGKQ/1000s.jpg"
                    alt="Diverse Cuisine"
                    style={styles.image}
                />
            </section>

            {/* Section 4: Call to Action */}
            <section style={{ ...styles.section, ...styles.cta }}>
                <h2 style={styles.heading}>Join Us</h2>
                <p style={styles.paragraph}>
                    Whether you’re craving Shiro, Tibsi, or a gourmet Aynet, we’ve got you covered. Explore our menu, place your order, and let us take care of the rest. Experience the joy of food delivery with <strong>Fre food delivery</strong> today!
                </p>
                <img
                    src="https://popmenucloud.com/cdn-cgi/image/width%3D 1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/gfrcipsa/740bc329-501b-4e87-b368-e6f6ab516b69.jpg"
                    alt="Happy Customers"
                    style={styles.image}
                />
            </section>
        </div>
    );
};

export default AboutUs;