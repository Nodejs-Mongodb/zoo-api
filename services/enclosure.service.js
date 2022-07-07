import enclosureModel from "../models/enclosure.model.js";

export async function getEnclosures() {
  try {
    const enclosures = await enclosureModel.find();
    return enclosures;
  } catch (error) {
    return `Service error: "${error.message}"`;
  }
}

export async function getEnclosureById(id) {
  try {
    const enclosure = await enclosureModel.findById(id);
    return enclosure;
  } catch (error) {
    return `Service error: "${error.message}"`;
  }
}

export async function addEnclosure(name, limit) {
  try {
    const enclosure = new enclosureModel({
      name: name,
      limit: limit,
      animals: [],
    });
    await enclosure.save();
    return enclosure;
  } catch (errors) {
    return `Service error: "${error.message}"`;
  }
}

export async function modifyEnclosure(id, body) {
  try {
    const updatedEnclosure = await enclosureModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    return updatedEnclosure;
  } catch (errors) {
    return `Service error: "${error.message}"`;
  }
}
