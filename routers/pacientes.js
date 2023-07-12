import dotenv from "dotenv";
import mysql from "mysql2";
import { Router } from "express";

dotenv.config();
const storagePacientes = Router();
let con = undefined;

storagePacientes.use((req, res, next) => {
    let my_config = JSON.parse(process.env.MY_DB);
    con = mysql.createPool(my_config);
    next();
})
storagePacientes.get("/", (req, res) => {
    con.query(
        /*sql */`SELECT * FROM usuario ORDER BY usu_nombre ASC;`,
        (err,data,fill)=>{
            res.send(data);
        }
    )
})

export default storagePacientes;