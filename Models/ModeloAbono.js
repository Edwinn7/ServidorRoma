import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const EsquemaAbono = new Schema({
    fecha: {
        type: Date,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    cuenta: {
        type: String,
        enum: ['mayo', 'junio', 'julio', 'agosto', 'septiembre'],
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    medio_de_pago: {
        type: String,
        enum: ['pendiente', 'bancolombia', 'nequi', 'CTE', 'cash', 'daviplata'],
        required: true
    },
    confirmacion: {
        type: String,
        enum: ['Confirmado', 'Pendiente'],
        required: true
    }
});

export const modeloAbono = mongoose.model('Abonos', EsquemaAbono);
