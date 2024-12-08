const express = require('express');
const sql = require('mssql');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

const app = express();
app.use(cors());
app.use(bodyParser.json());

// DB Configuration using environment variables
const dbConfig = {
    user: 'salllman',
    password: 'S..#..Ulfat.1',
    server: 'localhost',
    database: 'food_order',
  options: {
    encrypt: true, // Use encryption if required
    trustServerCertificate: true, // Change to true for local development
  },
};

// Connect to the database
sql.connect(dbConfig)
  .then(() => console.log("Connected to SQL Server"))
  .catch((err) => console.log("Database connection error: ", err));

// API Route to get menu items
app.get('/api/menu', async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM menu_items');
    res.json(result.recordset);
  } catch (error) {
    console.error("Error fetching menu items: ", error);
    res.status(500).send('Server Error');
  }
});

// API Route to create an order
app.post('/api/orders', async (req, res) => {
  const { user_id, menu_item_id, quantity } = req.body;
  try {
    const result = await sql.query(
      `INSERT INTO orders (user_id, menu_item_id, quantity) VALUES (${user_id}, ${menu_item_id}, ${quantity})`
    );
    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    console.error("Error placing order: ", error);
    res.status(500).send('Server Error');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
