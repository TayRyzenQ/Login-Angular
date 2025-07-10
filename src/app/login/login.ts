import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

declare const google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.less']
  
})
export class LoginComponent implements OnInit {

  userInput: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) { }

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

  loginTradicional(): void {
    console.log("Intentando login tradicional con:", this.userInput);

    this.http.post<any>('https://localhost:7188/api/Auth/login', {
      userName: this.userInput,
      password: this.password
    }).subscribe({
      next: (data) => {
        console.log("Login tradicional exitoso:", data);
        localStorage.setItem('jwt', data.token);
        alert("Login exitoso con usuario o correo!");
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error(err);
        alert("Usuario o contraseña incorrectos.");
      }
    });
  }

  handleCredentialResponse(response: any): void {
  console.log("Token Google:", response.credential);

  this.http.post<any>('https://localhost:7188/api/Auth/google', {
    tokenGoogle: response.credential
  }).subscribe({
    next: (data) => {
      console.log("Login Google exitoso:", data);
      localStorage.setItem('jwt', data.token);
      alert("Login exitoso con Google! JWT guardado.");
      this.router.navigate(['/dashboard']);
    },
    error: (err) => {
      console.error(err);
      alert("Error al autenticar con el backend.");
    }
  });
}

  
}
