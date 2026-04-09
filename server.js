// Importation du module HTTP natif de Node.js
const http = require('http');

// Définition du port d'écoute
const PORT = 3000;

// Création du serveur
const server = http.createServer((req, res) => {
  // Configuration des en-têtes de réponse
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  // Envoi du contenu de la réponse
  res.end('<h1>Bonjour depuis mon premier serveur Node.js!</h1>');
});

// Démarrage du serveur
server.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});