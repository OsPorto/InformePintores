const mongoose = require('mongoose');

//vamos  crear un Schema(nuestra base de datos)
let Schema = mongoose.Schema;

//crear la coleccion
let PintoresSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'requerimos el nombre']
    },
    corriente:{
        type:String,
        required: [true, 'Requerimos la corriente']
    },
    nacionalidad:{
        type: String
    },
    pintura:{
        type: String
    }
    });

    module.exports = mongoose.model('pintores', PintoresSchema);