import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="container border border-red-400 mx-auto">
      <header class="flex justify-between items-center">
        <nav class="space-x-4">
          <a class="text-blue-500 hover:text-blue-800" routerLink="/">Home</a>
          <a class="text-blue-500 hover:text-blue-800" routerLink="/about">About</a>
          <a class="text-blue-500 hover:text-blue-800" routerLink="/blog">Blog</a>
          <a class="text-blue-500 hover:text-blue-800" routerLink="/test">Test</a>
        </nav>
      </header>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}
