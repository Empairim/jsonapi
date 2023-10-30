import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quote: { type: String, required: true },
});

const PersonModel = mongoose.model("PersonModel", personSchema);

export default PersonModel;
