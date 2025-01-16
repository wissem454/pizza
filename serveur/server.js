const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const pizzaRoutes = require('./routes/pizzaRoutes'); // Routes pour pizzas

dotenv.config(); // Charger les variables d'environnement

const app = express();

// Middleware pour gérer CORS (Cross-Origin Resource Sharing)
app.use(cors({
  origin: 'http://localhost:3000', // L'URL de votre frontend React
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());

// Connexion à MongoDB (sans options obsolètes)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connecté à MongoDB'))
  .catch((error) => {
    console.error('Erreur de connexion à MongoDB:', error);
    process.exit(1); // Arrêter le serveur si la connexion échoue
  });

// Routes de l'application
app.use('/api/users', userRoutes);
app.use('/api/pizzas', pizzaRoutes); // Routes pizzas intégrées

// Démarrer le serveur
app.listen(process.env.PORT || 3000, () => {
  console.log(`Serveur démarré sur le port ${process.env.PORT || 3000}`);
});
