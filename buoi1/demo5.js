const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://admin:Nhule2020@cluster0.3utoe.mongodb.net/myshop?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    var dbMyShop = client.db('myshop');
    var product = { cat: 'Book', price: 20, title: 'Budda' };
    dbMyShop.createCollection('products');
    dbMyShop.collection('products').insertOne(product, (err, res) => {
        if (err) throw err;
        console.log('doccument inserted');
        client.close();
    });//insert doccument

});//connect db