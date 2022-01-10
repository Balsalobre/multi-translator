import { Component, Input, OnInit } from '@angular/core';
import { LanguageService, Laguage } from '../../../core/services/language/language.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() label: string;
  languages: Laguage[];

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languages = this.languageService.languages;
  }

}
