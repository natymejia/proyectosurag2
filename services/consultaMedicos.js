export async function consultarMedicos(){
    //consumiendo API 
    //1.Conocer la direccion del API o servicio
    //API O servicio
    let url="https://apigestorapp.vercel.app/gestionapp/especialistas"

    //2.Configurar a que voy al API
    //Configurando la request o peticion
    let peticion={
        method:"GET",
    
    }
    //3. Consumir
    //Traer los datos del API
    let respuesta=await fetch(url,peticion)
    let medicos=await respuesta.json()

    return(medicos)
}