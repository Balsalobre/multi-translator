import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { differenceInSeconds, format } from 'date-fns';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  toggleTheme = false;
  timeSpentFormatted = '00:00';
  private loadTime = new Date();
  private interval: ReturnType<typeof setInterval>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      const timeSpent = differenceInSeconds(new Date(), this.loadTime);
      this.timeSpentFormatted = format(new Date(timeSpent * 1000), 'mm:ss');
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

  ngOnDestroy(): void {
    this.toggleTheme = false;
    clearInterval(this.interval);
    this.renderer.removeClass(document.body, 'dark');
  }
}
