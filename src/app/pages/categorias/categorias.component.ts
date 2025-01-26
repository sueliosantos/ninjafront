import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/services/category.service';
import { ICategory } from 'src/interfaces/ICategory';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent {
  columns: string[] = ['Id', 'Nome', 'Descrição'];
  dataSource: MatTableDataSource<ICategory> =
    new MatTableDataSource<ICategory>();
  constructor(private categorySrv: CategoryService) {}

  async ngOnInit() {
    const categorys = await this.categorySrv.GetAll();
    this.dataSource = new MatTableDataSource(categorys.data);

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
}
