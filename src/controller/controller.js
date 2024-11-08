const express = require("express");
const router = express.Router();
const produtoService = require ("../service/produtoService.js");
const vendaService = require ("../service/vendaService.js");

router.post("/api/produtos", produtoService.createProduto);
router.get("/api/produtos/:id", produtoService.getProductById);
router.put("/api/produtos/:id", produtoService.updateAllProduto);
router.patch("api/produtos/:id", produtoService.updateProduto);
router.patch("api/produtos/:id", produtoService.deleteProduto);

router.post("/api/checkout", vendaService.createVenda);

module.exports = controller;
