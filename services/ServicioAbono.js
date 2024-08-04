import { modeloAbono } from "../Models/ModeloAbono.js";

export class ServicioAbono{

    async buscarAbonos(){
        let Abonos= await modeloAbono.find()
        return Abonos
    }

    async buscarAbonoPorId(id){
        let Abono = await modeloAbono.findById(id)
        return Abono
    }

    async agregarAbonoEnBD(datos){
        let datosValidados=new modeloAbono(datos)
        return await datosValidados.save()
    }

    async editarAbono(id,datos){
        return await modeloAbono.findByIdAndUpdate(id,datos)
    }
}