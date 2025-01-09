import express from 'express'
import router from './app/routes/routes.js'
import bodyParser from 'body-parser';
import setInformations from './app/API/Current-Weather/weather-informations.js';

export const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./src/public'));
app.use(router);

export default app;