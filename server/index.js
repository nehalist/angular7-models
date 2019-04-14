const express = require('express');
const app = express();

app.get('/user/:id', (req, res) => {
  res.json({
    id: req.params.id,
    name: 'John Doe',
    age: 24,
    gender: 'male',
    occupation: 'Developer',
    cars: [
      {
        brand: 'BMW',
        model: 'F30'
      },
      {
        brand: 'BMW',
        model: 'F84'
      }
    ]
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
