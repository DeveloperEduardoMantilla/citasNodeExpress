insert into tipo_documento (tipdoc_nombre,tipdoc_abreviatura) values ('Cedula de Ciudadania','Cc');
insert into tipo_documento (tipdoc_nombre,tipdoc_abreviatura) values ('Tarjeta de Identidad','T.i');
insert into tipo_documento (tipdoc_nombre,tipdoc_abreviatura) values ('Pasaporte','Past');

insert into genero (gen_nombre,gen_abreviatura) values ('Masculino','M');
insert into genero (gen_nombre,gen_abreviatura) values ('Femenino','F');
insert into genero (gen_nombre,gen_abreviatura) values ('Otro','Otro');

insert into acudiente (acu_nombreCompleto, acu_telefono, acu_direccion) values ('Edgar Eduardo Mantilla Garcia','3167965248', 'Lebrija Santander');
insert into acudiente (acu_nombreCompleto, acu_telefono, acu_direccion) values ('Stiven Carvajal','3147854987', 'Palomitas Floridablanca');


INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES ('123','Andres','Santiago','Carvajal','Peliño','3154784596','Bucaramanga','santiagoyo@gmail.com',1,1,1);
INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES ('321','Fabio','Alberto','Morales','Petriño','3174578496','Giron','fabio478@outlook.es',1,1,1);
INSERT INTO usuario (usu_id, usu_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES ('74','Alejandra','Mantilla','Garcia','3007845647','Lebrija','aleja78@outlook.es',2,2,2);


INSERT INTO especialidad(esp_nombre) VALUES ("Cardiología");
insert into especialidad (esp_nombre) values ('Neumología');
insert into especialidad (esp_nombre) values ('Geriatría');
insert into especialidad (esp_nombre) values ('Hematología ');
insert into especialidad (esp_nombre) values ('Nefrología');
insert into especialidad (esp_nombre) values ('Neurología');
insert into especialidad (esp_nombre) values ('Pediatría ');
insert into especialidad (esp_nombre) values ('Psiquiatría');
insert into especialidad (esp_nombre) values ('Rehabilitación');
insert into especialidad (esp_nombre) values ('Reumatología chloride');
insert into especialidad (esp_nombre) values ('Neurocirugía');


INSERT INTO consultorio(cons_nombre) VALUES ("El Prado");
INSERT INTO consultorio(cons_nombre) VALUES ("Lebrija ");
INSERT INTO consultorio(cons_nombre) VALUES ("La Ganga");
INSERT INTO consultorio(cons_nombre) VALUES ("El tomato");

INSERT INTO estado_cita(estcita_nombre) VALUES ('Aprobada');
INSERT INTO estado_cita(estcita_nombre) VALUES ('Rechazada');
INSERT INTO estado_cita(estcita_nombre) VALUES ('En espera');
                                                

INSERT INTO medico(med_nroMatriculaProfesional,med_nombrecompleto,med_consultorio,med_especialidad) VALUES (100,'Miguel Manrique',1,1);
INSERT INTO medico(med_nroMatriculaProfesional,med_nombrecompleto,med_consultorio,med_especialidad) VALUES (200,'Daniel Martinez',1,1);
INSERT INTO medico(med_nroMatriculaProfesional,med_nombrecompleto,med_consultorio,med_especialidad) VALUES (300,'Andres Mezada',2,4);
INSERT INTO medico(med_nroMatriculaProfesional,med_nombrecompleto,med_consultorio,med_especialidad) VALUES (400,'Angelica Muñoz',1,6);
INSERT INTO medico(med_nroMatriculaProfesional,med_nombrecompleto,med_consultorio,med_especialidad) VALUES (500,'Adriana Rojas',1,3);

INSERT INTO cita(cit_fecha,cit_estadoCita,cit_medico,cit_datosUsuario) VALUES ('2023-04-05',1,200,74);

INSERT INTO cita(cit_fecha,cit_estadoCita,cit_medico,cit_datosUsuario) VALUES ('2023-07-07',1,300,123);

INSERT INTO cita(cit_fecha,cit_estadoCita,cit_medico,cit_datosUsuario) VALUES ('2023-08-08',1,400,321);

INSERT INTO cita(cit_fecha,cit_estadoCita,cit_medico,cit_datosUsuario) VALUES ('2023-09-10',1,500,74);