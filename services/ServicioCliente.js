import { modeloCliente } from "../Models/ModeloCliente.js";

export class ServicioCliente{

    async buscarClientes(){
        let clientes= await modeloCliente.find()
        return clientes
    }

    async buscarClientePorId(id){
        let cliente = await modeloCliente.findById(id)
        return cliente
    }
    
    async agregarClienteEnBD(datos){
        let datosValidados=new modeloCliente(datos)
        return await datosValidados.save()
    }

    async editarCliente(id,datos){
        return await modeloCliente.findByIdAndUpdate(id,datos)
    }
}