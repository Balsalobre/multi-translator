import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JsonReformatterService } from '../../services/json-reformatter.service';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {

  @Input() label: string;
  @Input() minHeight: number;
  @Input() jsonFormat: boolean;

  inputText = new FormControl('');

  constructor(private jsonReformatterService: JsonReformatterService) { }

  ngOnInit(): void {
  }

  beautifyJson() {
    const jsonToFormat = this.inputText.value;
    const jsonFormatted = this.jsonReformatterService.formatJSON(jsonToFormat, 2);
    console.log(jsonFormatted);
  }
}
