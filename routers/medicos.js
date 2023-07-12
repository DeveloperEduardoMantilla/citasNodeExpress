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
storageCitas.get("/:especialidad", (req, res) => {
    con.query(
        `SELECT * FROM medico where med_especialidad=${req.params.especialidad}`,
        (err,data,fill)=>{
            res.send(data);
        }
    ) 
})

export default storageCitas;