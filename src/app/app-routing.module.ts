import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminGuard } from './shared/admin.guard';
import { SubcategoriaslistarComponent } from './pages/subcategoriaslistar/subcategoriaslistar.component';
import { SubCategoryComponent } from './pages/sub-category/sub-category.component';
import { QuestoeslistarComponent } from './pages/questoeslistar/questoeslistar.component';
import { QuestaoComponent } from './pages/questao/questao.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent, canActivate: [AdminGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'categorys',
    component: CategoriasComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'category',
    component: CategoriaComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'category/:id',
    component: CategoriaComponent,
    canActivate: [AdminGuard],
  },

  {
    path: 'subcategoriaslistar',
    component: SubcategoriaslistarComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'subcategory/:id',
    component: SubCategoryComponent,
    canActivate: [AdminGuard],
  },

  {
    path: 'questoeslistar',
    component: QuestoeslistarComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'questao/:id',
    component: QuestaoComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
