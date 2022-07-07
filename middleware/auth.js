import * as jose from "jose";
import dotenv from "dotenv";

dotenv.config();

const algorithm = "ES256";
const ecPublicKey = await jose.importSPKI(process.env.PK, algorithm);

export const authenticateJWT = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    try {
      const token = authHeader.split(" ")[1];

      const { payload, protectedHeader } = await jose.jwtVerify(
        token,
        ecPublicKey
      );
      next();
    } catch (error) {
      res.status(401).send(`Error : ${error.message}`);
    }
  } else {
    res.status(401).send(`Error : unauthorized`);
  }
};
