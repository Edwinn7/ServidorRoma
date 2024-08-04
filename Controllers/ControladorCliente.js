import { ServicioCliente } from "../services/ServicioCliente.js"

export class ControladorCliente{
    constructor(){}

    async buscarClientes(request,response){
        let objServicioCliente = new ServicioCliente()

        try{
            response.status(200).json({
                "mensaje":"Exito en la consulta",
                "datos":await objServicioCliente.buscarClientes(),
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
    async buscarClientePorId(request,response){
        let id=request.params.idCliente
        let objServicioCliente=new ServicioCliente()
        try{
            response.status(200).json({
                "mensaje":"Exito al buscar habitacion con id: "+id,
                "datos":await objServicioCliente.buscarClientePorId(id)
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

    async registrarCliente(request,response){
        let datosCliente=request.body // se obtienen los datos del body
        let objServicioCliente=new ServicioCliente()
        try{
            if(datosCliente){
                await objServicioCliente.agregarClienteEnBD(datosCliente)
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

    async editarCliente(request,response){
        let id=request.params.idCliente
        let datosCliente=request.body
        let objServicioCliente = new ServicioCliente()
        try{
            response.status(200).json({
                "mensaje":"Exito al editar habitacion con id: "+id,
                "datos":await objServicioCliente.editarCliente(id,datosCliente)
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