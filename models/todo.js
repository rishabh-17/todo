const Sequelize = require('sequelize');
const sequelize = require('../utils/db')


const Todo = sequelize.define('Todo', {
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    name : Sequelize.STRING,
    description : Sequelize.STRING,
    done : {
        type : Sequelize.BOOLEAN,
        defaultValue : false
    }

})

module.exports = Todo;