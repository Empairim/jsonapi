import chalk from "chalk";
import Person from "../models/Person.js";

export const getPeople = async (req, res) => {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (error) {
    console.error(chalk.red("Error fetching people:"), error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createPerson = async (req, res) => {
  const { name, quote } = req.body;
  try {
    const newPerson = await Person.create({ name, quote });
    res.status(201).json(newPerson);
  } catch (error) {
    console.error(chalk.red("Error updating person"), error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updatePerson = async (req, res) => {
  const { id } = req.params;
  const { name, quote } = req.body;
  try {
    const updatedPerson = await Person.findByIdAndUpdate(
      id,
      { name, quote },
      { new: true }
    );
    if (!updatedPerson) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.status(201).json({
      message: chalk.green("Person updated successfully"),
      updatedPerson: updatedPerson,
    });
  } catch (error) {
    console.error(chalk.red("Error fetching people:"), error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deletePerson = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPerson = await Person.findByIdAndDelete(id);
    if (!deletedPerson) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.json({ message: chalk.green("Person deleted successfully") });
  } catch (error) {
    console.error(chalk.red("Error deleting person"), error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
