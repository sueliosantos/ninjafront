import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { QuestaoModel } from '../models/QuestaoModell';
import { BaseService } from '../base/base.service';
import { ISelect } from 'src/interfaces/ISelect';

@Injectable({
  providedIn: 'root',
})
export class QuestaoService extends BaseService<QuestaoModel> {
  constructor(public override http: HttpService) {
    super('question', http);
  }

  static getQuestionsType(): Array<ISelect> {
    return [
      { value: 1, label: 'Text' },
      { value: 2, label: 'Date' },
      { value: 3, label: 'Select' },
      { value: 4, label: 'Memo' },
    ];
  }
}
