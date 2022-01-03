import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { AddDataComponent } from './components/add-data/add-data.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { TraductionsComponent } from './components/traductions/traductions.component';

@NgModule({
  declarations: [HomeComponent, AddDataComponent, ConfigurationComponent, TraductionsComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule]
})
export class HomeModule {}
