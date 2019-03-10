import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Burger 1',
      'Very delicious burger ',
      'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=burger-chips-dinner-70497.jpg&fm=jpg'
      , [
        new Ingredient('Bread', 1),
        new Ingredient('Beef', 1),
        new Ingredient('Salad', 2)
      ]),
    new Recipe('Burger 2',
      'Best burger in town',
      'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=burger-chips-dinner-70497.jpg&fm=jpg',
      [
        new Ingredient('Bread', 1),
        new Ingredient('Chicken', 1),
        new Ingredient('Salad', 2),
        new Ingredient('Cheese', 1)
      ]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
