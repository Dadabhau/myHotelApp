import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({ providedIn: 'root' })
export class DataStoragesService {
  recipesUrl =
    'https://ng-coures-recipe-book-96710-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json';
  constructor(
    private http: HttpClient,
    private recipesService: RecipeService
  ) {}
  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http
      .put(
        'https://ng-coures-recipe-book-96710-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
  fetchRecipes() {
    this.http.get<Recipe[]>(this.recipesUrl).subscribe((recipes) => {
      this.recipesService.setRecipe(recipes);
    });
  }
}
