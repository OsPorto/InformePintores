//
let mongoose = require('mongoose');
//vamos a enlasarlo al modelo
let pintores = require('../models/pintores');


let pintoresController = {};

/* LISTAR -> FIN()*/
pintoresController.list = (require, res)=>{
    pintores.find({})
    .limit(20)
    .skip(0)
    .exec((err, pintor)=>{
        if(err){
            console.log('Error: ',err)
        }
        res.render('../views/index',{
            pintores: pintor,
            titulo:"Listado de pintores",
            year: new Date().getDate()
        })
    })
};

module.exports = pintoresController;