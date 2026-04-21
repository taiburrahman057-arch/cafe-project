const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

let orders = [];

// POST order
app.post("/order", (req, res) => {
  const order = req.body;
  order.id = Date.now();
  order.status = "pending";

  orders.push(order);
  console.log("New Order:", order);

  res.json({ message: "Order received" });
});

// GET orders
app.get("/orders", (req, res) => {
  res.json(orders);
});

// UPDATE status
app.patch("/order/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { status } = req.body;

  const order = orders.find(o => o.id === id);

  if (order) {
    order.status = status;
    res.json({ message: "Updated" });
  } else {
    res.status(404).json({ message: "Not found" });
  }
});

app.listen(3000, () => {
  console.log("🔥 Server running on port 3000");
});