package com.service_estoque.dto;

import lombok.Data;

@Data
public class ProdutoDTO {
    private Long id;
    private String nome;
    private String descricao;
    private Double preco;
    private Integer quantidadeEmEstoque;

    public Integer getQuantidadeEmEstoque() {
        return this.quantidadeEmEstoque;
    }
}