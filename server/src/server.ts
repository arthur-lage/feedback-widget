import express from "express";

import { routes } from "./routes";

import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Run app
app.listen(process.env.PORT || 3333, () => console.log(`App is running on port ${process.env.PORT || 3333}`));
