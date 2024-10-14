import { Injectable } from '@angular/core';
import { link } from 'node:fs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  getProjects() {
    return [
      {
        name: 'Alvará de Funcionamento',
        description:
          'O Alvará de Funcionamento é o documento que autoriza o início de uma atividade estabelecida em um imóvel, sendo emitido automaticamente a partir de atos declaratórios.',
        link: '/alvará',
      },
      {
        name: 'Consultar Pessoa Jurídica',
        description:
          'Consultar uma pessoa jurídica é um processo utilizado para obter informações importantes sobre uma empresa ou entidade registrada.',
        link: '',
      },
      {
        name: 'lorem',
        description: 'lorem imputation',
        link: '',
      },
    ];
  }
}
