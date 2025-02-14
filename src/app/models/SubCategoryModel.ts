import { BaseModel } from './BaseModel';
import { CategoryModel } from './CategoryModel';

export class SubCategoryModel extends BaseModel {
  name: string = '';
  description: string = '';
  cost: number = 0;
  category: CategoryModel;

  constructor() {
    super();
    this.category = new CategoryModel();
  }
}
