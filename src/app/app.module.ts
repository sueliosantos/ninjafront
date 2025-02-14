import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { PedidosPendentesComponent } from './components/pedidos-pendentes/pedidos-pendentes.component';
import { CardsDashComponent } from './components/cards-dash/cards-dash.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { getPaginatorIntl } from './shared/paginator-intl';
import { SubCategoryComponent } from './pages/sub-category/sub-category.component';

@NgModule({
  declarations: [
    AppComponent,
    PedidosPendentesComponent,
    CardsDashComponent,
    CategoriasComponent,
    CategoriaComponent,
    HomeComponent,
    LoginComponent,
    SubCategoryComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatInputModule,
    MatSnackBarModule,
    MatPaginatorModule,
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useValue: getPaginatorIntl(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
