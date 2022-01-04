import { Component, Input, OnInit } from '@angular/core';
import { InputConfig } from './input.interfaces';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() type?: 'text' | 'email';
  @Input() label?: 'string';
  @Input('aria-labelledby') ariaLabelledby?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
