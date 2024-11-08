const Produto = require("../model/product.js");

const produtoService = {

    getProductById: async (req, res) => {
        try{
            const id = req.params.id;
            const produto = await Produto.findByPk(id);
            if(!produto) 
                return res.status(404).json({mensagem: "Produto não encontrado"})
            res.status(200).json(produto);
        }catch(error){
            console.log(error)
            res.status(500).json({mensagem:"Erro interno"})
        }   
    },

    createProduto:async(req,res)=>{
        try{
            const {nome, preco, quantidade,descricao} = req.body;
            const newProduto = await Produto.create({
                nome,
                preco,
                quantidade,
                descricao,
            });
            res.status(201).json({newProduto,  messege:"Produto criado com sucesso"});
        }catch(error){
            console.log(error)
            res.status(500).json({messege:'Erro interno'});
        }
    },

    updateAllProduto:async(req,res) =>{
        try{
            const {id} = req.params;
            const {nome, preco, quantidade,descricao} = req.body;
            const [updateProduto] = await Produto.update({
                nome,
                preco,
                quantidade,
                descricao,
            },
            {
                where:{id},
            });
            if (updateProduto === 0) return res.status(404).json({messege: 'Produto não encontrado'});
            
            res.json("Produto atualizado com sucesso!");

        }catch(error){
            console.log(error)
            res.status(500).json({messege:'Erro interno'});
        }
    },

    updateProduto:async(req, res) => {
        try{
            const {id} = req.params;
            const {descricao} = req.body;
            const [updateProduto] = await Produto.update({descricao},{where:{id}})

            if (updateProduto === 0) 
                return res.status(404).json({messege: 'Produto não encontrado'});
            res.json("Produto atualizado com sucesso!");
        }catch(error){
            console.log(error)
            res.status(500).json({messege:'Erro interno'});
        }
    },

    deleteProduto:async(req,res) =>{
        try{
            const {id} = req.params;
            const deleteOrder = await Produto.destroy({where:{id}});
            
            if (deleteOrder === 0) return res.status(404).json({messege: 'Produto nao encontrado'});
            
            res.status(204).json({ message: 'Pedido excluído com sucesso' });

        }catch(error){
            console.log(error)
            res.status(500).json({messege:'Erro interno'});
        }
    },
}

module.exports = produtoService;