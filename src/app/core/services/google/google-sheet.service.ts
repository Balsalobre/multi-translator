import { Injectable } from '@angular/core';
import { google } from 'googleapis';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetService {

  readonly spreadsheetID = '1VizfPXB5jjbVS-S5sbqEk9Aop6toh-VSu-qg2ItdIRI';

  constructor() {
    console.log('GoogleSheetService');
    // console.log('>>>>>', this.getmetadata());
  }

  googleAuth() {
    return new google.auth.GoogleAuth({
      keyFile: 'credentials.json',
      scopes: 'https://www.googleapis.com/auth/spreadsheets'
    });
  }

  async googleSheet() {
    const client = await this.googleAuth().getClient();
    return google.sheets({version: 'v4', auth: client });
  }

  async getmetadata() {
    const googleSheet = await this.googleSheet();
    const metadata = googleSheet.spreadsheets.get({
      auth: this.googleAuth(),
      spreadsheetId: this.spreadsheetID
    });
  }

// multi-translator@multi-translator-341210.iam.gserviceaccount.com
}
