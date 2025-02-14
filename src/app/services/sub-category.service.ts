import { Injectable } from '@angular/core';
import { SubCategoryModel } from '../models/SubCategoryModel';
import { BaseService } from '../base/base.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class SubCategoryService extends BaseService<SubCategoryModel> {
  constructor(public override http: HttpService) {
    super('subCategory', http);
  }
}
