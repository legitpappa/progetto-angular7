import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editor-name',
  templateUrl: './editor-name.component.html',
  styleUrls: ['./editor-name.component.css']
})
export class EditorNameComponent implements OnInit {
  nameControl = new FormControl('');
  formProfile = new FormGroup({
    nome: new FormControl(''),
    cognome: new FormControl('')
  });
  indirizzo = new FormGroup({
    via: new FormControl('')
  });
  valore: Observable<string> | null = null;
  constructor(private fb: FormBuilder) { }
  formProfile1 = this.fb.group({
    nome: ['', Validators.required],
    cognome: ['', Validators.minLength(4)],
    indirizzo: this.fb.group({
      via: [''],
      citta: [''],
      cap: ['']
    })
  })
  ngOnInit() {
    this.valore = this.nome.valueChanges;
  }
  aggiornaProfilo() {
    this.formProfile.get('nome').setValue('Peppino');
    this.formProfile.patchValue({
      cognome: 'Rossi',
      indirizzo: {
        via: 'Via BOh 197'
      }
    });
  }
  aggiornaNome() {
    this.nome.setValue('Cristian')
  }
  onSubmit() {
    console.warn(this.formProfile.value);
  }

  get nome() {return this.formProfile1.get('nome'); }
  get cognome() {return this.formProfile1.get('cognome'); }
}
