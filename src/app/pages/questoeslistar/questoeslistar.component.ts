import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { QuestaoModel } from 'src/app/models/QuestaoModell';
import { QuestaoService } from 'src/app/services/questao.service';
import { Constants } from 'src/app/shared/constantes';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-questoeslistar',
  templateUrl: './questoeslistar.component.html',
  styleUrls: ['./questoeslistar.component.scss'],
})
export class QuestoeslistarComponent {
  columns: string[] = ['Pergunta', 'Tipo', 'SubCategoria', 'id'];
  dataSource: MatTableDataSource<QuestaoModel> =
    new MatTableDataSource<QuestaoModel>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private questionSrv: QuestaoService) {
    this.paginator = {} as MatPaginator; // Inicialização fictícia
  }

  ngOnInit() {
    this.bind();
  }

  async bind() {
    const questions = await this.questionSrv.GetAll();
    this.dataSource = new MatTableDataSource(questions.data);
    this.dataSource.paginator = this.paginator;
  }

  filter(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim().toLowerCase();
    this.dataSource.filter = value;
  }

  async delete(question: QuestaoModel): Promise<void> {
    const options: any = {
      ...Constants.confirm_swal_options,
      text: `Deseja realmente excluir a pergunta ${question.question}`,
    };
    const { value } = await Swal.fire(options);
    if (value) {
      const resul = await this.questionSrv.delete(question.id);
      if (resul.success) {
        this.bind();
      }
    }
  }
}
