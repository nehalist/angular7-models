const express = require("express");
const app = express();

// Our users which will be queried by their index
const users = [
  {
    firstName: "Jesse",
    lastName: "Pinkman",
    position: "Manufacturer",
    cars: [
      {
        brand: "BMW",
        model: "M3",
        kW: 338,
      },
    ],
  },
  {
    firstName: "Walter",
    lastName: "White",
    position: "CEO",
    cars: [
      {
        brand: "BMW",
        model: "335i",
        kW: 225,
      },
      {
        brand: "Lamborghini",
        model: "Aventador",
        kW: 566,
      }
    ],
  },
];

// Allow cross-origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/users", (req, res) => {
  return res.json(users);
});

app.get("/user/:id", (req, res) => {
  // To prevent the ID "0" we'll simply subtract by one. This way we can query for id = 2 which will serve us 1, etc.
  const idx = req.params.id - 1;

  if (!users[idx]) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.json(users[idx]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
