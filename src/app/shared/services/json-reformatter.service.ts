import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonReformatterService {

  formatJSON(input: string, indent: number) {
    if (!input.length) {
      return '';
    }
    try {
      const parsedData = JSON.parse(input);
      return JSON.stringify(parsedData, null, indent);
    } catch (e) {
      console.log(e);
    }
  }

}
