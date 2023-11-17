import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h2>Home</h2>
    <div class="card">
      <button type="button" (click)="increment()">Count {{ count }}</button>
    </div>
  `,
})
export default class HomeComponent {
  count = 0

  increment() {
    this.count++
  }
}
