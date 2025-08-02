import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';

import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';

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
    MatChipsModule,
    HttpClientModule
  ],
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoqueComponent {
  idBusca: number = 0;
  produtoEncontrado: Produto | null = null;
  produtoNaoEncontrado: boolean = false;
  estoqueBaixo: boolean = false;

  constructor(private produtoService: ProdutoService) {}

  consultarProduto() {
    this.produtoEncontrado = null;
    this.produtoNaoEncontrado = false;
    this.estoqueBaixo = false;

    this.produtoService.buscarPorId(this.idBusca).subscribe({
      next: (produto: Produto) => {
        this.produtoEncontrado = produto;
        this.estoqueBaixo = produto.quantidadeEmEstoque < 10;
      },
      error: () => {
        this.produtoNaoEncontrado = true;
      }
    });
  }
}
