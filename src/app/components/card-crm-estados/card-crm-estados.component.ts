import { Component, OnInit } from '@angular/core';
import { CRMService } from '../../services/crm/crm.service';

@Component({
  selector: 'app-card-crm-estados',
  templateUrl: './card-crm-estados.component.html',
  styleUrl: './card-crm-estados.component.scss',
})
export class CardCRMEstadosComponent implements OnInit {
  crms: any[] = [];
  constructor(private crmService: CRMService) {}

  ngOnInit() {
    this.crms = this.crmService.getCRM();
  }
}
