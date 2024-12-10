import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  standalone: true,
  imports: [RouterModule],
  styleUrls: ['./navigation.component.css'],
})

export class NavigationComponent {
  menuActive: boolean = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
    const menu = document.querySelector('.nav-links-mobile');
    if (menu) {
      menu.classList.toggle('hidden', !this.menuActive);
      menu.classList.toggle('block', this.menuActive);
    }
  }
}
