import express from 'express'
import { ControladorHabitacion} from '../Controllers/controladorHabitacion.js'
let controladorHabitacion=new ControladorHabitacion // usando el controlador
import { ControladorReserva } from '../Controllers/ControladorReserva.js'
let controladorReserva=new ControladorReserva
//IMPORTAR PARA CLIENTE
import { ControladorCliente } from '../Controllers/ControladorCliente.js'
let controladorCliente = new ControladorCliente

import { ControladorPedido } from '../Controllers/ControladorPedido.js'
let controladorPedido = new ControladorPedido

import { ControladorAbono } from '../Controllers/ControladorAbono.js'
let controladorAbono = new ControladorAbono


export let rutas=express.Router()

rutas.get('/hoteles/habitaciones',controladorHabitacion.buscarHabitaciones)
rutas.get('/hoteles/habitacion/:idHabitacion',controladorHabitacion.buscarHabitacionPorId)
rutas.post('/hoteles/habitacion',controladorHabitacion.registrarHabitacion)
rutas.put('/hoteles/habitacion/:idHabitacion',controladorHabitacion.editarHabitacion)

//

rutas.get('/hoteles/reservas',controladorReserva.buscarReservas)
rutas.get('/hoteles/reserva/:idReserva',controladorReserva.buscarReservaPorId)
rutas.post('/hoteles/reserva',controladorReserva.registrarReserva)
rutas.put('/hoteles/reserva/:idReserva',controladorReserva.editarReserva)
rutas.delete('/hoteles/reserva/:idReserva',controladorReserva.eliminarReserva)

// CLIENTES
rutas.get('/romastore/clientes',controladorCliente.buscarClientes)
rutas.get('/romastore/cliente/:idCliente',controladorCliente.buscarClientePorId)
rutas.post('/romastore/cliente',controladorCliente.registrarCliente)
rutas.put('/romastore/cliente/:idCliente',controladorCliente.editarCliente)

rutas.get('/romastore/pedidos',controladorPedido.buscarPedidos)
rutas.get('/romastore/pedido/:idPedido',controladorPedido.buscarPedidoPorId)
rutas.post('/romastore/pedido',controladorPedido.registrarPedido)
rutas.put('/romastore/pedido/:idPedido',controladorPedido.editarPedido)

rutas.get('/romastore/abonos',controladorAbono.buscarAbonos)
rutas.get('/romastore/abono/:idAbono',controladorAbono.buscarAbonoPorId)
rutas.post('/romastore/abono',controladorAbono.registrarAbono)
rutas.put('/romastore/abono/:idAbono',controladorAbono.editarAbono)