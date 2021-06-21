import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Garlic Shrimp',
      'This is simply a test',
      'https://www.acouplecooks.com/wp-content/uploads/2019/05/Garlic-Butter-Shrimp-026-735x919.jpg',
      [new Ingredient('Garlic', 50), new Ingredient('French Fries', 26)]
    ),
    new Recipe(
      'Mushroom Pasta',
      'This is simply a test',
      'https://www.acouplecooks.com/wp-content/uploads/2019/03/Mushroom-Pasta-007.jpg',
      [new Ingredient('Mushroom', 30), new Ingredient('Pasta', 50)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
