import express from "express";
import os from "os";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (_, res) => {
  res.status(200).json("Hello world!");
});

app.get("/host", (_, res) => {
  res.status(200).json(os.hostname());
});

app.listen(3000, () => {
  console.log(`🚀 Server is running on port 3000`);
});
