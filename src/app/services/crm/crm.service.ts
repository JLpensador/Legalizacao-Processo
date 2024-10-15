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
        link: 'https://portalservicos.cfm.org.br/portal/login/pessoa-juridica/CE',
      },

      {
        name: 'lorem',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloremque et distinctio deleniti nam, impedit voluptates.',
        link: '',
      },

      {
        name: 'lorem',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloremque et distinctio deleniti nam, impedit voluptates.',
        link: '',
      },
    ];
  }
}
