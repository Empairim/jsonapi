import express from "express";
import connectDB from "./database/db.js";
import personRoutes from "./routes/personRoutes.js";
import chalk from "chalk";

const app = express();
const PORT = process.env.PORT || 3030;
connectDB();
app.use(express.json());
app.use("/api", personRoutes);

app.listen(PORT, () => {
  console.log(chalk.green(`Server Up on ${PORT} `));
});
