import fetch from "node-fetch";

export default function initDb(nbAnimals, nbEnclosures) {
  const colors = [
    "green",
    "red",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "white",
    "black",
  ];

  const races = [
    "dog",
    "cat",
    "bird",
    "fish",
    "horse",
    "lion",
    "tiger",
    "whale",
    "monkey",
  ];

  for (let i = 0; i < nbAnimals; i++) {
    fetch("http://localhost:3000/api/new-animal", {
      method: "POST",
      headers: {
        authorization:
          "Bearer eyJhbGciOiJFUzI1NiJ9.eyJ1cm46ZXhhbXBsZTpjbGFpbSI6dHJ1ZSwiaWF0IjoxNjU3MTg4MzExLCJpc3MiOiJRdWVudGluIEhpcmliYXJuZSIsImF1ZCI6ImxvY2FsaG9zdDozMDAwIiwiZXhwIjoxNjU3MTk1NTExfQ.Zf1Sd3jRECd19K8xQYUXiMCnPPOQSW29O9Q8vCQP_fW_9guTJDZhBbTWSSy3FH82Y0GN_nDgfLoOgpcfPa0YrA",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: Math.random().toString(36).substring(2, 7),
        description: Math.random().toString(36).substring(2, 15),
        color: colors[Math.floor(Math.random() * colors.length)],
        race: races[Math.floor(Math.random() * races.length)],
        age: Math.floor(Math.random() * (0 - 80 + 1) + 80),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  for (let i = 0; i < nbEnclosures; i++) {
    fetch("http://localhost:3000/api/new-enclosure", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Enclos " + Math.random().toString(36).substring(2, 7),
        limit: Math.floor(Math.random() * (0 - 80 + 1) + 80),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}
