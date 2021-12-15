import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchatsComponent } from './achats/achats.component';
import { ClientComponent } from './actors/client/client.component';
import { FormateurComponent } from './actors/formateur/formateur.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MesformationsComponent } from './mesformations/mesformations.component';
import { ProfilComponent } from './profil/profil.component';
import { ProfilclientComponent } from './profilclient/profilclient.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'client',component:ClientComponent},
  {path:'formateur',component:FormateurComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'profil',component:ProfilComponent},
  {path:'achats',component:AchatsComponent},
  {path:'profilclient',component:ProfilclientComponent},
  {path:'mesformations',component:MesformationsComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
