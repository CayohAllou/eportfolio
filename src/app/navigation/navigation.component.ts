import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  constructor(private themeService: ThemeService) {}

isDarkMode = false;

toggleTheme(): void {
  this.isDarkMode = !this.isDarkMode;
  document.body.classList.toggle('dark-mode', this.isDarkMode);
  localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
}

}
