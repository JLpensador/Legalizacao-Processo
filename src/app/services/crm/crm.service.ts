import { Injectable } from '@angular/core';
import { link } from 'node:fs';

@Injectable({
  providedIn: 'root',
})
export class CRMService {
  getCRM() {
    return [
      {
        name: 'Ceará',
        description:
          'CONSELHO REGIONAL DE MEDICINA DO ESTADO DO CEARÁ (CREMEC)',
        link: 'https://portalservicos.cfm.org.br/portal/login/pessoa-juridica/CE',
      },

      {
        name: 'Minas Gerais',
        description:
          'CONSELHO REGIONAL DE MEDICINA DO ESTADO DE MINAS GERAIS (CREMIMG)',
        link: 'https://portalservicos.cfm.org.br/portal/mg',
      },

      {
        name: 'Rio de Janeiro',
        description:
          'CONSELHO REGIONAL DE MEDICINA DO ESTADO DO RIO DE JANEIRO (CREMERJ)',
        link: 'https://www.cremerj.org.br/servicoempresas/',
      },

      {
        name: 'São Paulo',
        description:
          'CONSELHO REGIONAL DE MEDICINA DO ESTADO DE SAO PAULO (CREMESP)',
        link: 'https://www.cremesp.org.br/?siteAcao=ServicosEmpresas',
      },

      {
        name: 'lorem',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores.',
        link: '',
      },

      {
        name: 'lorem',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores.',
        link: '',
      },
    ];
  }
}
