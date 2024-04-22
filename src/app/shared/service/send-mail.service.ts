
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserForms } from '../interface/user-forms';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  constructor(private http: HttpClient) { }

  sendMail(emailData: UserForms) {
    return this.http.post('https://nodemailer-sand.vercel.app/send-email', emailData);
  }
}
