import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (_, res) => {
  res.status(200).json({ message: "Hello world!" });
  return;
});

app.listen(3000, () => {
  console.log(`🚀 Server is running on port 3000`);
});
