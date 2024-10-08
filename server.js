const express = require('express');
const cors = require('cors');


const connectDB = require('./config/db');
const app = express();
require('dotenv').config();





// Connect Database
connectDB();

// Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/auth', require('./routes/auth'));

// app.use('/api/feedback', require('./routes/feedback'));




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
