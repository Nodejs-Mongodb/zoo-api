import animalModel from "../models/animal.model.js";

export async function getAnimals() {
  try {
    const animals = await animalModel.find();
    return animals;
  } catch (error) {
    return `Service error: "${error.message}"`;
  }
}

export async function getFreeAnimals() {
  try {
    const animal = await animalModel.find({ free: true });
    return animal;
  } catch (error) {
    return `Service error: "${error.message}"`;
  }
}

export async function getAnimalById(id) {
  try {
    const animal = await animalModel.findById(id);
    return animal;
  } catch (error) {
    return `Service error: "${error.message}"`;
  }
}

export async function addAnimal(name, description, color, race, age) {
  try {
    const animal = new animalModel({
      name: name,
      description: description,
      color: color,
      race: race,
      age: age,
      free: true,
    });
    await animal.save();
    return animal;
  } catch (errors) {
    return `Service error: "${error.message}"`;
  }
}
