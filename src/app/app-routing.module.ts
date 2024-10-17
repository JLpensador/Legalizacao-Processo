import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AlvaraComponent } from './pages/alvara/alvara.component';
import { CrmComponent } from './pages/crm/crm.component';
import { JuntaComercialComponent } from './pages/junta-comercial/junta-comercial.component';
import { CertificadoBombeirosComponent } from './pages/certificado-bombeiros/certificado-bombeiros.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'alvará', component: AlvaraComponent },
  { path: 'CRM', component: CrmComponent },
  { path: 'juntaComercial', component: JuntaComercialComponent },
  { path: 'CertificaçãoBombeiros', component: CertificadoBombeirosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
