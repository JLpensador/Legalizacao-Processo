import { Component, OnInit } from '@angular/core';
import { AlvarásService } from '../../services/alvará/alvarás.service';

@Component({
  selector: 'app-card-alvara-estados',
  templateUrl: './card-alvara-estados.component.html',
  styleUrls: ['./card-alvara-estados.component.scss'],
})
export class CardAlvaraEstadosComponent implements OnInit {
  alvaras: any[] = [];

  constructor(private alvarasService: AlvarásService) {}

  ngOnInit() {
    this.alvaras = this.alvarasService.getAlvarás();
  }
}
