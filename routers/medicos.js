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
        `select medico.med_nroMatriculaProfesional as matricula, medico.med_nombrecompleto as nombre, consultorio.cons_nombre as consultorio, especialidad.esp_nombre as especialidad from medico INNER JOIN consultorio on consultorio.cons_codigo=medico.med_consultorio INNER JOIN especialidad on especialidad.esp_id=medico.med_especialidad where especialidad.esp_nombre="${req.params.especialidad}"`,
        (err,data,fill)=>{
            res.send(data);
        }
    ) 
}) 

storageMedico.get("/:medico/:dia", (req, res) => {
    let data = req.params; 
    con.query(      
        `SELECT medico.med_nroMatriculaProfesional as matricula, medico.med_nombrecompleto as medico, cita.cit_fecha as fecha, COUNT(medico.med_nroMatriculaProfesional) as cantidadCitas FROM medico INNER JOIN cita ON cita.cit_medico = medico.med_nroMatriculaProfesional where medico.med_nroMatriculaProfesional=? and cita.cit_fecha=?;`,
        Object.values(data),
        (err,data,fill)=>{
            res.send(data);
        }
    ) 
}) 



export default storageMedico;