const express = require('express');
const app = express();
const db = require('./database');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/rings', async (req, res) => {
  try {
    const rings = await db.Ring.findAll();
    res.json(rings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred. Please try again." });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

//need to add
