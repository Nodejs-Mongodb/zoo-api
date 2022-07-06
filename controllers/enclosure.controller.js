import { getEnclosures, addEnclosure } from "../services/enclosure.service.js";

export async function getAll(req, res) {
  try {
    const enclosures = await getEnclosures();
    res.send(enclosures);
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
