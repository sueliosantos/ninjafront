import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/CategoryModel';
import { SubCategoryModel } from 'src/app/models/SubCategoryModel';
import { CategoryService } from 'src/app/services/category.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss'],
})
export class SubCategoryComponent {
  model: SubCategoryModel = new SubCategoryModel();
  categorys: Array<CategoryModel> = new Array<CategoryModel>();

  constructor(
    private subCategorySrv: SubCategoryService,
    private categorySrv: CategoryService,
    private matSnack: MatSnackBar,
    private router: Router,
    private active: ActivatedRoute
  ) {}

  ngOnInit() {
    this.active.params.subscribe((p) => this.getId(p['id']));
    this.bindCategorys();
  }

  async bindCategorys(): Promise<void> {
    const result = await this.categorySrv.GetAll();
    if (result.success) {
      this.categorys = result.data as Array<CategoryModel>;
    }
  }

  async getId(id: string): Promise<void> {
    if (id === 'new') {
      return;
    }
    const result = await this.subCategorySrv.GetById(Number(id));
    this.model = result.data as SubCategoryModel;
  }

  async save(): Promise<void> {
    const result = await this.subCategorySrv.post(this.model);
    if (result.success) {
      this.matSnack.open('Sub Categoria salva com sucesso', undefined, {
        duration: 3000,
      });
      this.router.navigateByUrl('/subcategoriaslistar');
    }
  }
}
