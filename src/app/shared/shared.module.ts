import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
@NgModule({
  declarations: [
    PageNotFoundComponent, WebviewDirective, HeaderComponent,
    InputComponent, TextAreaComponent, DropdownComponent, SubmitButtonComponent
  ],
  imports: [
    CommonModule, TranslateModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    TranslateModule, WebviewDirective, FormsModule,
    HeaderComponent, InputComponent, TextAreaComponent, DropdownComponent, SubmitButtonComponent
  ]
})
export class SharedModule {}
