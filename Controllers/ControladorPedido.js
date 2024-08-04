import { ServicioPedido } from "../services/ServicioPedido.js";

export class ControladorPedido {
    constructor() {}

    async buscarPedidos(request, response) {
        let objServicioPedido = new ServicioPedido();

        try {
            response.status(200).json({
                "mensaje": "Éxito en la consulta",
                "datos": await objServicioPedido.buscarPedidos(),
            });
        } catch (error) {
            response.status(400).json({
                "mensaje": "Error en la consulta: " + error,
                "datos": null,
                "estado": false
            });
        }
    }

    async buscarPedidoPorId(request, response) {
        let id = request.params.idPedido; // recibe el id de la petición
        let objServicioPedido = new ServicioPedido();
        try {
            response.status(200).json({
                "mensaje": "Éxito al buscar pedido con id: " + id,
                "datos": await objServicioPedido.buscarPedidoPorId(id)
            });
        } catch (error) {
            response.status(400).json({
                "mensaje": "Error al buscar pedido por id: " + error,
                "datos": null,
                "estado": false
            });
        }
    }

    async registrarPedido(request, response) {
        let datosPedido = request.body; // se obtienen los datos del body
        let objServicioPedido = new ServicioPedido();
        try {
            if (datosPedido) {
                await objServicioPedido.agregarPedidoEnBD(datosPedido); // Llamar al método correcto
                response.status(200).json({
                    "mensaje": "Éxito al registrar pedido",
                    "datos": null
                });
            } else {
                response.status(400).json({
                    "mensaje": "Error en los datos del pedido",
                    "datos": null
                });
            }
        } catch (error) {
            response.status(400).json({
                "mensaje": "Error en la consulta: " + error,
                "datos": null
            });
        }
    }

    async editarPedido(request, response) {
        let id = request.params.idPedido;
        let datosPedido = request.body;
        let objServicioPedido = new ServicioPedido(); // Corregir el nombre del servicio
        try {
            response.status(200).json({
                "mensaje": "Éxito al editar pedido con id: " + id,
                "datos": await objServicioPedido.editarPedido(id, datosPedido) // Usar el método adecuado
            });
        } catch (error) {
            response.status(400).json({
                "mensaje": "Error al editar pedido: " + error,
                "datos": null,
                "estado": false
            });
        }
    }
}
