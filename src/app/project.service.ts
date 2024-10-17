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
        name: 'Busca por médicos',
        description:
          'Consulte médicos registrados no Conselho Federal de Medicina. Encontre profissionais pelo nome, CRM ou estado e verifique sua regularidade para exercer a profissão.',
        link: 'https://portal.cfm.org.br/busca-medicos',
      },

      {
        name: 'Certificação Bombeiros',
        description:
          'Solicite e acompanhe sua certificação de bombeiros. Preencha o formulário na opção de solicitação e monitore o andamento do seu pedido na seção de acompanhar.',
        link: '/CertificaçãoBombeiros',
      },

      {
        name: 'Comprovante de Inscrição',
        description:
          'Acesse a página para a emissão do Comprovante de Inscrição e de Situação Cadastral de Pessoa Jurídica pela Internet',
        link: 'https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/Cnpjreva_Solicitacao.asp?cnpj=55399862000120',
      },

      {
        name: 'Empresas',
        description:
          'Gerencie arquivos corporativos no Google Drive, facilitando o armazenamento, compartilhamento e colaboração entre equipes.',
        link: 'https://drive.google.com/drive/u/2/folders/1ZJG9Bxd8hr85MfTnX7clGQC_ESJuuuQ3',
      },

      {
        name: 'Inscrição de CRM',
        description:
          'Consulte a inscrição no Conselho Regional de Medicina (CRM) de médicos para verificar se estão registrados e habilitados a exercer a profissão',
        link: '/CRM',
      },

      {
        name: 'Registro na Junta Comercial',
        description:
          'A Junta Comercial é um órgão governamental responsável por registrar, controlar e regularizar as atividades das empresas.',
        link: '/juntaComercial',
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
