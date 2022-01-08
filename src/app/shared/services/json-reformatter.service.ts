import { Injectable } from '@angular/core';

interface IJsonFormattedResult {
  value: string;
  valid: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class JsonReformatterService {
  formatJSON(input: string, indent: number): IJsonFormattedResult {
    try {
      const parsedData = JSON.parse(input);
      return {
        value: JSON.stringify(parsedData, null, indent),
        valid: true,
      };
    } catch (error) {
      return {
        value: input,
        valid: false
      };
    }
  }
}
