import express from 'express';
import bodyParser from 'body-parser';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { internalRouter, publicRouter } from './routes';

const app = express();
const port = 5111;

app.use(express.json());
app.use(bodyParser.json());

app.use('/internal', internalRouter);
app.use('/public', publicRouter);

createConnection()
    .then(async (connection) => {
        app.listen(port, () => console.log(`Server working on port: ${port}`));
    })
    .catch((error) => console.log(error));
