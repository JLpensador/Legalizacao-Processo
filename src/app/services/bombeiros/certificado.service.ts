import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CertificadoService {
  getBombeiros() {
    return [
      {
        name: 'Acompanhamento',
        description:
          'Consulte o status da sua certificação de bombeiros. Utilize o número de protocolo fornecido na solicitação para verificar em que fase se encontra o seu pedido na página',
        link: 'https://certificacao.bombeiros.ce.gov.br/acompanhamento',
      },

      {
        name: 'Solicitação',
        description:
          'Solicite a certificação de bombeiros. Acesse a opção de solicitação para preencher o formulário e anexar a documentação necessária, agilizando o processo para obter a certificação desejada.',
        link: 'https://juceac.ac.gov.br',
      },
    ];
  }
}
