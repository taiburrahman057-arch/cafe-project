// TEST - button se order bhejne ke liye
function placeOrder() {
  fetch("https://cafe-project-1-dyym.onrender.com/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      items: ["Coffee", "Burger"],
      total: 200
    })
  })
  .then(res => res.json())
  .then(data => {
    alert("Order placed!");
    console.log(data);
  });
}


// ADMIN SIDE - orders fetch
setInterval(() => {
  fetch("https://cafe-project-1-dyym.onrender.com/orders")
    .then(res => res.json())
    .then(data => {
      console.log("Orders:", data);
    });
}, 3000);