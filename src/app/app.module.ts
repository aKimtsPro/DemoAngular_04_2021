import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './directives/custom/highlight.directive';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParityComponent } from './parity/parity.component';
import { RedirectionComponent } from './redirection/redirection.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { PersonPipe } from './pipes/person.pipe';
import { CommunicationComponent } from './communication/communication.component';
import { Child1Component } from './communication/child1/child1.component';
import { Child2Component } from './communication/child2/child2.component';
import { FormsComponent } from './forms/forms.component';
import { RequeteComponent } from './requete/requete.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BindingComponent,
    DirectivesComponent,
    HighlightDirective,
    NavComponent,
    NotFoundComponent,
    ParityComponent,
    RedirectionComponent,
    DemoPipeComponent,
    PersonPipe,
    CommunicationComponent,
    Child1Component,
    Child2Component,
    FormsComponent,
    RequeteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
