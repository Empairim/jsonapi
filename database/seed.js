import connectDB from "./db.js ";
import PersonModel from "../models/Person.js";

import seedData from "./seed.json" assert { type: "json" };

const seedDB = async () => {
  try {
    //pulled from up top
    await connectDB();
    //clear Data

    await PersonModel.deleteMany();

    //inserting seed data
    await PersonModel.insertMany(seedData);

    console.log("Database Seeded baby");
  } catch (err) {
    console.error("Error seeding the db :(", err.message);
  }
};

seedDB();
