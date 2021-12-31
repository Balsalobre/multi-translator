import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private timeout;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.goHome();
  }

  goHome() {
    this.timeout = setTimeout(() => this.router.navigate(['/detail']), 7000);
  };

  ngOnDestroy(): void {
    clearTimeout(this.timeout);
  }
}
