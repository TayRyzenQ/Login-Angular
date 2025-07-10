import { Component, OnInit } from '@angular/core';
import { BanxicoService } from '../../services/banxico';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-banxico',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './banxico.html',
  styleUrls: ['./banxico.less']
})
export class BanxicoComponent implements OnInit {

  tipoCambio: any;
  error: string = '';

  constructor(private banxicoService: BanxicoService) { }

  ngOnInit(): void {
    this.obtenerTipoCambio();
  }

  obtenerTipoCambio() {
    this.banxicoService.obtenerTipoCambio().subscribe({
      next: (data) => {
        console.log('Banxico', data);
        this.tipoCambio = data;
        this.error = '';
      },
      error: (err) => {
        console.error(err);
        this.error = 'No se pudo obtener el tipo de cambio.';
      }
    });
  }
}
