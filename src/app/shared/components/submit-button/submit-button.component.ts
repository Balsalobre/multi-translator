import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent implements OnInit {

  @Input() value: string;
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickHandler() {
    this.loading = true;
  }

}
