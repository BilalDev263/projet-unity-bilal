const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.post('/message', (req, res) => {
  const name = req.body.name || 'Anonyme';
  const message = req.body.message || 'Pas de message';
  res.send(`<h1>Merci ${name} !</h1><p>${message}</p><a href="/">Retour</a>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});