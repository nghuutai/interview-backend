import express from 'express';
import cors from 'cors'
import routes from './routes';
import bodyParser from 'body-parser';
const morgan = require('morgan');
const dotenv = require('dotenv');

const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ limit: '50kb', extended: false }));
app.use(bodyParser.json({ limit: '50kb' }));

app.use(morgan('dev'));

// route middleware
app.use('/', routes);

app.listen(5000, () => console.log('Up and running'));

export default app;