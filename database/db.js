import mongoose from "mongoose";
import chalk from "chalk";

let MONGODB_URI =
  process.env.PROD_MONGODB || "mongodb://localhost:27017/project2";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(chalk.blue("Connected to MongoDB"));
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectDB;
