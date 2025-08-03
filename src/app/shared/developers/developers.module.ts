import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperListComponent } from './developer-list/developer-list.component';
import { DeveloperFormComponent } from './developer-form/developer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillFilterPipe } from '../pipes/skill-filter.pipe';
import { SeniorHighlightDirective } from '../directives/senior-highlight.directive';
import { DevelopersRoutingModule } from './developers-routing.module';

@NgModule({
  declarations: [
    DeveloperListComponent,
    DeveloperFormComponent,
    SkillFilterPipe,
    SeniorHighlightDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DevelopersRoutingModule,
  ],
})
export class DevelopersModule {}
