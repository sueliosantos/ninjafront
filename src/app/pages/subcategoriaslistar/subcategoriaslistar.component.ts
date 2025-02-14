import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SubCategoryModel } from 'src/app/models/SubCategoryModel';
import { SubCategoryService } from 'src/app/services/sub-category.service';
import { Constants } from 'src/app/shared/constantes';
import Sawl from 'sweetalert2';

@Component({
  selector: 'app-subcategoriaslistar',
  templateUrl: './subcategoriaslistar.component.html',
  styleUrls: ['./subcategoriaslistar.component.scss'],
})
export class SubcategoriaslistarComponent {
  columns: string[] = ['Nome', 'Descrição', 'Custo', 'Categoria', 'id'];
  dataSource: MatTableDataSource<SubCategoryModel> =
    new MatTableDataSource<SubCategoryModel>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private subcategorySrv: SubCategoryService) {
    this.paginator = {} as MatPaginator; // Inicialização fictícia
  }

  async ngOnInit() {
    this.bind();
  }

  async bind() {
    const categorys = await this.subcategorySrv.GetAll();
    this.dataSource = new MatTableDataSource(categorys.data);
    this.dataSource.paginator = this.paginator;

    // Ativar filtro para ignorar maiúsculas e minúsculas
    this.dataSource.filterPredicate = (
      data: SubCategoryModel,
      filter: string
    ) => {
      const dataStr = data.name.toLowerCase();
      return dataStr.includes(filter);
    };
  }

  filter(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim().toLowerCase();
    this.dataSource.filter = value;
  }
  async delete(subcategory: SubCategoryModel): Promise<void> {
    const options: any = {
      ...Constants.confirm_swal_options,
      text: `Deseja realmente excluir a subcategoria ${subcategory.name}`,
    };

    console.log('ID da categoria a ser deletada:', subcategory.id);
    const { value } = await Sawl.fire(options);

    if (value) {
      const result = await this.subcategorySrv.delete(subcategory.id);
      if (result.success) {
        this.bind();
      }
    }
  }
}
