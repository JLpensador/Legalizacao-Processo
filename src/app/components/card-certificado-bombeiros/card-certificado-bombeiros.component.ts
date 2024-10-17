import { Component, OnInit } from '@angular/core';
import { CertificadoService } from '../../services/bombeiros/certificado.service';

@Component({
  selector: 'app-card-certificado-bombeiros',
  templateUrl: './card-certificado-bombeiros.component.html',
  styleUrl: './card-certificado-bombeiros.component.scss',
})
export class CardCertificadoBombeirosComponent implements OnInit {
  bombeiros: any[] = [];

  constructor(private bombeirosService: CertificadoService) {}

  ngOnInit() {
    this.bombeiros = this.bombeirosService.getBombeiros();
  }
}
