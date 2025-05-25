const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
const axios = require('axios');

async function envoyerCommandeWhatsApp(commande) {
  const phone = '221781313769'; // ex : 221771234567
  const apikey = '4157800'; // reçu par WhatsApp
  
  const message = `🛒 NOUVELLE COMMANDE :
Nom : ${commande.telephone}
Adresse : ${commande.adresse}
Livraison : ${commande.montant_livraison} FCFA
Mode : ${commande.mode_paiement}
Produits :
${commande.panier.map(p => `- ${p.quantity} x ${p.name}`).join('\n')}
`;

  const url = `https://api.callmebot.com/whatsapp.php?phone=781313769&text=This+is+a+test&apikey=4157800`;

  try {
    await axios.get(url);
    console.log("✅ Message WhatsApp envoyé !");
  } catch (err) {
    console.error("❌ Erreur envoi WhatsApp :", err.message);
  }
}

// ✅ Variables mémoire
let commandes = [];
const adminCredentials = { username: "admin", password: "admin123" };
const produits = [];

// ✅ Enregistrement d'une commande
app.post('/commande', (req, res) => {
  console.log("BODY REÇU:", req.body);

  const { panier, telephone, adresse, montant_livraison, type_adresse, mode_paiement } = req.body;

  if (!panier || !telephone || !adresse) {
    return res.status(400).send("0#@#Champs manquants");
  }

  commandes.push({
    panier,
    telephone,
    adresse,
    montant_livraison,
    type_adresse,
    mode_paiement,
    date: new Date().toISOString()
  });
  // ✅ Envoi vers WhatsApp
  await envoyerCommandeWhatsApp(commande);

  res.send("1#@#Commande reçue");
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

// ✅ Voir la liste des commandes
app.get('/admin/commandes', (req, res) => {
  res.json(commandes);
});

// ✅ Voir produits (vide pour l’instant)
app.get('/api/produits', (req, res) => {
  res.json(produits);
});

app.listen(PORT, () => {
  console.log(`Serveur en ligne sur http://localhost:${PORT}`);
});
