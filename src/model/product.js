const sequelize = require("sequelize");
const db = require("/config/database.js");


const Product = db.define(
    "Product",{
        id: {
            type: sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
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
        descricao: {
            type: sequelize.TEXT('tiny')
        }
    },
    {
        tableName: "produtos"
    }
);

Product.sync()
    .then(() => {
        console.log("Tabela 'produtos' criada com sucesso.");
    })
    .catch((error) => {
        console.error("Erro ao criar a tabela 'produtos':", error);
    });

module.exports = Product;