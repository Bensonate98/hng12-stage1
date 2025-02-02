import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { getFunFact } from "./helpers.js";
import classify from "./classify.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT

// middlewares
app.use(cors());

// routes
app.get("/api/classify-number", async (req, res)=>{
  const num = req.query.number;

  if (!num || isNaN(num) || !Number.isInteger(Number(num))) {
    return res.status(400).json({ number: num, error: true });
  }
  const number = parseInt(num);
  const data = await classify(number)
  res.status(200).json(data);

}); 

app.listen(PORT, ()=>{
  console.log(`Server running at port ${PORT}`);
})
