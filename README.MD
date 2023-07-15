# Api Farmacia => Actividad Test CampusLand


## Obtener pacientes alfabeticamente 
- (GET) http://ipServidor:port/pacientes => Obtiene todos los registros de la tabla usuario ordenados alfabeticamente, esta tabla usuario hace referencia a los pacientes registrados en el sistema.

## Obtener citas por su fecha 
- (GET) http://ipServidor:port/citas => Obtiene todos los registros de la tabla cita ordenados por su fecha

## Obtener medico filtrado por una especialidad  
- (GET) http://ipServidor:port/medicos/:especialidad => Obtiene todos los medicos que se contengan el id de la especialidad enviada al final de la ruta.

## Encontrar la próxima cita para un paciente específico  
- (GET) http://ipServidor:port/pacientes/:idPaciente 


## Obtener todos los pacientes que tienen citas con un médico específico
- (GET) http://ipServidor:port/pacientes/medico/:nmeroMatriculaMedico => A traves de este EndPoint se permite obtener todos los pacientes que tiene cita con un medico en especifico.

## Encontrar todas las citas para un día específico
- (GET) http://ipServidor:port/citas/:aaaa-mm-dd => Este EndPoint permite mostrar todas las citas filtradas por un dia en especifico.

## Obtener los médicos y sus consultorios
- (GET) http://ipServidor:port/medicos/consultorio => Este EndPoint permite mostrar todos los medicos junto a su consultorio.

## Total de citas que tiene un medico en un dia especifico
- (GET) http://ipServidor:port/medicos/:nmeroMatriculaMedico/:aaaa-mm-dd => Este EndPoint permite contar el número de citas que un médico tiene en un día específico.

## Obtener las consultorías para un paciente específico
- (GET) http://ipServidor:port/pacientes/consultorias/:idPaciente => Se desarrolla EndPoint que permite obtener las consultorías para un paciente específico.

## Contar el número de citas que un médico tiene en un día específico
- (GET) http://ipServidor:port/medicos/cantidadCitas/:nmeroMatriculaMedico/:aaaa/mm/dd => Se desarrolla EndPoint que permite contar el número de citas que un médico tiene en un día específico.

## Obtener los consultorio donde se aplicó las citas de un paciente
- (GET) http://ipServidor:port/pacientes/consultorios/:idPaciente => Se desarrolla EndPoint que permite obtener los consultorio donde se aplicó las citas de un paciente.

## Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue aprobada, rechazada, espera
- (GET) http://ipServidor:port/pacientes/citas/:genero/:estado => Se desarrolla EndPoint que permite obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue aprobada, rechazada, Espera.

## Mostrar todas las citas que fueron rechazadas y en un mes específico.
- (GET) http://ipServidor:port/citas/rechazadas/:mm => Se desarrolla EndPoint que permite mostrar todas las citas que fueron rechazadas en un mes específico, muestra la fecha de la cita, el nombre del usuario y el médico.