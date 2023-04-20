import express from 'express';
import cartsRouter from './routes/CartsRoutes.js';
import productsRouter from './routes/ProductsRoutes.js';
import __dirname from './Utils.js';

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.listen(PORT, ()=>{
    console.log(`Server running on the port ${PORT}`);
})

app.use('/api/carts', cartsRouter);
app.use('/api/products', productsRouter);
