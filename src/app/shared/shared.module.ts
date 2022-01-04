import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
@NgModule({
  declarations: [
    PageNotFoundComponent, WebviewDirective, HeaderComponent,
    InputComponent, TextAreaComponent
  ],
  imports: [
    CommonModule, TranslateModule, FormsModule
  ],
  exports: [
    TranslateModule, WebviewDirective, FormsModule,
    HeaderComponent, InputComponent, TextAreaComponent
  ]
})
export class SharedModule {}
