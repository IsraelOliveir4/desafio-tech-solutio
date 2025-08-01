import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule
  ],
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoqueComponent {
  // ... outras propriedades
    idBusca: number = 0;
    produtoEncontrado: any = null;
    produtoNaoEncontrado: boolean = false; // Adicione esta linha
    estoqueBaixo: boolean = false;
  
  consultarProduto() {
    // 1. Resetar estados anteriores
    this.produtoEncontrado = null;
    this.produtoNaoEncontrado = false;
    this.estoqueBaixo = false;

    // 2. Simulação de busca - substitua por sua lógica real
    const produtoBuscado = this.buscarProdutoNoServico(this.idBusca); 

    // 3. Atualizar estados conforme resultado
    if (produtoBuscado) {
      this.produtoEncontrado = produtoBuscado;
      this.estoqueBaixo = produtoBuscado.quantidadeEmEstoque < 5; // Exemplo: estoque baixo se < 5 unidades
    } else {
      this.produtoNaoEncontrado = true;
    }
  }

  // Método de exemplo (substitua pelo seu serviço real)
  private buscarProdutoNoServico(id: number): any {
    // Mock de dados - na prática, você faria uma chamada HTTP aqui
    const mockProdutos = [
      { id: 1, nome: 'Café', descricao: 'Café premium', preco: 12.50, quantidadeEmEstoque: 10 },
      { id: 2, nome: 'Chá', descricao: 'Chá verde', preco: 8.00, quantidadeEmEstoque: 3 }
    ];
    
    return mockProdutos.find(p => p.id === id);
  }
}