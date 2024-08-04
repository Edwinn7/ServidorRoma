import { ServicioAbono } from "../services/ServicioAbono.js"

export class ControladorAbono{
    constructor(){}

    async buscarAbonos(request,response){
        let objServicioAbono = new ServicioAbono()

        try{
            response.status(200).json({
                "mensaje":"Exito en la consulta",
                "datos":await objServicioAbono.buscarAbonos(),
            })    
        }
        catch(error){
            response.status(400).json({
                "mensaje":"Error en la consulta "+error,
                "datos":null,
                "estado":false
            })
        }
    }
    async buscarAbonoPorId(request,response){
        let id=request.params.idAbono
        let objServicioAbono=new ServicioAbono()
        try{
            response.status(200).json({
                "mensaje":"Exito al buscar habitacion con id: "+id,
                "datos":await objServicioAbono.buscarAbonoPorId(id)
            })
        }
        catch(error){
            response.status(400).json({
                "mensaje":"Error al buscar habitacion por id "+error,
                "datos":null,
                "estado":false
            })
        }
    }

    async registrarAbono(request,response){
        let datosAbono=request.body // se obtienen los datos del body
        let objServicioAbono=new ServicioAbono()
        try{
            if(datosAbono){
                await objServicioAbono.agregarAbonoEnBD(datosAbono)
                response.status(200).json({
                "mensaje":"Exito al registrar habitacion",
                "datos":null
                })
            }
            else{
                response.status(400).json({
                    "mensaje":"error en la cantidad de personas ",
                    "datos":null
                })
            }
        }
        catch(error){
            response.status(400).json({
                "mensaje":"Error en la consulta "+error,
                "datos":null
            })
        }
    }

    async editarAbono(request,response){
        let id=request.params.idAbono
        let datosAbono=request.body
        let objServicioAbono = new ServicioAbono()
        try{
            response.status(200).json({
                "mensaje":"Exito al editar habitacion con id: "+id,
                "datos":await objServicioAbono.editarAbono(id,datosAbono)
            })    
        }
        catch(error){
            response.status(400).json({
                "mensaje":"Error al editar "+error,
                "datos":null,
                "estado":false
            })
        }
    }
}