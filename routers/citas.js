import dotenv from "dotenv";
import mysql from "mysql2";
import { Router } from "express";

dotenv.config();
const storageCitas = Router();
let con = undefined;

storageCitas.use((req, res, next) => {
    let my_config = JSON.parse(process.env.MY_DB);
    con = mysql.createPool(my_config);
    next();
})
storageCitas.get("/", (req, res) => {
    con.query(
        /*sql */`SELECT * FROM cita ORDER BY cit_fecha ASC;`,
        (err,data,fill)=>{
            res.send(data);
        }
    )
})
storageCitas.get("/:dia", (req, res) => {
    con.query(
        /*sql */`SELECT * FROM cita where cit_fecha="${req.params.dia}"`,
        (err,data,fill)=>{
            res.send(data);
        }
    )
})


export default storageCitas;