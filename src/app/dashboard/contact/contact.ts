import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MailService } from '../../services/mail.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.less']
})
export class ContactComponent implements OnInit {
  contactForm: any;

  constructor(
    private fb: FormBuilder,
    private mailService: MailService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const data = this.contactForm.value;

      this.mailService.sendMail(data).subscribe({
        next: (res) => {
          console.log(res);
          alert('¡Correo enviado con éxito!');
          this.contactForm.reset();
        },
        error: (err) => {
          console.error(err);
          alert('Error enviando el correo.');
        }
      });
    }
  }
}
