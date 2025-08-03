import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DeveloperListComponent } from './developer-list/developer-list.component';
import { DeveloperFormComponent } from './developer-form/developer-form.component';

const routes: Routes = [
  { path: '', component: DeveloperListComponent },
  { path: 'new', component: DeveloperFormComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevelopersRoutingModule {}
