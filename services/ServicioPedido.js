import { modeloPedido } from "../Models/ModeloPedido.js";

export class ServicioPedido{
    // programo los metodos para cada una de las consultas que quiero realizar en la bd

    async buscarPedidos(){
        let pedidos= await modeloPedido.find()
        return pedidos
    }

    async buscarPedidoPorId(id){
        let pedido = await modeloPedido.findById(id)
        return pedido
    }

    async agregarPedidoEnBD(datos){
        let datosValidados=new modeloPedido(datos)
        return await datosValidados.save()
    }

    async editarPedido(id,datos){
        return await modeloPedido.findByIdAndUpdate(id,datos)
    }
}