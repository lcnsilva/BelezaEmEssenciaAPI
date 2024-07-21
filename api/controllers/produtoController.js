import produtos from "../models/Produto.js";

class ProdutoController {

    static listarProdutos = async(req, res) => {
        try {
          const produtosResultado = await produtos.find({});
    
          res.status(200).json(produtosResultado);
          
      } catch (erro) {
              res.status(500).json({ message: "Erro interno no servidor" });
      }
    }

    static listarProdutosLiz = async(req, res) => {
      try {
        const produtosResultado = await produtos.find({ nome: /liz/i}).exec();
  
        res.status(200).json(produtosResultado);
        
      } catch (erro) {
              res.status(500).json({ message: "Erro interno no servidor" });
      }
    }

    static listarProdutosLily = async(req, res) => {
      try {
        const produtosResultado = await produtos.find({ nome: /lily/i}).exec();
  
        res.status(200).json(produtosResultado);
        
      } catch (erro) {
              res.status(500).json({ message: "Erro interno no servidor" });
      }
    }

    static cadastrarProduto = async (req, res) => {
      try {
        let produto = new produtos(req.body);
  
        const produtoResultado = await produto.save();
  
        res.status(201).send(produtoResultado.toJSON());
      } catch (erro) {
        res.status(500).send({message: `${erro.message} - falha ao cadastrar produto.`});
      }
    }
}

export default ProdutoController;