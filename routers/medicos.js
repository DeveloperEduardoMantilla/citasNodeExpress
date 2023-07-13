import dotenv from "dotenv";
import mysql from "mysql2";
import { Router } from "express";

dotenv.config();
const storageMedico = Router();
let con = undefined;

storageMedico.use((req, res, next) => {
    let my_config = JSON.parse(process.env.MY_DB);
    con = mysql.createPool(my_config);
    next();
})

storageMedico.get("/consultorio", (req, res) => {
    con.query(
        `select medico.med_nroMatriculaProfesional as matricula, medico.med_nombrecompleto as nombre,consultorio.cons_nombre as consultorio from medico INNER JOIN consultorio on med_consultorio=consultorio.cons_codigo;`,
        (err,data,fill)=>{
            res.send(data);
        }
    ) 
}) 

storageMedico.get("/:especialidad", (req, res) => {
    con.query(
        `SELECT * FROM medico where med_especialidad=${req.params.especialidad}`,
        (err,data,fill)=>{
            res.send(data);
        }
    ) 
}) 



export default storageMedico;