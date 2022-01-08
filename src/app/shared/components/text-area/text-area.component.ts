import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JsonReformatterService } from '../../services/json-reformatter.service';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {

  @ViewChild('areaelement') elementTextArea: ElementRef;
  @Input() label: string;
  @Input() minHeight: number;
  @Input() jsonFormat: boolean;
  invalid: boolean;

  inputArea = new FormControl('');

  constructor(private jsonReformatterService: JsonReformatterService) { }

  ngOnInit(): void {
  }

  beautifyJson() {
    if (!this.inputArea.value.length) {
      return;
    }
    const jsonToFormat = this.inputArea.value;
    const jsonFormatted = this.jsonReformatterService.formatJSON(jsonToFormat, 2);
    if(jsonFormatted.valid) {
      this.inputArea.setValue(jsonFormatted.value);
    } else {
      this.invalid = true;
    }
  }

  keyHandler(e) {
    this.invalid = false;
    if(e.keyCode === 9) {
      const cursorPos = e.target.selectionStart;
      const inputAreaValue = `${this.inputArea.value}`;
      const newTextareaValue = this.tabConverter(inputAreaValue, cursorPos);
      this.inputArea.setValue(newTextareaValue);
      e.preventDefault();
      this.elementTextArea.nativeElement.selectionEnd = cursorPos + 2;
    }
  }

  tabConverter(value: string, position: number): string {
    const spaces = '  ';
    const output = [value.slice(0, position), spaces, value.slice(position)].join('');
    return output;
  }
}
