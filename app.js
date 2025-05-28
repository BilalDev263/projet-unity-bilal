const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.post('/message', (req, res) => {
  const name = req.body.name || 'Anonyme';
  const message = req.body.message || 'Aucun message';

  res.send(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Merci ${name}</title>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
      <style>
        body {
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg, #e0f2fe, #dbeafe);
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          margin: 0;
        }

        .container {
          background: white;
          padding: 2rem 3rem;
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 500px;
          text-align: center;
          animation: fadeIn 1s ease-out;
        }

        h1 {
          color: #10b981;
        }

        p {
          margin-top: 1rem;
          color: #444;
        }

        a {
          display: inline-block;
          margin-top: 2rem;
          padding: 0.6rem 1.2rem;
          background-color: #6366f1;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          transition: background 0.3s ease;
        }

        a:hover {
          background-color: #4f46e5;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Merci ${name} !</h1>
        <p>Votre message a bien été reçu :</p>
        <p><em>"${message}"</em></p>
        <a href="/">Retour à l’accueil</a>
      </div>
    </body>
    </html>
  `);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});