import express from 'express';
import {AppDataSource} from "./src/data-source";
import {router} from "./src/routers/router";

const app = express();
AppDataSource.initialize().then(() => {
    console.log('Connect Database Success!')
});
app.use(express.json());
app.use('', router);
app.listen(3000, () => {
    console.log('Server is running !')
});