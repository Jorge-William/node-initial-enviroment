import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/products', (req,res) => res.send(
        [
            { 
                name: 'Default product',
                description: 'Default description',
                price: 100
            }
        ]
    )
);

export default app;