const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;
const APP_ENV = process.env.APP_ENV || "dev";

app.get("/", (req, res) => {
  res.json({
    message: "Hello from QuickStack 🚀",
    env: APP_ENV,
    time: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
