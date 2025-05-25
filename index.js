const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// ✅ Stockage local des commandes
let commandes = [];
const adminCredentials = { username: "admin", password: "admin123" };
const produits = [];

// ✅ Fonction pour envoyer la commande via WhatsApp
async function envoyerCommandeWhatsApp(commande) {
  const phone = '221781313769'; // ← ton numéro WhatsApp ici
  const apikey = '4157800'; // ← colle ici la clé reçue par CallMeBot

  const message = `🛒 NOUVELLE COMMANDE :
Téléphone : ${commande.telephone}
Adresse : ${commande.adresse}
Livraison : ${commande.montant_livraison} FCFA
Type d'adresse : ${commande.type_adresse}
Mode de paiement : ${commande.mode_paiement}
Produits :
${commande.panier.map(p => `- ${p.quantity} x ${p.name}`).join('\n')}
`;

  const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(message)}&apikey=${apikey}`;

  try {
    await axios.get(url);
    console.log("✅ Message WhatsApp envoyé !");
  } catch (err) {
    console.error("❌ Erreur envoi WhatsApp :", err.message);
  }
}

// ✅ Route pour recevoir une commande
app.post('/commande', async (req, res) => {
  const { panier, telephone, adresse, montant_livraison, type_adresse, mode_paiement } = req.body;

  if (!panier || !telephone || !adresse) {
    return res.status(400).send("0#@#Champs manquants");
  }

  const commande = {
    panier,
    telephone,
    adresse,
    montant_livraison,
    type_adresse,
    mode_paiement,
    date: new Date().toISOString()
  };

  commandes.push(commande);
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

// ✅ Voir toutes les commandes
app.get('/admin/commandes', (req, res) => {
  res.json(commandes);
});

// ✅ Voir les produits
app.get('/api/produits', (req, res) => {
  res.json(produits);
});

// ✅ Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en ligne sur http://localhost:${PORT}`);
});