import { CategoryModel } from './../../models/CategoryModel';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent {
  category: CategoryModel = new CategoryModel();
  constructor(
    private categoryService: CategoryService,
    private matSnack: MatSnackBar,
    private router: Router,
    private active: ActivatedRoute
  ) {}

  ngOnInit() {
    this.active.params.subscribe((p) => this.getId(p['id']));
  }

  async getId(id: string): Promise<void> {
    this.category = new CategoryModel(); // Inicialize um novo objeto de categoria
    if (id === 'new') {
      return;
    }

    try {
      const result = await this.categoryService.GetById(Number(id));
      this.category = result.data as CategoryModel;
    } catch (error) {
      console.error('Erro ao buscar categoria', error);
    }
  }

  async save(): Promise<void> {
    const result = await this.categoryService.post(this.category);

    if (result.success) {
      this.matSnack.open('Categoria salva com sucesso!', undefined, {
        duration: 3000,
      });
      this.router.navigateByUrl('/categorys');
    }

    console.log(result);
  }
}
