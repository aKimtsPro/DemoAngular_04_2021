import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { BindingComponent } from './binding/binding.component';
import { CommunicationComponent } from './communication/communication.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { DirectivesComponent } from './directives/directives.component';
import { DemoGuard } from './guard/demo.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParityComponent } from './parity/parity.component';
import { RedirectionComponent } from './redirection/redirection.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'directive', component: DirectivesComponent },
  { path: 'parity/:nbr', component: ParityComponent, canActivate: [ DemoGuard ] },
  { path: 'redir', component: RedirectionComponent },
  { path: 'pipe', component: DemoPipeComponent },
  { path: 'com', component: CommunicationComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
