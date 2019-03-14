import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(1, 'Burger 1',
      'Very delicious burger ',
      'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=burger-chips-dinner-70497.jpg&fm=jpg'
      , [
        new Ingredient('Bread', 1),
        new Ingredient('Beef', 1),
        new Ingredient('Salad', 2)
      ]),
    new Recipe(2, 'Burger 2',
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

  getRecipeById(id: number) {
    return this.recipes.find((recipe) => (recipe.id === id));
  }
}
