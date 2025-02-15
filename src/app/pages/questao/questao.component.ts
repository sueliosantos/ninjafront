import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestaoModel } from 'src/app/models/QuestaoModell';
import { SubCategoryModel } from 'src/app/models/SubCategoryModel';
import { QuestaoService } from 'src/app/services/questao.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';
import { ISelect } from 'src/interfaces/ISelect';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.scss'],
})
export class QuestaoComponent {
  model: QuestaoModel = new QuestaoModel();
  subCategorys: Array<SubCategoryModel>;
  questionsType: Array<ISelect>;

  constructor(
    private subCategorySrv: SubCategoryService,
    private questionSrv: QuestaoService,
    private matSnack: MatSnackBar,
    private router: Router,
    private active: ActivatedRoute
  ) {
    this.subCategorys = [];
    this.questionsType = [];
  }

  ngOnInit() {
    this.active.params.subscribe((p) => this.getId(p['id']));
    this.questionsType = QuestaoService.getQuestionsType();
    this.bindSubCategorys();
  }

  async bindSubCategorys(): Promise<void> {
    const result = await this.subCategorySrv.GetAll();
    if (result.success) {
      this.subCategorys = result.data as Array<SubCategoryModel>;
    }
  }

  async getId(id: string): Promise<void> {
    if (id === 'new') {
      return;
    }
    const result = await this.questionSrv.GetById(Number(id));
    this.model = result.data as QuestaoModel;
  }

  async save(): Promise<void> {
    const result = await this.questionSrv.post(this.model);
    if (result.success) {
      this.matSnack.open('Pergunta salva com sucesso', undefined, {
        duration: 3000,
      });
      this.router.navigateByUrl('/questoeslistar');
    }
  }
}
