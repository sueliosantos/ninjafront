import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/CategoryModel';
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
    private router: Router
  ) {}

  ngOnInit() {}

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
