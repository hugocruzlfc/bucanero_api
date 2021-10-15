const db = require('../config/database');
const Sequelize = require('sequelize');


const contracts = require('../models/contracts.model');
const Op = Sequelize.Op;




exports.allcontracts = async(req, res) =>{
    
    try {
        const allContracts = await contracts.findAll();
        if(contracts){
            res.status(200).json(allContracts);
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
        const contractById = await contracts.findByPk(id);
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
    const newContracts = {
       
        exactNumber: req.body.exactNumber,
        sucursal: req.body.sucursal,
        signatureDate: req.body.signatureDate,
        supplierClient: req.body.supplierClient,
        aplicantArea: req.body.aplicantArea,
        supplementContract: req.body.supplementContract,
        object: req.body.object,
        processor: req.body.processor,
        tramitador: req.body.tramitador,
        effect: req.body.effect,
        wayToPay: req.body.wayToPay,
        termToPay: req.body.termToPay,
        nationalInternational: req.body.nationalInternational,
        totalValue: req.body.totalValue,
        currencyPay: req.body.currencyPay,
        exportation: req.body.exportation,
        observations: req.body.observations
    }
    
    try {
        const newContractsResp = await contracts.create(newContracts);
        if(contracts){
            res.status(200).json(newContractsResp);
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
        const num = await contracts.update(req.body, {where:{ id: id}} );
        if(num == 1){
            res.status(200).json({ info: 'contracts was update successfully!' });
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
        const num = await contracts.destroy({where:{ id: id}} );
        if(num == 1){
            res.status(200).json({ info: 'contracts was delete successfully!' });
        }else{
            res.sendStatus(404);
        }
    } catch (error) {
              console.error(error)
    }
    
};
exports.atachedContrtact = async(req, res) =>{
    const id = req.params.id;
    let contractAttached = req.file.path;
    try {
        const num = await contracts.update({contractAttached}, {where:{ id: id}} );
        if(num == 1){
            res.status(200).json({ info: 'Contracts attachedwas successfully!' });
        }else{
            res.sendStatus(404);
        }
    } catch (error) {
              console.error(error)
    }
    
};
