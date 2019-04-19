import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsService } from './services/subjects.service';
import { SubjectsComponent } from './subjects/subjects.component';

@NgModule({
  declarations: [SubjectsComponent],
  imports: [
    CommonModule
  ],
  providers: [SubjectsService],
  exports:  [SubjectsComponent]
})
export class CoreModule {
  constructor() {

  }
}
