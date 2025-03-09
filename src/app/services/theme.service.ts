import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly themeKey = 'theme';

  constructor() {
    this.loadTheme();
  }

  toggleTheme(): void {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem(this.themeKey, isDark ? 'dark' : 'light');
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem(this.themeKey);
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }
}

