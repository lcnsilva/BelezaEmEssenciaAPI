import express from "express";
import ProdutoController from "../controllers/produtoController.js";

const routes = express.Router();

routes.get('/',(req,res) => {
  res.send("testando");
})

routes.get("/produtos", ProdutoController.listarProdutos);
routes.get("/produtos/:id", ProdutoController.listarProdutoPorId);
routes.get("/produtos/categoria/:categoria", ProdutoController.listarProdutosPorCategoria);
routes.get("/produtos/linha/:linha", ProdutoController.listarProdutosPorLinha);
routes.post("/produtos", ProdutoController.cadastrarProduto);
routes.put("/produtos/:id", ProdutoController.atualizarProduto);
routes.delete("/produtos/:id", ProdutoController.excluirProduto);

export default routes;