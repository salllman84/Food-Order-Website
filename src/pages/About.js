import React from 'react';
import './About.css'; // Optional for styling

const About = () => {
    return (
        <div className="about-us">
            <h1>About Us</h1>
            <p>
                Welcome to Foody! We are passionate about food and believe in providing the best online food ordering experience. Our goal is to bring delicious meals right to your doorstep.
            </p>
            <p>
                At Foody, we offer a wide variety of food items to satisfy every taste. Whether you're craving a burger, pizza, or something more exotic, we have something for everyone!
            </p>
            <p>
                Our mission is to offer fast, reliable, and friendly service, ensuring your satisfaction with every meal. Join us and enjoy the best food experience!
            </p>
            <h2>Our Values</h2>
            <ul>
                <li>Quality</li>
                <li>Customer Satisfaction</li>
                <li>Innovation</li>
                <li>Integrity</li>
            </ul>
        </div>
    );
};

export default About;
