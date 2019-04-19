import { Component, OnInit } from '@angular/core';
import { Eroe } from '../models/eroe';

@Component({
  selector: 'app-eroe-form',
  templateUrl: './eroe-form.component.html',
  styleUrls: ['./eroe-form.component.css']
})
export class EroeFormComponent implements OnInit {
poteri = ['Genio' , 'Forza', 'Flessibilità', 'Magia'];
modello = new Eroe( 1, 'Dr.Strange', 'Magia', 'Strange');

submited = false;

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    this.submited = true;
  }
  nuovoEroe() {
    this.modello = new Eroe(2 , '' , '');
  }
}
