import { Injectable } from '@angular/core';
import jsonData from '../../assets/recipes.json';

@Injectable({
  providedIn: 'root',
})
export class RecipeData {
  pageSize: number = 4;

  getRecipe(page: number) {
    let pageStart = (page - 1) * this.pageSize;
    let pageEnd = pageStart + this.pageSize;
    return jsonData.slice(pageStart, pageEnd);
  }

  getLastPageNumber() {
    return Math.ceil(jsonData.length / this.pageSize);
  }
}
