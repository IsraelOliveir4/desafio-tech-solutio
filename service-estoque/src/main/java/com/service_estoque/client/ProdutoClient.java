package com.service_estoque.client;

import com.service_estoque.dto.ProdutoDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(
    name = "produto-service",
    url = "${produto.service.url}",
    configuration = com.service_estoque.config.FeignConfig.class
)
public interface ProdutoClient {
    
    @GetMapping("/api/produtos/{id}")
    ProdutoDTO buscarProduto(@PathVariable("id") Long id);
}