const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('main');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});