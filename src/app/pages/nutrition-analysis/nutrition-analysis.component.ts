import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule for directives like *ngIf
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-nutrition-analysis',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule], // Include CommonModule
  templateUrl: './nutrition-analysis.component.html',
  styleUrls: ['./nutrition-analysis.component.css'],
})
export class NutritionAnalysisComponent {
  foodInput: string = '';
  nutritionData: any = null;

  constructor(private apiService: ApiService) {}

  analyzeNutrition() {
    if (!this.foodInput.trim()) {
      alert('Please enter food items!');
      return;
    }

    const requestBody = {
      ingr: [this.foodInput],
    };

    this.apiService.analyzeNutrition(requestBody).subscribe({
      next: (data) => {
        this.nutritionData = data;
        console.log('Nutrition Data:', data);
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Failed to analyze nutrition data. Please try again.');
      },
    });
  }
}
