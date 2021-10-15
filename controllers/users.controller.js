const db = require('../config/database');
const Sequelize = require('sequelize');
const users = require('../models/users.model');
const Op = Sequelize.Op;




exports.allUsers = async(req, res) =>{
    
    try {
        const allUsers = await users.findAll();
        if(allUsers){
            res.status(200).json(allUsers);
        }else{
            res.sendStatus(404);
        }
    } catch (error) {
              console.error(error)
    }
    
};

exports.userById = async(req, res) =>{
    let { id } = req.params;
    try {
        const userById = await users.findByPk(id);
        if(userById ){
            res.status(200).json(userById);
        }else{
            res.sendStatus(404);
        }
    } catch (error) {
              console.error(error)
    }
    
};


exports.create = async(req, res) =>{
    const newUser = {
       
        name: req.body.name,
        role: req.body.role,
        dni: req.body.dni,
        celular: req.body.celular,
        address: req.body.address,
        password: req.body.password,
        email: req.body.email
    }
    
    try {
        const user = await users.create(newUser);
        if(user){
            res.status(200).json(user);
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
        const num = await users.update(req.body, {where:{ id: id}} );
        if(num == 1){
            res.status(200).json({ info: 'user was update successfully!' });
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
        const num = await users.destroy({where:{ id: id}} );
        if(num == 1){
            res.status(200).json({ info: 'user was delete successfully!' });
        }else{
            res.sendStatus(404);
        }
    } catch (error) {
              console.error(error)
    }
    
};

exports.login = async(req, res) =>{
    let { email, password } = req.body;
    
    try {
        const findUser = await users.findOne({
            where: {
              email, password
            }});
        if(findUser){
           // const token = generateAuthToken(findUser.name, findUser.email); 
            res.status(200).json({auth: true, user: findUser });
        }else{
            res.status(200).json({auth: false });
        }
    } catch (error) {
              console.error(error)
    }
    
};
