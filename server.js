const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Enable CORS
app.use(cors({
  origin: 'http://localhost:4200', // Allow requests from this origin
  methods: ['GET', 'POST'], // Allowed methods
  allowedHeaders: ['Content-Type'], // Allowed headers
}));

app.use(bodyParser.json());

app.post('/feedback', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Feedback received: Name - ${name}, Email - ${email}, Message - ${message}`);
  res.status(200).json({ message: 'Feedback submitted successfully!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
