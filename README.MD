# Api Farmacia => Actividad Test CampusLand


## Obtener pacientes alfabeticamente 
- (GET) http://127.20.30.69:5019/pacientes => Obtiene todos los registros de la tabla usuario ordenados alfabeticamente, esta tabla usuario hace referencia a los pacientes registrados en el sistema.

## Obtener citas por su fecha 
- (GET) http://127.20.30.69:5019/citas => Obtiene todos los registros de la tabla cita ordenados por su fecha

## Obtener medico filtrado por una especialidad  
- (GET) http://127.20.30.69:5019/medicos/1 => Obtiene todos los medicos que se contengan el id de la especialidad enviada al final de la ruta.

## Encontrar la próxima cita para un paciente específico  
- (GET) http://127.20.30.69:5019/pacientes/74 