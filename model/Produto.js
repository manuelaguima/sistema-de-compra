const { DataTypes } = require('sequelize')
const conn = require('../db/conn')

const Produto = conn.define('produto',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    descricao: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    categoria: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    preco: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    percentualDesconto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estoque: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    marca: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imagem: {
        type: DataTypes.CHAR,
        allowNull: false
    }
},{
    tableName: 'produtos',
    timestamps: false
})

module.exports = Produto