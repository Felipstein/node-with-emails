import express from 'express';
import { route } from './routes';

const app = express();

app.use(route);

export { app };