import { BaseModel } from './BaseModel';
import { QuestionType } from './enums/QuestionType';
import { SubCategoryModel } from './SubCategoryModel';

export class QuestaoModel extends BaseModel {
  question: string = '';
  type: QuestionType;
  options: string = '';
  subCategory: SubCategoryModel;

  constructor() {
    super();
    this.subCategory = new SubCategoryModel();
    this.type = QuestionType.Text;
  }
}
