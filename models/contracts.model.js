const Sequelize = require('sequelize');
const db = require('../config/database');

const suplements = require('../models/suplements.model');

const contracts = db.define('contracts', {
    id:{
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    exactNumber: {    //Número de EXACT: Debe ser alfa numérico 
        type: Sequelize.STRING
    },
    sucursal: {    //sucursal 
        type: Sequelize.STRING
    },
    signatureDate: { //Fecha de firma
        type: Sequelize.DATEONLY
    },
    supplierClient: {  // Proveedor/Cliente
        type: Sequelize.STRING
    },
    aplicantArea: { //Área rectora/solicitante 
        type: Sequelize.STRING
    },
    contractType: { //Tipo de contrato o suplemento
        type: Sequelize.STRING
    },
    object: { // Objeto
        type: Sequelize.STRING
    },
    processor: { //Tramitador.
        type: Sequelize.STRING
    },
    effect: { //Vigencia.
        type: Sequelize.INTEGER
    },
    dayYear: { //tipo de vigencia, día o año.
        type: Sequelize.STRING
    },
    wayToPay: { //Forma de pago.
        type: Sequelize.STRING
    },
    termToPay: { //Termino de pago
        type: Sequelize.STRING
    },
    nationalInternational: {// Nacional true o internacional false
        type: Sequelize.BOOLEAN
    },
    totalValue: { // Valor total. 
        type: Sequelize.INTEGER
    },
    currencyPay: { //Moneda de pago. 
        type: Sequelize.STRING
    },
    exportation: { //Exportación.
        type: Sequelize.BOOLEAN
    },
    observations: { //Observaciones.
        type: Sequelize.STRING
    },
    contractAttached: { //foto adjunta.
        type: Sequelize.STRING
    },
    estate: { //estado ejecución o vencido
        type: Sequelize.STRING
    },
    userId: { //estado ejecución o vencido
        type: Sequelize.INTEGER
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
})

contracts.hasMany(suplements, {
    foreignKey: 'contractId',   
    onDelete: 'CASCADE',
    as: 'suplements',
  });
  
  suplements.belongsTo(contracts, {
    foreignKey: 'contractId',
    as: 'contracts',
  });


module.exports = contracts;