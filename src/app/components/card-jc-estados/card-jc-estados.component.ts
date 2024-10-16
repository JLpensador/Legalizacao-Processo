import { Component, OnInit } from '@angular/core';
import { JuntaComercialService } from '../../services/juntaComercial/junta-comercial.service';

@Component({
  selector: 'app-card-jc-estados',
  templateUrl: './card-jc-estados.component.html',
  styleUrl: './card-jc-estados.component.scss',
})
export class CardJCEstadosComponent implements OnInit {
  jcs: any[] = [];

  constructor(private juntaComercialService: JuntaComercialService) {}
  ngOnInit() {
    this.jcs = this.juntaComercialService.getJc();
  }
}
