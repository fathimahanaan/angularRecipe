import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes',
  imports: [],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes {
  recipe_list = [
    {
      name: 'Pasta Alfredo',
      ingredients: ['Pasta', 'Cream', 'Garlic', 'Butter', 'Parmesan Cheese'],
      rating: 4.5,
    },
    {
      name: 'Chicken Curry',
      ingredients: ['Chicken', 'Onion', 'Tomato', 'Curry Powder', 'Garlic', 'Ginger'],
      rating: 4.7,
    },
    {
      name: 'Chocolate Cake',
      ingredients: ['Flour', 'Sugar', 'Cocoa Powder', 'Eggs', 'Butter', 'Milk'],
      rating: 4.8,
    },
  ];
}
