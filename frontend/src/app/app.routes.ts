import { Routes } from '@angular/router';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { EstoqueComponent } from './components/estoque/estoque.component';

export const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'estoque', component: EstoqueComponent }
];
