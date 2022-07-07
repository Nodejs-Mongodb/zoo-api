import {
  addAnimal,
  getAnimals,
  getAnimalById,
  getFreeAnimals,
} from "../services/animal.service.js";

export async function getAll(req, res) {
  try {
    const animals = await getAnimals();
    res.send(animals);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getAllFree(req, res) {
  try {
    const animals = await getFreeAnimals();
    res.send(animals);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getById(req, res) {
  try {
    const animals = await getAnimalById(req.params.id);
    res.send(animals);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function addNewAnimal(req, res) {
  try {
    const newAnimal = await addAnimal(
      req.body.name,
      req.body.description,
      req.body.color,
      req.body.race,
      req.body.age
    );
    res.send(newAnimal);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
