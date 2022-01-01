import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PresentationComponent } from './presentation.component';

const routes: Routes = [
  {
    path: 'presentation',
    component: PresentationComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentationRoutingModule {}
