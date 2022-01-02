import { Component, OnInit, Renderer2 } from '@angular/core';
import { differenceInSeconds, format } from 'date-fns';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleTheme = false;
  timeSpent: number;
  timeSpentFormatted = '00:00';
  loadTime = new Date();

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    setInterval(() => {
      this.timeSpent = differenceInSeconds(new Date(), this.loadTime);
      this.timeSpentFormatted = format(new Date(this.timeSpent * 1000), 'mm:ss');
    }, 1000);
  }

  changeTheme(): void {
    this.toggleTheme = !this.toggleTheme;
    if (this.toggleTheme) {
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark');
    }
  }

  setTimer() {
    setInterval(() => this.timeSpent = differenceInSeconds(new Date(), this.loadTime), 1000);
  }
}
