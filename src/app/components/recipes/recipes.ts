import { Component, OnInit } from '@angular/core';
import { RecipeData } from '../../services/recipe-data';

@Component({
  selector: 'app-recipes',
  imports: [],
  templateUrl: './recipes.html',
  styleUrls: ['./recipes.css'],
  providers: [RecipeData],
})
export class Recipes implements OnInit {
  recipe_list: any = [];
  page: number = 1;

  constructor(protected recipeData: RecipeData) {}

  ngOnInit() {
    this.recipe_list = this.recipeData.getRecipe(this.page);
  }

  previousPage() {
    if (this.page > 1) {
      this.page = this.page - 1;
      this.recipe_list = this.recipeData.getRecipe(this.page);
    }
  }

  nextPage() {
    if (this.page < this.recipeData.getLastPageNumber()) {
      this.page = this.page + 1;
      this.recipe_list = this.recipeData.getRecipe(this.page);
    }
  }

  // ✅ Add this
  get lastPage() {
    return this.recipeData.getLastPageNumber();
  }
}
