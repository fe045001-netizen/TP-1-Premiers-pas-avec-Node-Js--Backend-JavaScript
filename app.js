const express = require('express');
const fs = require('fs');
const path = require('path');

// Création de l'application Express
const app = express();
const PORT = 3000;

// Middleware pour analyser le corps des requêtes JSON
app.use(express.json());

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.send(`
    <h1>API Express de démonstration</h1>
    <p>Essayez les routes suivantes:

    <ul>
      <li><a href="/api/users">/api/users</a> - Tous les utilisateurs</li>
      <li><a href="/api/users/1">/api/users/1</a> - Utilisateur avec ID 1</li>
    </ul>
  `);
});

// Route pour obtenir tous les utilisateurs
app.get('/api/users', (req, res) => {
  fs.readFile(path.join(__dirname, 'users.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({error: 'Erreur serveur'});
    }
    
    const users = JSON.parse(data);
    res.json(users);
  });
});

// Route pour obtenir un utilisateur spécifique
app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  fs.readFile(path.join(__dirname, 'users.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({error: 'Erreur serveur'});
    }
    
    const users = JSON.parse(data);
    const user = users.find(u => u.id === id);
    
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({error: 'Utilisateur non trouvé'});
    }
  });
});

// Route pour créer un nouvel utilisateur
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  
  fs.readFile(path.join(__dirname, 'users.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({error: 'Erreur serveur'});
    }
    
    const users = JSON.parse(data);
    
    // Génération d'un nouvel ID
    const maxId = Math.max(...users.map(u => u.id), 0);
    newUser.id = maxId + 1;
    
    users.push(newUser);
    
    fs.writeFile(path.join(__dirname, 'users.json'), JSON.stringify(users, null, 2), err => {
      if (err) {
        return res.status(500).json({error: 'Erreur serveur'});
      }
      
      res.status(201).json(newUser);
    });
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur Express en cours d'exécution sur http://localhost:${PORT}`);
});