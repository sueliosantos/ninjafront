import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminGuard } from './shared/admin.guard';
import { SubCategoryComponent } from './pages/sub-category/sub-category.component';

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
    path: 'subcategorys',
    component: SubCategoryComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'subcategorys/:id',
    component: SubCategoryComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
