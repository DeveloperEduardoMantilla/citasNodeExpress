import express from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import Pacientes from "../controller/pacientes.js";

const proxyPacientes = express();
proxyPacientes.use((req,res,next) =>{
    try{
        let data = plainToClass(Pacientes, req.body, { excludeExtraneousValues: true });
        req.body = data;
        next();
    }
    catch(err){
        res.status(err.status).send(err.message);
    }
})

export default proxyPacientes;