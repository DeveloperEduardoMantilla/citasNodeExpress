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
        /*sql */`select cita.cit_codigo as codigo, cita.cit_fecha as fecha, estado_cita.estcita_nombre as estado, usuario.usu_nombre as usuario, medico.med_nombrecompleto as medico from cita INNER JOIN estado_cita on estado_cita.estcita_id=cita.cit_estadoCita INNER JOIN usuario on usuario.usu_id=cita.cit_datosUsuario INNER JOIN medico on medico.med_nroMatriculaProfesional=cita.cit_medico ORDER BY cita.cit_fecha asc;`,
        (err,data,fill)=>{
            res.send(data);
        }
    )
})
storageCitas.get("/:dia", (req, res) => {
    con.query(
        /*sql */`select cita.cit_codigo as codigo, cita.cit_fecha as fecha, estado_cita.estcita_nombre as estado, usuario.usu_nombre as usuario, medico.med_nombrecompleto as medico from cita INNER JOIN estado_cita on estado_cita.estcita_id=cita.cit_estadoCita INNER JOIN usuario on usuario.usu_id=cita.cit_datosUsuario INNER JOIN medico on medico.med_nroMatriculaProfesional=cita.cit_medico where cit_fecha="${req.params.dia}"`,
        (err,data,fill)=>{
            res.send(data);
        }
    )
})


export default storageCitas;