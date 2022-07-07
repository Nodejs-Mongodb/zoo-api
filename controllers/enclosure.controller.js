import {
  getEnclosures,
  getEnclosureById,
  addEnclosure,
  modifyEnclosure,
} from "../services/enclosure.service.js";

export async function getAll(req, res) {
  try {
    const enclosures = await getEnclosures();
    res.send(enclosures);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getById(req, res) {
  try {
    const enclosure = await getEnclosureById(req.params.id);
    res.send(enclosure);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function addNewEnclosure(req, res) {
  try {
    const newEnclosure = await addEnclosure(req.body.name, req.body.limit);
    res.send(newEnclosure);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function editEnclosure(req, res) {
  try {
    const newEnclosure = await modifyEnclosure(req.params.id, req.body);
    res.send(newEnclosure);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
