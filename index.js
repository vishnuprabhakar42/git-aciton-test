const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from GitHub Actions Test App and this is the update  🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
