import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'base',
  templateUrl: './base.component.html',
})
export class BaseComponent {

  constructor(private router: Router) {
  }

  navigate() {
    this.router.navigate(['/lazy']);
  }
}
