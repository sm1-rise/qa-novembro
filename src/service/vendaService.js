const sequelize = require("sequelize");
const db = require("../config/database.js");


const vendaService = {

    createVenda:async(req,res)=>{
        try{
            const {nome, preco, quantidade,dataDaCompra} = req.body;
            const newVenda = await Produto.create({
                nome,
                preco,
                quantidade,
                dataDaCompra,
            });
            res.status(201).json({newProduto,  messege:"Venda criada com sucesso"});
        }catch(error){
            console.log(error)
            res.status(500).json({messege:'Erro interno'});
        }
    }
}


module.exports = vendaService;