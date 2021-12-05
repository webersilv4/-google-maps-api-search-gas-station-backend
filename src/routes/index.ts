import express from 'express';
import cors from 'cors';

import { googleMapsApi } from '../utils/services/api/google-maps';
import { createComment, listAllComments } from '../app/comments';


const app = express();

const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200
};

app.use(express.json());
app.use(cors(corsOptions));


app.get('/api/v1/places/:lat/:lng', googleMapsApi);


export default app;