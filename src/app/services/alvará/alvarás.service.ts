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
        name: 'Crato',
        description:
          'O site de serviços do Crato oferece uma plataforma para consultas e emissão de documentos públicos, como alvarás, certidões e licenças.',
        link: 'https://servicos2.speedgov.com.br/crato/',
        instruction: 'https://youtu.be/gBFucqMWNOQ?si=NkNOCbYukInUtSKd',
      },

      {
        name: 'Eusébio',
        description:
          'O site de serviços do Eusébio proporciona uma interface prática para a solicitação e emissão de documentos públicos, como alvarás, certidões e licenças.',
        link: 'https://servicos2.speedgov.com.br/eusebio/',
        instruction: 'https://www.youtube.com/watch?v=gBFucqMWNOQ&t=1s',
      },

      {
        name: 'Juazeiro do Norte',
        description:
          'O site de serviços de Juazeiro do Norte oferece uma plataforma eficiente para a emissão de documentos públicos, incluindo alvarás, certidões e licenças.',
        link: 'https://servicos2.speedgov.com.br/juazeirodonorte/',
        instruction: 'https://www.youtube.com/watch?v=SJn0oKUIu9I',
      },

      {
        name: 'Rio de Janeiro',
        description:
          'O portal Carioca oferece uma solução digital inovadora para facilitar a vida dos cidadãos do Rio de Janeiro permitindo a emissão de alvarás, licenças e certidões.',
        link: 'https://home.carioca.rio/',
        instruction: 'faqnew.pdf',
      },

      {
        name: 'lorem',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloremque et distinctio deleniti nam, impedit voluptates.',
        link: '',
        instruction: '',
      },
    ];
  }
}
