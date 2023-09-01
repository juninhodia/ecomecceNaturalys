const mongoose = require('mongodb');

const productSchema = new mongoose.MongoDBCollectionNamespace.Schema({
    name: String,
    sku: String,
    price: Number,
    image: String
});

const Product = mongoose.model('Product', productSchema);

// ... (código anterior)

app.use(express.json()); // para parsing de JSON no body das requisições

// Rota para adicionar um produto
app.post('/products', (req, res) => {
    const product = new Product(req.body);
    product.save()
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err));
});

// Rota para buscar todos os produtos
app.get('/products', (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(500).json(err));
});

// ... (restante do código)
// Adicionando um produto
fetch('/products', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Nome do Produto',
        sku: 'SKU12345',
        price: 100.50,
        image: 'url_da_imagem.jpg'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

// Buscando todos os produtos
fetch('/products')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
