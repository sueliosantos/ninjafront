import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IPedidosPendentes } from 'src/interfaces/IPedidosPendentes';

const DATA_MOCK: IPedidosPendentes[] = [
  {
    nome: 'Suélio',
    data: '01/01/2025',
    categoria: 'Construção',
    subCategoria: 'Reforma',
  },
  {
    nome: 'João',
    data: '01/01/2025',
    categoria: 'Construção',
    subCategoria: 'Reforma',
  },
];

@Component({
  selector: 'app-pedidos-pendentes',
  templateUrl: './pedidos-pendentes.component.html',
  styleUrls: ['./pedidos-pendentes.component.scss'],
})
export class PedidosPendentesComponent {
  columns: string[] = ['Nome', 'Data', 'Categoria', 'subCategoria'];
  dataSource: MatTableDataSource<IPedidosPendentes> =
    new MatTableDataSource<IPedidosPendentes>(DATA_MOCK);
}
