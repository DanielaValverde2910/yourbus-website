const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Rutas de ejemplo
const routes = [
  { id: 1, origin: 'San José', destination: 'Heredia', time: '08:00 AM' },
  { id: 2, origin: 'San José', destination: 'Cartago', time: '10:00 AM' },
  { id: 3, origin: 'San José', destination: 'Alajuela', time: '01:00 PM' },
];

// Página principal
app.get('/', (req, res) => {
  res.render('index', { routes });
});

// Página de compra
app.post('/purchase', (req, res) => {
  const { id } = req.body;
  const route = routes.find((r) => r.id == id);
  res.render('purchase', { route });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor ejecutándose en http://localhost:${PORT}`));
