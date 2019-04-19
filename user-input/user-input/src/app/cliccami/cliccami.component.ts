import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliccami',
  templateUrl: './cliccami.component.html',
  styleUrls: ['./cliccami.component.css']
})
export class CliccamiComponent implements OnInit {
  message: string;
  valori: '';
  valori1: '';
  valori2: '';
  constructor() {}

  ngOnInit() {}
  cliccami() {
    this.message = 'bravo';
  }
  onKey(event: any) {
    this.valori += event.target.value + ' | ';
  }

  onkey1(event: KeyboardEvent) {
    const localInput = <HTMLInputElement> event.target;
    this.valori1 +=localInput.value + ' | ';
  }
  onkey2(valore: string) {
    this.valori2 += valore + ' | ';
  }
}
