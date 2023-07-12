import express from "express";
import dotenv from "dotenv";
import storagePacientes from "./routers/pacientes.js";

dotenv.config();

const appExpress = express();
appExpress.use(express.json());
appExpress.use("/pacientes", storagePacientes);

const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`));