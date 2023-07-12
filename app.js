import express from "express";
import dotenv from "dotenv";
import storagePacientes from "./routers/pacientes.js";
import storageCitas from "./routers/citas.js";

dotenv.config();

const appExpress = express();
appExpress.use(express.json());
appExpress.use("/pacientes", storagePacientes);
appExpress.use("/citas", storageCitas);

const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`));