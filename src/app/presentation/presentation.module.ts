import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentationRoutingModule } from './presentation-routing.module';

import { PresentationComponent } from './presentation.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PresentationComponent],
  imports: [CommonModule, SharedModule, PresentationRoutingModule]
})
export class PresentationModule {}
