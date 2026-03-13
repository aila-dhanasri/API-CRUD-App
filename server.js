const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname)); 

let items = [
    { id: 1, name: 'KIWI', description: 'Everyone prefers this fruit.' },
    { id: 2, name: 'CyberSecurity', description: 'Yogesh interested in this domain.' }
];


app.route('/api/items')
   .get((req, res) => res.json(items))
   .post((req, res) => {
       const newItem = { id: items.length + 1, ...req.body };
       items.push(newItem);
       res.status(201).json(newItem);
   });

app.route('/api/items/:id')
   .delete((req, res) => {
       items = items.filter(item => item.id !== parseInt(req.params.id));
       res.json({ message: 'Item deleted' });
   });


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
});