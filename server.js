import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.listen(3030, () => {
  console.log("Server Up on 3030 ");
});
