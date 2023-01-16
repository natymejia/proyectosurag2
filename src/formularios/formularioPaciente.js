//creamos una función que nos permita recibir los datos del formulario
import {validarFormulariopaciente} from './ValidacionFormularioPacientes.js'
export function capturarDatos1(etiquetaNombre1,etiquetaIdentificacion1,etiquetaTelefeno1,etiquetaCuota1,etiquetaCorreo1,etiquetaRegimen1,etiquetaGrupoIngreso1){

let nombresPaciente=etiquetaNombre1.value
let documentoPaciente=etiquetaIdentificacion1.value
let telefonoPaciente=etiquetaTelefeno1.value
let cuotaPaciente=etiquetaCuota1.value
let correoPaciente=etiquetaCorreo1.value
let regimenPaciente=etiquetaRegimen1.value
let grupoIngresoPaciente=etiquetaGrupoIngreso1.value


//debemos almacenar todos los valores del formularion en una sola variable
//en una sola variable
//objeto= almacenar varios datos en 1 solo espacio de memoria

let datosFormularioPaciente={
    nombre1:nombresPaciente,
    identificacion1:documentoPaciente,
    telefono1:telefonoPaciente,
    cuota1:cuotaPaciente,
    correo1:correoPaciente,
    regimen1:regimenPaciente,
    grupoingreso1:grupoIngresoPaciente,
    
}
validarFormulariopaciente(datosFormularioPaciente)

}