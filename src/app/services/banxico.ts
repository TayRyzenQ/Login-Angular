import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanxicoService {

  private apiUrl = 'https://localhost:7188/api/banxico/tipo-cambio';

  constructor(private http: HttpClient) { }

  obtenerTipoCambio(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
