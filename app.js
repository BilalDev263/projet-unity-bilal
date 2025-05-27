const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/message', (req, res) => {
  const name = req.body.name || 'Visiteur';
  const message = req.body.message || 'Pas de message';
  res.send(`<h2>Merci ${name} !</h2><p>Votre message : ${message}</p><a href="/">Retour</a>`);
});

app.listen(3000, () => {
  console.log('App en ligne sur http://localhost:3000');
});

//rest