import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const EsquemaPedido = new Schema({
    tipo_de_cliente: {
        type: String,
        enum: ['grupo', 'Instagram'],
        required: true
    },
    canal_compra: {
        type: String,
        enum: ['WhatsApp', 'Instagram', 'PAM'],
        required: true
    },
    medio_de_pago: {
        type: String,
        enum: ['pendiente', 'bancolombia', 'nequi', 'CTE', 'cash', 'daviplata'],
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    producto: {
        type: String,
        required: true
    },
    precio_venta: {
        type: Number,
        required: true
    },
    precio_compra: {
        type: Number,
        required: true
    },
    envio: {
        type: String,
        required: false
    },
    tipo_de_compra: {
        type: String,
        enum: ['compra', 'recompra', 'cambio'],
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    ganancia: {
        type: Number,
        required: true
    },
    pago_en_caja: {
        type: String,
        enum: ['Pendiente', 'Pagado', 'Abono'],
        required: true
    }
});

export const modeloPedido = mongoose.model('Pedidos', EsquemaPedido);
