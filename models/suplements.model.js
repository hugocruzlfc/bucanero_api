const Sequelize = require('sequelize');
const db = require('../config/database');

const suplements = db.define('suplements', {
    id:{
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    amount: {    //Monto
        type: Sequelize.INTEGER
    },
    contractId: {    //id del contrato al q pertenece
        type: Sequelize.INTEGER
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
})

module.exports = suplements;