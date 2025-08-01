import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../../models/produto.model';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
export class ProdutosComponent {
  produtos: Produto[] = [
    { id: 1, nome: 'Café', descricao: 'Café torrado e moído', preco: 12.5, quantidadeEmEstoque: 20 },
    { id: 2, nome: 'Chá', descricao: 'Chá de camomila', preco: 8.0, quantidadeEmEstoque: 5 }
  ];

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'preco', 'quantidade', 'acoes'];
  form: FormGroup;
  editando = false;
  produtoSelecionadoId: number | null = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      preco: [0, [Validators.required, Validators.min(0)]],
      quantidadeEmEstoque: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    const produto = this.form.value;

    if (this.editando && this.produtoSelecionadoId !== null) {
      const index = this.produtos.findIndex(p => p.id === this.produtoSelecionadoId);
      this.produtos[index] = { id: this.produtoSelecionadoId, ...produto };
    } else {
      const novoId = Math.max(...this.produtos.map(p => p.id), 0) + 1;
      const novoProduto: Produto = {
        id: novoId,
        ...produto
      };
      this.produtos.push(novoProduto);
    }

    this.cancelarEdicao();
  }

  editar(produto: Produto) {
    this.editando = true;
    this.produtoSelecionadoId = produto.id;
    this.form.patchValue(produto);
  }

  excluir(id: number) {
    this.produtos = this.produtos.filter(p => p.id !== id);
    this.cancelarEdicao();
  }

  cancelarEdicao() {
    this.editando = false;
    this.produtoSelecionadoId = null;
    this.form.reset();
  }
}