package com.service_estoque.controller;

import com.service_estoque.client.ProdutoClient;
import com.service_estoque.dto.EstoqueResponse;
import com.service_estoque.dto.ProdutoDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/estoque")
public class EstoqueController {
    
    private static final Logger logger = LoggerFactory.getLogger(EstoqueController.class);
    private final ProdutoClient produtoClient;

    public EstoqueController(ProdutoClient produtoClient) {
        this.produtoClient = produtoClient;
    }

    @GetMapping("/{produtoId}")
    public ResponseEntity<?> consultarEstoque(@PathVariable Long produtoId) {
        try {
            ProdutoDTO produto = produtoClient.buscarProduto(produtoId);
            
            // Verificação robusta
            if (produto == null) {
                logger.error("Produto não encontrado para ID: {}", produtoId);
                return ResponseEntity.notFound().build();
            }
            
            if (produto.getQuantidadeEmEstoque() == null) {
                logger.warn("Quantidade em estoque não informada para o produto ID: {}", produtoId);
                return ResponseEntity.badRequest().body("Quantidade em estoque não disponível");
            }
            
            boolean estoqueBaixo = produto.getQuantidadeEmEstoque() < 10;
            return ResponseEntity.ok(new EstoqueResponse(produto, estoqueBaixo));
            
        } catch (Exception e) {
            logger.error("Erro ao consultar estoque: ", e);
            return ResponseEntity.internalServerError().body("Erro ao processar requisição");
        }
    }
}