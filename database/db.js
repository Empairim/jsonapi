import mongoose from "mongoose";
import chalk from "chalk";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/project2", {
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
