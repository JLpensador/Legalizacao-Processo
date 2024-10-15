import { Injectable } from '@angular/core';
import { link } from 'node:fs';

@Injectable({
  providedIn: 'root',
})
export class AlvarásService {
  getAlvarás() {
    return [
      {
        name: 'Fortaleza',
        description:
          'O Alvará de Funcionamento é o documento que autoriza o início de uma atividade estabelecida em um imóvel no Município de Fortaleza.',
        link: 'https://portal.seuma.fortaleza.ce.gov.br/fortalezaonline/portal/listaservicos.jsf?hash=alvara_funcionamento',
        instruction:
          'https://portal.seuma.fortaleza.ce.gov.br/fortalezaonline/portal/manual/manual_alvara_funcionamento.pdf',
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

      {
        name: 'lorem',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloremque et distinctio deleniti nam, impedit voluptates.',
        link: '',
      },
    ];
  }
}
