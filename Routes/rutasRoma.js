import express from 'express'
import { ControladorCliente} from '../Controllers/ControladorCliente'
let ControladorCliente=new ControladorCliente // usando el controlador
import { ControladorReserva } from '../Controllers/ControladorReserva.js'
let controladorReserva=new ControladorReserva
export let rutas=express.Router()

rutas.get('/romastore/clientes',ControladorCliente.buscarClientes)
rutas.get('/romastore/cliente/:idCliente',ControladorCliente.buscarClientePorId)
rutas.post('/romastore/cliente',ControladorCliente.registrarCliente)
rutas.put('/romastore/cliente/:idCliente',ControladorCliente.editarCliente)

//

rutas.get('/hoteles/reservas',controladorReserva.buscarReservas)
rutas.get('/hoteles/reserva/:idReserva',controladorReserva.buscarReservaPorId)
rutas.post('/hoteles/reserva',controladorReserva.registrarReserva)
rutas.put('/hoteles/reserva/:idReserva',controladorReserva.editarReserva)
rutas.delete('/hoteles/reserva/:idReserva',controladorReserva.eliminarReserva)