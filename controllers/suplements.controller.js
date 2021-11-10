const db = require('../config/database');
const Sequelize = require('sequelize');


const suplements = require('../models/suplements.model');
const Op = Sequelize.Op;




exports.allSuplements = async(req, res) =>{
    
    try {
        const allSuplements = await suplements.findAll();
        if(suplements){
            res.status(200).json(allSuplements);
        }else{
            res.sendStatus(404);
        }
    } catch (error) {
              console.error(error)
    }
    
};

exports.contractById = async(req, res) =>{
    let { id } = req.params;
    try {
        const contractById = await suplements.findByPk(id);
        if(contractById ){
            res.status(200).json(contractById);
        }else{
            res.sendStatus(404);
        }
    } catch (error) {
              console.error(error)
    }
    
};


exports.create = async(req, res) =>{
    const newSuplements = {
        amount: req.body.amount,
        contractId: req.body.contractId
    }
    
    try {
        const newSuplementsResp = await suplements.create(newSuplements);
        if(suplements){
            res.status(200).json(newSuplementsResp);
        }else{
            res.sendStatus(404);
        }
    } catch (error) {
              console.error(error)
    }
    
};

exports.update = async(req, res) =>{
    const id = req.params.id;
    
    try {
        const num = await suplements.update(req.body, {where:{ id: id}} );
        if(num == 1){
            res.status(200).json({ info: 'Suplements was update successfully!' });
        }else{
            res.sendStatus(404);
        }
    } catch (error) {
              console.error(error)
    }
    
};


exports.delete = async(req, res) =>{
    const id = req.params.id;
    
    try {
        const num = await suplements.destroy({where:{ id: id}} );
        if(num == 1){
            res.status(200).json({ info: 'Suplements was delete successfully!' });
        }else{
            res.sendStatus(404);
        }
    } catch (error) {
              console.error(error)
    }
    
};
