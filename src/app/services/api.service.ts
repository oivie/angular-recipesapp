import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private nutritionApiUrl = 'https://api.edamam.com/api/nutrition-details';
  private mealPlannerApiUrl = 'https://api.edamam.com/api/meal-planner/v1';
  private recipeSearchApiUrl = 'https://api.edamam.com/api/recipes/v2';

  private appId = process.env['EDAMAM_APP_ID'];
  private appKey = process.env['EDAMAM_APP_KEY'];

  constructor(private http: HttpClient) {}

  analyzeNutrition(data: any): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
    };
    return this.http.post(
      `${this.nutritionApiUrl}?app_id=${this.appId}&app_key=${this.appKey}`,
      data,
      { headers }
    );
  }
  

  getMealPlan(data: any): Observable<any> {
    return this.http.post(
      `${this.mealPlannerApiUrl}?app_id=${this.appId}&app_key=${this.appKey}`,
      data
    );
  }

  searchRecipes(query: string): Observable<any> {
    return this.http.get(
      `${this.recipeSearchApiUrl}?type=public&q=${query}&app_id=${this.appId}&app_key=${this.appKey}`
    );
  }
}
