import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { FormControl } from '@angular/forms';

type Option = {
  key: string;
  value: string;
};

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, OnDestroy {

  @Input() label: string;
  @Input() options: Option[];
  @Output() selectedOutput = new EventEmitter<Option>();
  focused = false;
  selectedValue = false;
  delayFocusOut: Observable<number> = timer(180);
  subscritions = new Subscription();
  inputValue = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  clickHandler(optionSelected: Option) {
    this.selectedOutput.emit(optionSelected);
    this.selectedValue = true;
    this.inputValue.setValue(optionSelected.value);
  }

  focusedOutHandler(){
    this.subscritions.add(
      this.delayFocusOut.subscribe(() => {
        this.focused = false;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscritions.unsubscribe();
  }
}
