# TP 1 : Premiers pas avec Node.js - Backend JavaScript

##  Description

Ce projet est une application Node.js développée dans le cadre du TP "Premiers pas avec Node.js".
Il permet de découvrir les bases du développement backend en JavaScript, notamment la création d’un serveur, la gestion des fichiers et la mise en place d’une API REST avec Express.js.

## Technologies utilisées

* Node.js
* Express.js
* Morgan (logging)
* Dotenv (variables d’environnement)
* HTML / JavaScript (frontend simple)
##  Structure du projet

```
mon-premier-projet-nodejs/
│
├── app.js              # Serveur Express (API + routes)
├── server.js           # Serveur HTTP simple
├── users.json          # Données des utilisateurs
├── package.json        # Configuration du projet
├── .env                # Variables d’environnement
├── .gitignore          # Fichiers ignorés par Git
│
└── public/
    └── index.html      # Interface utilisateur
```

## Installation

1. Cloner le projet :

```bash
git clone https://github.com/fe045001-netizen/TP-1-Premiers-pas-avec-Node.js---Backend-JavaScript.git
cd mon-premier-projet-nodejs
```

2. Installer les dépendances :

```bash
npm install
```

3. Créer un fichier `.env` :

```
PORT=3000
NODE_ENV=development
```

---
## screenshots

<img width="1366" height="768" alt="WhatsApp Image 2026-04-09 at 16 07 25" src="https://github.com/user-attachments/assets/f5c82f51-7b2a-482d-87a1-40daac7ba806" />

<img width="1366" height="768" alt="Capture d’écran 2026-04-09 161351" src="https://github.com/user-attachments/assets/3a34cb08-3355-4e09-952c-8ce6e4a07d25" />

<img width="1366" height="768" alt="Capture d’écran 2026-04-09 160621" src="https://github.com/user-attachments/assets/e1eed16a-0e0b-4cd2-888f-a6505af63e42" />

<img width="1366" height="768" alt="Capture d’écran 2026-04-09 160124" src="https://github.com/user-attachments/assets/97eb5bc4-aa09-4400-959a-efcfb905a1e4" />

<img width="1366" height="768" alt="Capture d’écran 2026-04-09 155830" src="https://github.com/user-attachments/assets/b23da0fd-368a-4af8-83e9-02604271d793" />

## Lancement du projet

###  Avec Express (recommandé)

```bash
node app.js
```

### Serveur simple (optionnel)

```bash
node server.js
```

---

## Accès à l’application

Ouvrir dans le navigateur :

```
http://localhost:3000
```

---

## API REST (Utilisateurs)

### Obtenir tous les utilisateurs

```
GET /api/users
```

### Obtenir un utilisateur par ID

```
GET /api/users/:id
```

### Ajouter un utilisateur

```
POST /api/users
```

Exemple JSON :

```json
{
  "nom": "Sahmad",
  "prenom": "Fatima",
  "age": 20
}
```

---

## Fonctionnalités

* Serveur HTTP avec Node.js
* API REST avec Express.js
* Lecture et écriture de fichiers (fs)
* Interface web simple
* Gestion des variables d’environnement
* Journalisation des requêtes avec Morgan

---

## Bonnes pratiques

* Le dossier `node_modules` est ignoré via `.gitignore`
* Les variables sensibles sont stockées dans `.env`

---

## Améliorations possibles

* Intégration d’une base de données (MongoDB, MySQL)
* Authentification (JWT, Passport.js)
* Tests unitaires (Jest, Mocha)
* Déploiement (Vercel, AWS, Heroku)

---

## Auteur

**Fatima Ezzahra Sahmad**
