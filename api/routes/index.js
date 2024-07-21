import express from "express";
import produto from '../routes/produtoRoutes.js'

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({
      titulo: "Beleza em Essência API",
      endpoint_produtos: "/produtos"
    })
  })

  app.use(
    express.json(),
    produto
  )
}

export default routes;