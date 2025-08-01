package com.service_estoque.dto;

import lombok.Data;

@Data
public class EstoqueResponse {
    private ProdutoDTO produto;
    private boolean estoqueBaixo;
    private String mensagem;
    
    public EstoqueResponse(ProdutoDTO produto, boolean estoqueBaixo) {
        this.produto = produto;
        this.estoqueBaixo = estoqueBaixo;
        this.mensagem = estoqueBaixo ? "Estoque baixo" : "Estoque normal";
    }
}