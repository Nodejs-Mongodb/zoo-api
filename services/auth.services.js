import * as jose from "jose";
import dotenv from "dotenv";
dotenv.config();

export async function getJWT(username) {
  const algorithm = "ES256";
  const ecPrivateKey = await jose.importPKCS8(process.env.SECRET, algorithm);

  try {
    return await new jose.SignJWT({ "urn:example:claim": true })
      .setProtectedHeader({ alg: "ES256" })
      .setIssuedAt()
      .setIssuer(username)
      .setAudience("localhost:3000")
      .setExpirationTime("2h")
      .sign(ecPrivateKey);
  } catch (error) {
    return `Auth error while getJWT(): "${error.message}"`;
  }
}
