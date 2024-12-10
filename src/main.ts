import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app/app.routes'; // Ensure this file contains your application's routes
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Provides HttpClient globally
    provideRouter(routes), // Provides the Angular router and routes
    importProvidersFrom(ReactiveFormsModule),
  ],

}).catch((err) => console.error(err));
