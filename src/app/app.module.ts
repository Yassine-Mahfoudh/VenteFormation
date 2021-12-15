import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormateurComponent } from './actors/formateur/formateur.component';
import { ClientComponent } from './actors/client/client.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfilComponent } from './profil/profil.component';
import { HomeComponent } from './home/home.component';
//import { FormationComponent } from './formation/formation.component';
import { CardComponent } from './card/card.component';
import { CardformateurComponent } from './cardformateur/cardformateur.component';
import { StcardComponent } from './stcard/stcard.component';
import { AchatsComponent } from './achats/achats.component';
import { AchatscardComponent } from './achatscard/achatscard.component';
import { NavclientComponent } from './navclient/navclient.component';
import { ProfilclientComponent } from './profilclient/profilclient.component';
import { MesformationsComponent } from './mesformations/mesformations.component';
import { StcardformateurComponent } from './stcardformateur/stcardformateur.component';
import { NavformateurComponent } from './navformateur/navformateur.component';
import { NavindexComponent } from './navindex/navindex.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormateurComponent,
    ClientComponent,
    LoginComponent,
    SignupComponent,
    ProfilComponent,
    HomeComponent,
    //FormationComponent,
    CardComponent,
    CardformateurComponent,
    StcardComponent,
    AchatsComponent,
    AchatscardComponent,
    NavclientComponent,
    ProfilclientComponent,
    MesformationsComponent,
    StcardformateurComponent,
    NavformateurComponent,
    NavindexComponent,
    //FormationcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
