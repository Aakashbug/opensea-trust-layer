import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("OpenSea Trust Layer Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});