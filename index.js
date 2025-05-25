const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const admin = require("firebase-admin");
const serviceAccount = require("./firebase-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let commandes = []; // ← pour stocker les commandes temporairement
const admin = { username: "admin", password: "admin123" }; // ← à adapter si besoin
const produits = []; // ← à remplir plus tard si nécessaire

app.post('/commande', async (req, res) => {
  console.log("BODY REÇU:", req.body);

  const { panier, telephone, adresse, montant_livraison, type_adresse, mode_paiement } = req.body;

  if (!panier || !telephone || !adresse) {
    return res.status(400).send("0#@#Champs manquants");
  }

  try {
    await db.collection("commandes").add({
      panier,
      telephone,
      adresse,
      montant_livraison,
      type_adresse,
      mode_paiement,
      date: new Date().toISOString()
    });

    res.send("1#@#Commande reçue");
  } catch (error) {
    console.error("Erreur Firebase :", error);
    res.status(500).send("0#@#Erreur serveur");
  }
});


// ADMIN - Connexion simple
app.post('/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === admin.username && password === admin.password) {
    return res.json({ message: "Connexion réussie" });
  } else {
    return res.status(401).json({ message: "Mauvais identifiants" });
  }
});

// ADMIN - Voir commandes
app.get('/api/produits', (req, res) => {
  res.json(produits);
});

app.listen(PORT, () => {
  console.log(`Serveur en ligne sur http://localhost:${PORT}`);
});
