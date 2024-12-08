/*import React, { useState } from 'react';
import Header from '../components/Header';
import CategoryFilter from '../components/CategoryFilter';
import FoodItemCard from '../components/FoodItemCard';
import Footer from '../components/Footer';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const foodItems = [
    { 
      name: "Pizza", 
      image: "https://t3.ftcdn.net/jpg/05/60/70/82/240_F_560708240_pMZPOuSfvblWGRoaiZFLT4wiFTzQPwQe.jpg", 
      description: "Delicious cheese pizza", 
      price: "10.99", 
      category: "Main" 
    },
    { 
      name: "Burger", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNG7N8ug4HVafC--fgZdsbcscJ1niNDASXiA&s", 
      description: "Juicy beef burger", 
      price: "5.99", 
      category: "Main" 
    },
    { 
      name: "Pasta", 
      image: "https://healthyfitnessmeals.com/wp-content/uploads/2021/09/Garlic-shrimp-pasta-7.jpg", 
      description: "Creamy pasta", 
      price: "7.99", 
      category: "Main" 
    },
    { 
      name: "Salad", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4H0fHrZBRoMKL_MnlM76gLeSAOkx_R-wC2whR4hd6z5vMYxwm-t8yTSAHhp646Pl9FNc&usqp=CAU", 
      description: "Healthy green salad", 
      price: "4.99", 
      category: "Side" 
    },
    { 
      name: "Ice Cream", 
      image: "https://plus.unsplash.com/premium_photo-1661427159078-9d85039e99b8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D", 
      description: "Sweet ice cream dessert", 
      price: "3.99", 
      category: "Dessert" 
    },
    { 
      name: "Coffee", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIBN3hda5Z9pug6OOkVIzza_y6Xpn0NekOsQ&s", 
      description: "Freshly brewed coffee", 
      price: "2.99", 
      category: "Beverage" 
    }
  ];

  const filteredFoodItems = foodItems.filter(item => selectedCategory === 'All' || item.category === selectedCategory);

  return (
    <div>
      <Header />
      <CategoryFilter setSelectedCategory={setSelectedCategory} />
      <div className="food-item-list">
        {filteredFoodItems.map((item, index) => (
          <FoodItemCard 
            key={index}
            name={item.name} 
            image={item.image} 
            description={item.description} 
            price={item.price} 
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
*/












import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Menu = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="menu-hero bg-dark text-white text-center py-5">
        <h1>Our Menu</h1>
        <p>Explore our delicious offerings and pick your favorites!</p>
      </div>

      {/* Features Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <Row>
          {/* Feature 1 */}
          <Col md={4} className="mb-4">
            <Card className="shadow">
              <Card.Img
                variant="top"
                src="https://cdnvb4.haiper.ai/jobs/6754415cbd459fa7ecfde820/675441931efc71697956b4af/3.jpg" // Replace with a proper image link for Delicious Offers
                alt="Delicious Offers"
              />
              <Card.Body>
                <Card.Title>Delicious Offers!</Card.Title>
                <Card.Text>
                  Explore the tastiest food at unbeatable prices!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Feature 2 */}
          <Col md={4} className="mb-4">
            <Card className="shadow">
              <Card.Img
                variant="top"
                src="https://cdnvb4.haiper.ai/jobs/6754415cbd459fa7ecfde820/675442bfbd459fa7ecfde985/1.jpg" // Replace with a proper image link for Fresh Ingredients
                alt="Fresh Ingredients"
              />
              <Card.Body>
                <Card.Title>Fresh Ingredients</Card.Title>
                <Card.Text>
                  freshest ingredients make our dishes special.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Feature 3 */}
          <Col md={4} className="mb-4">
            <Card className="shadow">
              <Card.Img
                variant="top"
                src="https://cdnvb4.haiper.ai/jobs/6754415cbd459fa7ecfde820/675444b11efc71697956b82c/2.jpg" // Replace with a proper image link for Order Online
                alt="Order Online"
              />
              <Card.Body>
                <Card.Title>Order Online</Card.Title>
                <Card.Text>
                  Enjoy fast delivery straight to your doorstep.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Menu Items Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Menu</h2>
        <Row>
          {/* Replace with dynamic menu items */}
          <Col md={3} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://cdnvb4.haiper.ai/jobs/6754415cbd459fa7ecfde820/6754462947b0b08e06c5b047/0.jpg" // Replace with a food image
                alt="Chekin Karahi"
              />
              <Card.Body>
                <Card.Title>Chekin Karahi</Card.Title>
                <Card.Text>$10.99</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://files.oaiusercontent.com/file-5EykavVaddEcdC4Z2Jc2kV?se=2024-12-07T13%3A16%3A46Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D9d26330a-b2b8-43f8-95ef-33130d19450d.webp&sig=4tAoZdVTt9SjlLxyPARvjVU2dc8dwXh5vISw%2BuH5TLk%3D" // Replace with a food image
                alt="Peking Duck"
              />
              <Card.Body>
                <Card.Title>Peking Duck</Card.Title>
                <Card.Text>$15.99</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://files.oaiusercontent.com/file-QLDyzcdMvmHcEKSMLunB8S?se=2024-12-07T13%3A18%3A53Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D4fc30ad6-3569-41a7-927f-2545978c185e.webp&sig=MxbSQAds2Byn9vfxrL43fXeZrkM%2B/NrdsL8pftnKisk%3D" // Replace with a food image
                alt="Donar Kabab"
              />
              <Card.Body>
                <Card.Title>Donar Kabab</Card.Title>
                <Card.Text>$8.99</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://files.oaiusercontent.com/file-3mA2iAZc4XJBvJG5xxfHmP?se=2024-12-07T13%3A21%3A07Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Ded8ba157-3a9f-4114-a342-7fa063fd2522.webp&sig=otDitaadoKz/csNv/fjf8nN8K9YZM0sdE%2BQhvRJoyOU%3D" // Replace with a food image
                alt="Pad Thai"
              />
              <Card.Body>
                <Card.Title>Pad Thai</Card.Title>
                <Card.Text>$9.99</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Menu;