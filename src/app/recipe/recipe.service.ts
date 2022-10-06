import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({
    providedIn:'root'
})
export class RecipeService {
    BASE_URL = 'assets/recipes-mock.json'
    constructor(private httpClient : HttpClient) {
    }
    
    getRecipes(){
        return this.httpClient.get<Recipe[]>(this.BASE_URL);
    }
}