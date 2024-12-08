const express = require('express');
const mssql = require('mssql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json()); // To parse incoming JSON requests

// MSSQL Database Configuration
const dbConfig = {
    user: 'salllman',
    password: 'S..#..Ulfat.1',
    server: 'localhost\\SQLEXPRESS',
    database: 'food_order',
    options: {
        encrypt: true,
        trustServerCertificate: true,
        port: 1433
    }
};

// Connect to the database
mssql.connect(dbConfig)
    .then(() => {
        console.log("Database connected successfully!");
    })
    .catch((err) => {
        console.error("Database connection failed: ", err);
    });

// User Registration (Sign Up) Endpoint
app.post('/api/users/register', async (req, res) => {
    console.log('Signup request received'); // Debugging line
    const { name, email, password, role } = req.body;

    try {
        // Check if email exists
        const result = await mssql.query`SELECT * FROM users WHERE email = ${email}`;
        if (result.recordset.length > 0) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash password and insert user
        const hashedPassword = await bcrypt.hash(password, 10);
        await mssql.query`
            INSERT INTO users (name, email, password, role)
            VALUES (${name}, ${email}, ${hashedPassword}, ${role || 'customer'})
        `;
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error("Error registering user: ", error);
        res.status(500).json({ message: 'Server error' });
    }
});

// User Login (Sign In) Endpoint
app.post('/api/users/login', async (req, res) => {
    console.log('Login request received'); // Debugging line
    const { email, password } = req.body;

    try {
        const result = await mssql.query`SELECT * FROM users WHERE email = ${email}`;
        const user = result.recordset[0];
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, 'your_jwt_secret', {
            expiresIn: '1h',
        });

        res.json({ token });
    } catch (error) {
        console.error("Error logging in: ", error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get Menu Items
app.get('/api/menu-items', async (req, res) => {
    try {
        const result = await mssql.query('SELECT * FROM menu_items');
        res.json(result.recordset);
    } catch (error) {
        console.error("Error fetching menu items: ", error);
        res.status(500).json({ message: "Error fetching menu items" });
    }
});

// Get Orders
app.get('/api/orders', async (req, res) => {
    try {
        const result = await mssql.query('SELECT * FROM orders');
        res.json(result.recordset);
    } catch (error) {
        console.error("Error fetching orders: ", error);
        res.status(500).json({ message: "Error fetching orders" });
    }
});

// Get Users
app.get('/api/users', async (req, res) => {
    try {
        const result = await mssql.query('SELECT * FROM users');
        res.json(result.recordset);
    } catch (error) {
        console.error("Error fetching users: ", error);
        res.status(500).json({ message: "Error fetching users" });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
