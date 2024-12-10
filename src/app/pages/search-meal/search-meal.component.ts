import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-search-meal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-meal.component.html',
  styleUrls: ['./search-meal.component.css'],
})
export class SearchMealComponent {
  query: string = '';
  recipes: any[] = [];
  featuredFlavors = [
    {
      name: 'Creamy Matcha & Vanilla',
      description: 'A smooth, delightful blend of creamy vanilla and matcha.',
      image: '/assets/path-to-image1.jpg',
    },
    {
      name: 'Rich Cacao & Sea Salt',
      description: 'Dark cacao paired with a touch of sea salt.',
      image: '/assets/path-to-image2.jpg',
    },
    {
      name: 'Spiced Turmeric & Cardamom',
      description: 'A warm, spiced blend of turmeric and cardamom.',
      image: '/assets/path-to-image3.jpg',
    },
    {
      name: 'Classic Cinnamon & Sugar',
      description: 'Timeless flavors of cinnamon and sugar.',
      image: '/assets/path-to-image4.jpg',
    },
  ];
  
  constructor(private apiService: ApiService) {}

  searchRecipes() {
    if (this.query.trim()) {
      this.apiService.searchRecipes(this.query).subscribe((response) => {
        this.recipes = response.hits.map((hit: any) => ({
          title: hit.recipe.label,
          image: hit.recipe.image,
          ingredients: hit.recipe.ingredientLines,
          url: hit.recipe.url,
          expanded: false,
        }));
      });
    }
  }

  toggleRecipe(recipe: any) {
    recipe.expanded = !recipe.expanded;
  }

  ngOnInit() {
    this.apiService.searchRecipes('healthy').subscribe((response) => {
      this.featuredFlavors = response.hits.slice(0, 4).map((hit: any) => ({
        name: hit.recipe.label,
        description: hit.recipe.ingredientLines.slice(0, 3).join(', '), // Concatenate a few ingredients as a short description
        image: hit.recipe.image,
      }));
    });
  }
  
}
