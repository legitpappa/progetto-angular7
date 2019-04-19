import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../services/subjects.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent  {

  customers = [];
  subscription: Subscription;
  constructor(private subjectService: SubjectsService) { }
  start() {
    this.subjectService.startStream();
    this.subscription = this.subjectService.subjectObservable$.subscribe(customer=> {
      this.customers.push(customer);
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
