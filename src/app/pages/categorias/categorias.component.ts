import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/services/category.service';
import { Constants } from 'src/app/shared/constantes';
import { ICategory } from 'src/interfaces/ICategory';
import Sawl from 'sweetalert2';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent {
  columns: string[] = ['Nome', 'Descrição', 'id'];
  dataSource: MatTableDataSource<ICategory> =
    new MatTableDataSource<ICategory>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private categorySrv: CategoryService) {
    this.paginator = {} as MatPaginator; // Inicialização fictícia
  }

  async ngOnInit() {
    this.bind();
  }

  async bind() {
    const categorys = await this.categorySrv.GetAll();
    this.dataSource = new MatTableDataSource(categorys.data);
    this.dataSource.paginator = this.paginator;

    // Ativar filtro para ignorar maiúsculas e minúsculas
    this.dataSource.filterPredicate = (data: ICategory, filter: string) => {
      const dataStr = data.name.toLowerCase();
      return dataStr.includes(filter);
    };
  }

  filter(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim().toLowerCase();
    this.dataSource.filter = value;
  }
  async delete(category: ICategory): Promise<void> {
    const options: any = {
      ...Constants.confirm_swal_options,
      text: `Deseja realmente excluir a categoria ${category.name}`,
    };

    console.log('ID da categoria a ser deletada:', category.id);
    const { value } = await Sawl.fire(options);

    if (value) {
      const result = await this.categorySrv.delete(category.id);
      if (result.success) {
        this.bind();
      }
    }
  }
}
