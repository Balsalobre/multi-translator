import { Component, OnInit } from '@angular/core';
import { LanguageService , Language } from '../../../core/services/language/language.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit {

  options: Language[];

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.options = this.languageService.languages;
    console.log(this.options);
  }

  languageSelected(option) {
    console.log(option);
  }

}
