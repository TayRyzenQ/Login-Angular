import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

declare const google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './login.html',
  styleUrls: ['./login.less']
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '876880626764-o5capv43f2adipndufo5pgi8pavfuu0l.apps.googleusercontent.com',
      callback: this.handleCredentialResponse.bind(this)
    });

    google.accounts.id.renderButton(
      document.getElementById('googleButton'),
      { theme: 'outline', size: 'large' }
    );
  }

  handleCredentialResponse(response: any): void {
    console.log("Token Google:", response.credential);

    this.http.post<any>('https://localhost:7188/api/Auth/google', {
      tokenGoogle: response.credential
    }).subscribe({
      next: (data) => {
        console.log("Respuesta backend:", data);
        localStorage.setItem('jwt', data.token);
        alert("Login exitoso con Google! JWT guardado.");
      },
      error: (err) => {
        console.error(err);
        alert("Error al autenticar con el backend.");
      }
    });
  }
}
