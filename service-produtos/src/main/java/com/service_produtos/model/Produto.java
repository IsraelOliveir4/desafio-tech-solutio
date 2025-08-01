package com.service_produtos.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "produtos")
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String nome;
    
    private String descricao;
    
    @Column(nullable = false)
    private Double preco;
    
    @Column(name = "quantidade_estoque", nullable = false)
    private Integer quantidadeEmEstoque;
}