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
    this.dataSource = categorys.data.map((it: ICategory) => {
      return { id: it.id, name: it.name, description: it.description };
    });
  }
}
