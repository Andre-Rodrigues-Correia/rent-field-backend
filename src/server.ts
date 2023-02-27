import express from 'express';
import 'express-async-errors'

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({ message: 'Hello world' });
});


app.listen(3000, () => {
    console.log('running in port 3000');
});