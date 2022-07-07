import { getJWT } from "../services/auth.services.js";

export async function login(req, res) {
  try {
    const { username } = req.body;
    const token = await getJWT(username);
    res.send(token);
  } catch (error) {
    res.status(401).send(error.message);
  }
}
