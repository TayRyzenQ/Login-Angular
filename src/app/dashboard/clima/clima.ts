import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clima',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './clima.html',
  styleUrls: ['./clima.less']
})
export class ClimaComponent {
  ciudad: string = '';
  climaData: any = null;
  error: string = '';

  constructor(private http: HttpClient) {}

  buscarClima() {
    const apiKey = '50af7e0e682fb85ab594f9704a9b9916';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad}&appid=${apiKey}&units=metric&lang=es`;

    this.http.get(url).subscribe({
      next: (data) => {
        this.climaData = data;
        this.error = '';
      },
      error: (err) => {
        console.error(err);
        this.error = 'No se pudo obtener el clima.';
      }
    });
  }
}
