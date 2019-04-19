import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { debounce} from 'rxjs/operators';
import { AutocompilerService } from '../services/autocompiler.service';
import { GoogleService, GoogleObj } from '../services/google.service';
import { IGoogleResponse, ITranslation } from '../models/iGoogle-response';
@Component({
  selector: 'app-componente-reattivo',
  templateUrl: './componente-reattivo.component.html',
  styleUrls: ['./componente-reattivo.component.css']
})
export class ComponenteReattivoComponent implements OnInit {

  constructor(private autocompileService: AutocompilerService ,
              private googleService: GoogleService) { }
  nomeControl = new FormControl('');
  nomeManipolato: string[];
  text: Observable<string> | null = null;
  googleSettings: GoogleObj;
  jaTranslatedText: ITranslation[];
  arTranslatedText: ITranslation[];
  fiTranslatedText: ITranslation[];
  key: 'AIzaSyDabTPGWOPCR7V2SkXmjaJ39pjQSIfqEJs';
  ngOnInit() {
    this.text = this.nomeControl.valueChanges;
    this.nomeControl.valueChanges.pipe(debounce(() => timer(1000))).subscribe((x: string) => {
      this.autocompileService.autocompleta(x).subscribe((stringList: string[]) => {
      this.nomeManipolato = stringList;
      this.googleSettings.q = x;
// tslint:disable-next-line: max-line-length
      this.googleService.language(this.googleSettings, 'AIzaSyDabTPGWOPCR7V2SkXmjaJ39pjQSIfqEJs' , 'ja')
      .subscribe((y: IGoogleResponse) => {this.jaTranslatedText = y.data.translations; });
      this.googleService.language(this.googleSettings, 'AIzaSyDabTPGWOPCR7V2SkXmjaJ39pjQSIfqEJs' , 'fi')
      .subscribe((y: IGoogleResponse) => {this.fiTranslatedText = y.data.translations; });
      this.googleService.language(this.googleSettings, 'AIzaSyDabTPGWOPCR7V2SkXmjaJ39pjQSIfqEJs', 'ar')
      .subscribe((y: IGoogleResponse) => {this.arTranslatedText = y.data.translations; });
      });
      });
    this.googleSettings = new GoogleObj();
}
}

