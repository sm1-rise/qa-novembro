const sequelize = require("sequelize");
const db = require("../config/database.js");


const Venda = db.define(
    "Venda",{
        id: {
            type: sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        nome:{
            type: sequelize.STRING,
            allowNull: false,
            },

        preco:{
            type: sequelize.DECIMAL,
            allowNull: false,
        },

        quantidade: {
            type: sequelize.INTEGER,
            allowNull: false,
        },
        dataDaCompra: {
            type: sequelize.DATE,
            allowNull: false,
        }
    },
    {
        tableName: "venda"
    }
);

Venda.sync()
    .then(() => {
        console.log("Tabela 'venda' criada com sucesso.");
    })
    .catch((error) => {
        console.error("Erro ao criar a tabela 'venda':", error);
    });

module.exports = Venda;