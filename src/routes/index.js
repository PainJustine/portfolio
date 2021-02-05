const express = require("express");
const cors = require("cors");
const connection = require("./connection");

const port = 5000;
const app = express();

app.use(cors());

app.use(express.json());

//Route permettant d'afficher tous les projets de la base de données
app.get("/api/projets", (req, res) => {
  connection.query("SELECT * FROM projets", (err, results) => {
    if (err) {
      res.status(500).send({ error: "Erreur..." });
    } else {
      res.status(200).json(results);
    }
  });
});

//Route permettant d'afficher un projet grâce à son id
app.get("/api/projets/:id", (req, res) => {
  connection.query(
    "SELECT * from projets WHERE id=?",
    [req.params.id],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur...");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

//Route permettant d'ajouter un projet à la base de données
app.post("/api/projets", (req, res) => {
  const { name, technos, description, picture } = req.body;
  connection.query(
    "INSERT INTO projets(name, technos, description, picture) VALUES(?, ?, ?, ?)",
    [name, technos, description, picture],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de l'ajout d'un projet...");
      } else {
        res
          .status(200)
          .send("Projet ajouté à la base de données avec succès !");
      }
    }
  );
});

//Route permettant de supprimer un projet à la base de données
app.delete("/api/projets/:id", (req, res) => {
  const projetId = req.params.id;
  connection.query(
    "DELETE FROM projets WHERE id = ?",
    [projetId],
    (err, results) => {
      console.log("Hello2");
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la suppression d'un projet...");
      } else {
        res
          .status(200)
          .send("Projet supprimé de la base de données avec succès !");
      }
    }
  );
});

//Route permettant de mettre à jour un projet dans la base de données
app.put("/api/projets/:id", (req, res) => {
  const projetId = req.params.id;
  const projetModif = req.body;
  connection.query(
    "UPDATE projets SET ? WHERE id = ?",
    [projetModif, projetId],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la mise à jour d'un projet...");
      } else {
        res.status(200).send("Projet mis à jour avec succès !");
      }
    }
  );
});

app.listen(port, (err) => {
  if (err) {
    console.error("Warning", err);
  } else {
    console.log("Server running on", port);
  }
});
