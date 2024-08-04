import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const EsquemaCliente = new Schema({
    nombre:{
        required:true,
        type:String
    },
    cedula:{
        required:true,
        type:Number
    },

    tipo:{
        required:false,
        type:String
    },
    canal:{
        required:false,
        type:String
    },
    ciudad:{
        required:false,
        type:String
    },
    celular:{
        required:true,
        type:Number
    },
    ig:{
        required:false,
        type:String
    },
    direccion:{
        required:false,
        type:String
    },
    email:{
        required:false,
        type:String
    },
    medio_de_pago:{
        required:true,
        type:String
    },
});
export const modeloCliente = mongoose.model('Clientes', EsquemaCliente)