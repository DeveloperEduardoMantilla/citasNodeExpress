create database farmacia_node_js;

use farmacia_node_js;

create table tipo_documento(
tipdoc_id INT PRIMARY KEY AUTO_INCREMENT,
tipdoc_nombre VARCHAR(20) default null,
tipdoc_abreviatura VARCHAR(20) default null
);

create table genero(
gen_id INT PRIMARY KEY AUTO_INCREMENT,
gen_nombre VARCHAR(20) default null,
gen_abreviatura VARCHAR(20) default null
);

create table acudiente(
acu_codigo INT PRIMARY KEY AUTO_INCREMENT,
acu_nombreCompleto VARCHAR(100) default null,
acu_telefono VARCHAR(100) default null,
acu_direccion VARCHAR(200)
);

create table estado_cita(
estcita_id INT PRIMARY KEY AUTO_INCREMENT,
estcita_nombre VARCHAR(20) default null
);


create table usuario(
usu_id INT PRIMARY KEY AUTO_INCREMENT,
usu_nombre VARCHAR(50) default null,
usu_segdo_nombre VARCHAR(45) default null,
usu_primer_apellido_usuar VARCHAR(50) default null,
usu_segdo_apellido_usuar VARCHAR(50) default null,
usu_telefono VARCHAR(50) default null,
usu_direccion VARCHAR(100) default null,
usu_email VARCHAR(100) default null,
usu_tipodoc INT, 
usu_genero INT, 
usu_acudiente INT, 
FOREIGN KEY(usu_tipodoc) REFERENCES tipo_documento(tipdoc_id),
FOREIGN KEY(usu_genero) REFERENCES genero(gen_id),
FOREIGN KEY(usu_acudiente) REFERENCES acudiente(acu_codigo)
);

CREATE TABLE especialidad(
    esp_id INT (20) PRIMARY KEY AUTO_INCREMENT,
    esp_nombre VARCHAR (20) default null
);

CREATE TABLE consultorio(
    cons_codigo INT (20) PRIMARY KEY AUTO_INCREMENT,
    cons_nombre VARCHAR (50) default null
);

CREATE TABLE medico(
    med_nroMatriculaProfesional INT PRIMARY KEY,
    med_nombrecompleto VARCHAR(120) default null,
    med_consultorio INT, 
    med_especialidad INT, 
    FOREIGN KEY(med_consultorio) REFERENCES consultorio(cons_codigo),
    FOREIGN KEY(med_especialidad) REFERENCES especialidad(esp_id)
);

CREATE TABLE cita (
    cit_codigo INT PRIMARY KEY AUTO_INCREMENT,
    cit_fecha DATE,
    cit_estadoCita INT,
    cit_medico INT,
    cit_datosUsuario INT,
    FOREIGN KEY(cit_estadoCita) REFERENCES estado_cita(estcita_id),
    FOREIGN KEY(cit_medico) REFERENCES medico(med_nroMatriculaProfesional),
    FOREIGN KEY(cit_datosUsuario) REFERENCES usuario(usu_id)
);
