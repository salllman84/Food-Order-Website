import React from 'react';
import './Home.css';
import Header from '../components/Header';
/* import Footer from '../components/Footer'; */
import { Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Header />
      {/* Hero Section with Carousel */}
      <div className="hero-section">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://files.oaiusercontent.com/file-SYnEGoMmGErsvEB45DVFKh?se=2024-12-07T15%3A02%3A30Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D9db53d7d-d6ca-42f8-827c-d6b1100df830.webp&sig=VgFkoFBtBZznMAQoaQ1g%2Bor0/YoIhC1roX0mMEAfoQc%3D"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Delicious Offers!</h3>
              <p>Explore the tastiest food at unbeatable prices!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://files.oaiusercontent.com/file-JLdGDpxEPCg8PNq5t1DN8N?se=2024-12-07T15%3A02%3A30Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Da1bff381-fd64-4d1e-9b6e-9527f5d0ab50.webp&sig=VyTNymAQmVQiri9HG8/gWUFYQBH9VKwVO12qD99IItA%3D"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Fresh Ingredients</h3>
              <p>Only the freshest ingredients make our dishes special.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://files.oaiusercontent.com/file-9UTf6TkkJMX6hJP1FWBHFZ?se=2024-12-07T15%3A02%3A30Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dc6ea0cc4-a05e-43e4-a566-9631c26e47a1.webp&sig=AkKXrWeoc5gOs6FA0YPaIdgEAkSWuvhswO0HBcfv1Gc%3D"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Order Online</h3>
              <p>Enjoy fast delivery straight to your doorstep.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Featured Items Section */}
      <div className="featured-items">
        <h2>Featured Items</h2>
        <div className="featured-item-cards">
          <div className="card">
            <img src="https://image.cdn2.seaart.me/2024-12-07/cta34jde878c73f6ah7g-1/69e3cb8dda4971ca81d44a92cfc604f7_high.webp" alt="Pizza" />
            <h3>Pizza</h3>
            <p>Delicious cheesy pizza with a crispy crust.</p>
          </div>
          <div className="card">
            <img src="https://image.cdn2.seaart.me/2024-12-07/cta32ple878c73b7u3e0-2/09135635f3efb914d2f093033161dbf6_high.webp" alt="Burger" />
            <h3>Burger</h3>
            <p>Juicy beef burger with fresh toppings.</p>
          </div>
          <div className="card">
            <img src="https://image.cdn2.seaart.me/2024-12-07/cta35ide878c73f6ht9g-1/82de00ee51db95c2fb1c10ce22e68924_high.webp" alt="Pasta" />
            <h3>Pasta</h3>
            <p>Creamy pasta with a rich flavor.</p>
          </div>
          <div className="card">
            <img src="https://image.cdn2.seaart.me/2024-12-07/cta3i95e878c73bb38ug-2/5133abefe6c3d5813bf26f398a55ff8d_high.webp" alt="Appetizers" />
            <h3>Appetizers</h3>
            <p>Sweet & Delicious Appetizers with Cream.</p>
          </div>
        </div>
      </div>




      <div className="featured-items">
        <div className="featured-item-cards">
          <div className="card">
            <img src="https://image.cdn2.seaart.me/2024-12-07/cta3lt5e878c73bbubrg-1/5ece5464cf97ecb7b84507682506cd99_high.webp" alt="Baryani" />
            <h3>Baryani</h3>
            <p>Spicy and Testy Baryani with salad.</p>
          </div>
          <div className="card">
            <img src="https://image.cdn2.seaart.me/2024-12-07/cta3njle878c73far260-1/b384b7fba7f89ed52e4aabb63c176b2a_high.webp" alt="Breakfast" />
            <h3>Breakfast</h3>
            <p>Serving special Breakfast with family.</p>
          </div>
          <div className="card">
            <img src="https://image.cdn2.seaart.me/2024-12-07/cta3ou5e878c73foh3h0-2/b7d84c80a62aa8dc74042a0103a3a769_high.webp" alt="Party" />
            <h3>Party</h3>
            <p>Offering Special Drinks for Party.</p>
          </div>
          <div className="card">
            <img src="https://image.cdn2.seaart.me/2024-12-07/cta3qgde878c73fbi9n0-1/f2963d6b4d01f38e1f97d28ecb73f49e_high.webp" alt="Pin Wheel Simosa" />
            <h3>Pin Wheel Simosa</h3>
            <p>Our well known Pin Wheel Simosa.</p>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="featured-categories">
        <h2>Our Categories</h2>
        <div className="category-cards">
          <div className="category-card">
            <img src="https://image.cdn2.seaart.me/2024-12-07/cta3c55e878c73b9kh40-1/5a1ddf343bf69c36f0a9fad13eb112bb_high.webp" alt="kababs" />
            <h3>kababs</h3>
          </div>
          <div className="category-card">
            <img src="https://image.cdn2.seaart.me/2024-12-07/cta3dm5e878c73f8f1pg-2/2ccfff945d5fd4016e10a0dafea9703f_high.webp" alt="Desserts" />
            <h3>Desserts</h3>
          </div>
          <div className="category-card">
            <img src="https://image.cdn2.seaart.me/2024-12-07/cta3fgde878c73f8sv7g-2/e36f978df4352c887dc3714efde3a994_high.webp" alt="Everyday Cooking" />
            <h3>Everyday Cooking</h3>
          </div>
          <div className="category-card">
            <img src="https://image.cdn2.seaart.me/2024-12-07/cta3edde878c73ba5ra0-2/acbfc90979ef2a9739ee9ca2b751efe6_high.webp" alt="Drinks" />
            <h3>Drinks</h3>
          </div>
          <div className="category-card">
            <img src="https://image.cdn2.seaart.me/2024-12-07/cta3gnte878c73banl60-2/abbef737d1e0d6c7b336ef5b701e58f7_high.webp" alt="Sandwiches" />
            <h3>Sandwiches</h3>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
