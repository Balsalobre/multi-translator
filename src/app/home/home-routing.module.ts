import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { TraductionsComponent } from './components/traductions/traductions.component';
import { CanActivateViaAuthGuard } from '../core/services/auth/guards/login.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [CanActivateViaAuthGuard],
    children: [
      {
        path: '',
        component: AddDataComponent,
      },
      {
        path:'cfg',
        component: ConfigurationComponent,
      },
      {
        path: 'traductions',
        component: TraductionsComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
