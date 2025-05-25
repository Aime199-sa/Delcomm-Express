const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/commande', (req, res) => {
  console.log("BODY REÇU:", req.body);

  const { panier, telephone, adresse, montant_livraison } = req.body.commande || {};

  if (!panier || !telephone || !adresse) {
    return res.status(400).json({ message: "Champs manquants" });
  }

  commandes.push({ panier, telephone, adresse, montant_livraison });
  res.json({ message: "Commande enregistrée avec succès" });
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
