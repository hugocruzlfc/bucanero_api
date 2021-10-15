const Sequelize = require('sequelize');
const db = require('../config/database');

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
    supplementContract: { //Tipo de contrato o suplemento
        type: Sequelize.STRING
    },
    object: { // Objeto
        type: Sequelize.STRING
    },
    processor: { //Tramitador.
        type: Sequelize.STRING
    },
    effect: { //Vigencia.
        type: Sequelize.DATEONLY
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
    contractAttached: { //Observaciones.
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
})

module.exports = contracts;