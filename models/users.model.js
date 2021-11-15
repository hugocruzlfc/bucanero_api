const Sequelize = require('sequelize');
const db = require('../config/database');


const contract = require('./contracts.model');


const users = db.define('users', {
    id:{
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    },
	email: {
        type: Sequelize.STRING
    },
	 password: {
        type: Sequelize.STRING
    },
    role: {
        type: Sequelize.STRING
    },
    dni: {
        type: Sequelize.INTEGER
    },
    celular: {
        type: Sequelize.INTEGER
    },
    address: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    },

})



users.hasMany(contract, {
    foreignKey: 'userId',   
    onDelete: 'CASCADE',
    as: 'contracts',
  });
  
  contract.belongsTo(users, {
    foreignKey: 'userId',
    as: 'users',
  });



module.exports = users;