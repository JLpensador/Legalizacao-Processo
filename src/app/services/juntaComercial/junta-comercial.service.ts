import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JuntaComercialService {
  getJc() {
    return [
      {
        name: 'Distrito Federal',
        description: 'Junta Comercial do Distrito Federal (JUCIS-DF)',
        link: 'https://jucis.df.gov.br',
      },

      {
        name: 'Acre',
        description: 'Junta Comercial do Estado do Acre (JUCEAC)',
        link: 'https://juceac.ac.gov.br',
      },

      {
        name: 'Alagoas',
        description: 'Junta Comercial do Estado de Alagoas (JUCEAL)',
        link: 'https://www.juceal.al.gov.br',
      },

      {
        name: 'Amazonas',
        description: 'Junta Comercial do Estado do Amazonas (JUCEA)',
        link: 'https://www.jucea.am.gov.br',
      },

      {
        name: 'Amapá',
        description: 'Junta Comercial do Estado do Amapá (JUCEAP)',
        link: 'https://www.jucea.am.gov.br',
      },

      {
        name: 'Bahia',
        description: 'Junta Comercial do Estado da Bahia (JUCEB)',
        link: 'http://www.juceb.ba.gov.br',
      },

      {
        name: 'Ceará',
        description: 'Junta Comercial do Estado do Ceará (JUCEC)',
        link: 'https://www.jucec.ce.gov.br',
      },

      {
        name: 'Espirito Santo',
        description: 'Junta Comercial do Estado do Espirito Santo (JUCEES)',
        link: 'https://jucees.es.gov.br',
      },

      {
        name: 'Goías',
        description: 'Junta Comercial do Estado de Goías (JUCEG)',
        link: 'https://goias.gov.br/juceg/',
      },

      {
        name: 'Maranhão',
        description: 'Junta Comercial do Estado do Maranhão (JUCEMA)',
        link: 'http://portal.jucema.ma.gov.br',
      },

      {
        name: 'Mato Grosso',
        description: 'Junta Comercial do Estado de Mato Grosso (JUCEMAT)',
        link: 'https://www.jucemat.mt.gov.br',
      },

      {
        name: 'Mato Grosso do Sul',
        description: 'Junta Comercial do Estado de Mato Grosso do Sul (JUCEMS)',
        link: 'http://www.jucems.ms.gov.br',
      },

      {
        name: 'Minas Gerais',
        description: 'Junta Comercial do Estado de Minas Gerais (JUCEMG)',
        link: 'https://www.jucemg.mg.gov.br',
      },

      {
        name: 'Pará',
        description: 'Junta Comercial do Estado do Pará (JUCEPA)',
        link: 'https://www.jucepa.pa.gov.br',
      },

      {
        name: 'Paraíba',
        description: 'Junta Comercial do Estado de Paraíba (JUCEP)',
        link: 'https://jucep.pb.gov.br',
      },

      {
        name: 'Paraná',
        description: 'Junta Comercial do Estado do Paraná (JUCEPAR)',
        link: 'https://www.juntacomercial.pr.gov.br',
      },

      {
        name: 'Pernambuco',
        description: 'Junta Comercial do Estado do Pernambuco (JUCEPE)',
        link: 'https://portal.jucepe.pe.gov.br',
      },

      {
        name: 'Piauí',
        description: 'Junta Comercial do Estado do Piauí (JUCEPI)',
        link: 'https://portal.pi.gov.br/jucepi/',
      },

      {
        name: 'Rio de Janeiro',
        description: 'Junta Comercial do Estado do Rio de Janeiro (JUCERJA)',
        link: 'https://www.jucerja.rj.gov.br',
      },

      {
        name: 'Rio Grande do Norte',
        description:
          'Junta Comercial do Estado do Rio Grande do Norte (JUCERN)',
        link: 'http://www.jucern.rn.gov.br',
      },

      {
        name: 'Rio Grande do Sul',
        description: 'Junta Comercial do Estado do Rio Grande do Sul (JUCISRS)',
        link: 'https://jucisrs.rs.gov.br/inicial',
      },

      {
        name: 'Rondônia',
        description: 'Junta Comercial do Estado de Rondônia (JUCER)',
        link: 'https://rondonia.ro.gov.br/jucer/',
      },

      {
        name: 'Roraima',
        description: 'Junta Comercial do Estado de Roraima (JUCERR)',
        link: 'https://jucerr.rr.gov.br',
      },

      {
        name: 'Santa Catarina',
        description: 'Junta Comercial do Estado de Santa Catarina (JUCESC)',
        link: 'https://www.jucesc.sc.gov.br',
      },

      {
        name: 'São Paulo',
        description: 'Junta Comercial do Estado de São Paulo (JUCESP)',
        link: 'https://www.institucional.jucesp.sp.gov.br',
      },

      {
        name: 'Governo do Estado de São Paulo',
        description: 'Site do Governo de São Paulo usado com o JUCESP',
        link: 'https://vreredesim.sp.gov.br/home',
      },

      {
        name: 'Sergipe',
        description: 'Junta Comercial do Estado de Sergipe (JUCESE)',
        link: 'https://jucese.se.gov.br',
      },

      {
        name: 'Tocantins',
        description: 'Junta Comercial do Estado de Tocantins (JUCETINS)',
        link: 'https://www.to.gov.br/jucetins/',
      },

      {
        name: 'Pdf de Instruções de Viabilidade',
        description: 'Pdf com instruções de Registro com base na JUCEC',
        link: 'https://drive.google.com/file/d/18kbJbeqribsAxUnBO__3Nh3-dtazSMUR/view',
      },
    ];
  }
}
