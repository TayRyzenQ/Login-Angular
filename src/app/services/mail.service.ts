import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private apiUrl = 'https://localhost:7188/api/Mail';

  constructor(private http: HttpClient) {}

  sendMail(data: any) {
    return this.http.post(`${this.apiUrl}/send`, data);
  }
}
