import produtos from "../models/Produto.js";

class ProdutoController {

    static listarProdutos = async(req, res) => {
      try {
          const produtosResultado = await produtos.find({ativo: true});
          res.status(200).json(produtosResultado);          
      } catch (erro) {
              res.status(500).json({ message: "Erro interno no servidor" });
      }
    }

    static listarProdutoPorId = async (req, res) => {
      const id = req.params.id;  
      try {
        const produtosResultado = await produtos.findById(id);  
        res.status(200).send(produtosResultado);
        console.log(produtosResultado);
      } catch (erro) {
        res.status(400).send({message: `${erro.message} - Id do Autor não localizado.`});
      }
    }

    static listarProdutosPorCategoria = async (req, res) => {
      const { categoria } = req.params;
      try {
        const produtosResultado = await produtos.find({ categoria: new RegExp(`^${categoria}$`, 'i') });
        res.status(200).json(produtosResultado);
      } catch (erro) {
        res.status(500).json({ message: "Erro interno no servidor" + erro });
      }
    }

    static listarProdutosPorLinha = async (req, res) => {
      const { linha } = req.params;
      try {
        const produtosResultado = await produtos.find({ linha: new RegExp(`^${linha}$`, 'i') });
        res.status(200).json(produtosResultado);
      } catch (erro) {
        res.status(500).json({ message: "Erro interno no servidor" + erro });
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
    static atualizarProduto = async (req, res) => {
      const id = req.params.id;
      try {  
        await produtos.findByIdAndUpdate(id, {$set: req.body});
        res.status(200).send({message: "Produto atualizado com sucesso"});
      } catch (erro) {
        res.status(500).send({message: erro.message});
      }
    }

    static excluirProduto = async (req, res) => {
      const id = req.params.id;
      try {
        //await produtos.findByIdAndDelete(id);
        await produtos.findByIdAndUpdate(id, {$set: {ativo: false}})
        res.status(200).send({message: "Produto removido com sucesso"});
      } catch (erro) {
        res.status(500).send({message: erro.message});
      }
    }
  
}

export default ProdutoController;