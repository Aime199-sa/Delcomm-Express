const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const admin = require('firebase-admin');

if (!process.env.FIREBASE_KEY_JSON) {
  console.error("❌ La variable FIREBASE_KEY_JSON est vide ou non définie !");
  process.exit(1);
}

const serviceAccount = JSON.parse(process.env.FIREBASE_KEY_JSON);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let commandes = []; // ← pour stocker les commandes temporairement
const adminCredentials = { username: "admin", password: "admin123" }; // ← identifiants admin
const produits = []; // ← à remplir plus tard si nécessaire

// ✅ Route pour passer une commande
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

// ✅ Connexion admin simple
app.post('/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === adminCredentials.username && password === adminCredentials.password) {
    return res.json({ message: "Connexion réussie" });
  } else {
    return res.status(401).json({ message: "Mauvais identifiants" });
  }
});

// ✅ Voir les produits (statique pour l'instant)
app.get('/api/produits', (req, res) => {
  res.json(produits);
});

app.listen(PORT, () => {
  console.log(`Serveur en ligne sur http://localhost:${PORT}`);
});
