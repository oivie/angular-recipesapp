# Angular Recipes App

A responsive Angular application that helps users explore meal suggestions, search for recipes, analyze nutrition, and submit feedback. Built with Angular and deployed on [Vercel](https://vercel.com).

## Features
- **Meal Suggestions**: Explore curated meal ideas.
- **Recipe Search**: Find recipes using the Edamam API.
- **Feedback Form**: Submit feedback through a styled form.
- **Responsive Design**: Optimized for desktop and mobile views.

## Tech Stack
- **Frontend**: Angular (Standalone components)
- **API**: Edamam API for nutrition and recipe data
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Live Demo
[View Project](https://angular-recipesapp.vercel.app/)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/angular-recipesapp.git
   ```
2. Navigate to the project directory:
   ```bash
   cd angular-recipesapp
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   ng serve
   ```

## Environment Variables
Add the following to your `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  EDAMAM_APP_ID: 'your-app-id',
  EDAMAM_APP_KEY: 'your-app-key',
};
```

For production, update `src/environments/environment.prod.ts`.

## License
This project is licensed under the [MIT License](LICENSE).
