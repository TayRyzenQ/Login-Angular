import { Component, OnInit } from '@angular/core';
import { BanxicoService } from '../../services/banxico';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-banxico',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './banxico.html',
  styleUrls: ['./banxico.less']
})

export class BanxicoComponent implements OnInit {
  usd: number = 1;
  mxn: number = 0;          // Monto en pesos mexicanos
  conversionResultUSD: number | null = null;
  conversionResultMXN: number | null = null;  tipoCambio: any;
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

 convertirDolaresAMXN() {
  if (this.tipoCambio && this.usd !== null) {
    this.conversionResultUSD = this.usd * this.tipoCambio.tipoCambio;
  }
}

convertirMXNaUSD() {
  if (this.tipoCambio && this.mxn !== null) {
    this.conversionResultMXN = this.mxn / this.tipoCambio.tipoCambio;
  }
}
}
