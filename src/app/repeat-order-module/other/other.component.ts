import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'other',
  templateUrl: './other.component.html',
})
export class OtherComponent {
  constructor(private router: Router) {
  }

  navigateBack() {
    this.router.navigate(['/base']);
  }
}
