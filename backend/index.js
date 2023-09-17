const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://ToshikaRaikwar:HwaXjFbxf3PZRQfU@atlascluster.qnbhuxa.mongodb.net/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB database');
});


const Dropout = mongoose.model('Dropout', {
  name: String,
  email: String,
  
});

app.post('/api/submitDropout', async (req, res) => {
  try {
    const dropoutData = req.body; 
    const newDropout = new Dropout(dropoutData);
    await newDropout.save();

    res.status(201).json({ message: 'Dropout submitted successfully' });
  } catch (error) {
    console.error('Error submitting dropout:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
