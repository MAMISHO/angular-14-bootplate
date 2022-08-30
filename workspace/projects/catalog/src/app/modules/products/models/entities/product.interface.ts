import { ICategory } from './category.interface';
import { ILaboratory } from './laboratory.interface';
import { Class } from './product.enum';
import { ResponseData } from './response-data.interface';

export interface IProduct {
  code?: String;
  nationalCode?: String;
  specialties?: [];
  category?: ICategory;
  denomination?: String;
  presentation?: String;
  laboratory?: ILaboratory;
  ingredients?: String;
  class?: Class;
  steril?: Boolean;
  healthIndications?: String;
  indications?: String;
  function?: String;
  howToUse?: String;
  specialConditions?: String;
  cautionsWarnings?: String;
  pao?: String;
  foodIntolerance?: String;
  tags?: string;
  status?: Boolean;
}

export interface ProductListResponse extends ResponseData<IProduct[]> {}
export interface ProducResponse extends ResponseData<IProduct> {}
