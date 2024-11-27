const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://sathish:Sathish_1004@cluster0.qticc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
})
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error connecting to database: ", err));

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;
    const newContact = new Contact({ firstName, lastName, email, phone, message });
    await newContact.save();
    res.status(200).json({ code: 200, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ code: 500, message: 'Something went wrong, please try again later.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
