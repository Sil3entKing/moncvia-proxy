# MonCVIA – Backend Proxy (OpenAI)

Ce serveur proxy protège la clé API OpenAI utilisée pour générer des CV et lettres de motivation via le frontend MonCVIA.

## Technologies utilisées
- Node.js
- Express.js
- OpenAI SDK
- Dotenv (variables d'environnement)
- CORS (accès frontend)

## Démarrage en local

1. Cloner le repo :
   git clone https://github.com/TON_UTILISATEUR/TON_REPO.git

2. Ajouter un fichier `.env` avec ta clé :
   OPENAI_API_KEY=ta_cle_api_ici

3. Installer les dépendances :
   npm install

4. Lancer le serveur :
   npm start

Le serveur tourne par défaut sur `http://localhost:3000`.

## Route API

```bash
POST /api
Body JSON : {
  "prompt": "Texte à générer",
  "role": "Instruction du système (ex: Tu es un assistant...)"
}
