import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule
  ],
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'preco', 'quantidadeEmEstoque', 'acoes'];
  form: FormGroup;
  editando = false;
  produtoSelecionadoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      preco: [0, [Validators.required, Validators.min(0)]],
      quantidadeEmEstoque: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtoService.listarProdutos().subscribe({
      next: (produtos) => this.produtos = produtos,
      error: (err) => console.error('Erro ao carregar produtos:', err)
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    const produto = this.form.value as Produto;

    if (this.editando && this.produtoSelecionadoId !== null) {
      this.produtoService.atualizarProduto(this.produtoSelecionadoId, produto).subscribe({
        next: () => {
          this.carregarProdutos();
          this.cancelarEdicao();
        },
        error: (err) => console.error('Erro ao atualizar produto:', err)
      });
    } else {
      this.produtoService.criarProduto(produto).subscribe({
        next: () => {
          this.carregarProdutos();
          this.cancelarEdicao();
        },
        error: (err) => console.error('Erro ao adicionar produto:', err)
      });
    }
  }

  editar(produto: Produto) {
    this.editando = true;
    this.produtoSelecionadoId = produto.id;
    this.form.patchValue(produto);
  }

  excluir(id: number) {
    this.produtoService.deletarProduto(id).subscribe({
      next: () => {
        this.carregarProdutos();
        this.cancelarEdicao();
      },
      error: (err) => console.error('Erro ao excluir produto:', err)
    });
  }

  cancelarEdicao() {
    this.editando = false;
    this.produtoSelecionadoId = null;
    this.form.reset();
  }
}
