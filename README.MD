# Api Farmacia => Actividad Test CampusLand


## Obtener pacientes alfabeticamente 
- (GET) http://127.20.30.69:5019/pacientes => Obtiene todos los registros de la tabla usuario ordenados alfabeticamente, esta tabla usuario hace referencia a los pacientes registrados en el sistema.

## Obtener citas por su fecha 
- (GET) http://127.20.30.69:5019/citas => Obtiene todos los registros de la tabla cita ordenados por su fecha

## Obtener medico filtrado por una especialidad  
- (GET) http://127.20.30.69:5019/medicos/1 => Obtiene todos los medicos que se contengan el id de la especialidad enviada al final de la ruta.

## Encontrar la próxima cita para un paciente específico  
- (GET) http://127.20.30.69:5019/pacientes/74 


## Obtener todos los pacientes que tienen citas con un médico específico
- (GET) http://127.20.30.69:5019/pacientes/medico/200 => A traves de este EndPoint se permite obtener todos los pacientes que tiene cita con un medico en especifico.

## Encontrar todas las citas para un día específico
- (GET) http://127.20.30.69:5019/citas/2023-08-08 => Este EndPoint permite mostrar todas las citas filtradas por un dia en especifico.

## Obtener los médicos y sus consultorios
- (GET) http://127.20.30.69:5019/medicos/consultorio => Este EndPoint permite mostrar todos los medicos junto a su consultorio.

## Total de citas que tiene un medico en un dia especifico
- (GET) http://127.20.30.69:5019/medicos/200/2023-09-10 => Este EndPoint permite contar el número de citas que un médico tiene en un día específico.

## Obtener las consultorías para un paciente específico
- (GET) http://127.20.30.69:5019/pacientes/consultorias/74 => Se desarrolla EndPoint que permite obtener las consultorías para un paciente específico.

## Contar el número de citas que un médico tiene en un día específico
- (GET) http://127.20.30.69:5019/pacientes/consultorias/74 => Se desarrolla EndPoint que permite contar el número de citas que un médico tiene en un día específico.