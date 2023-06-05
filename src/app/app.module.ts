import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { UpdateProfilComponent } from './pages/update-profil/update-profil.component';
import { MesEnfantsComponent } from './pages/mes-enfants/mes-enfants.component';
import { ProfilImgComponent } from './components/profil-img/profil-img.component';
import { ProfilFormComponent } from './components/profil-form/profil-form.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input-gg';
import { EnfantFormComponent } from './components/enfant-form/enfant-form.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { EnfantListComponent } from './components/enfant-list/enfant-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UpdateProfilComponent,
    MesEnfantsComponent,
    ProfilImgComponent,
    ProfilFormComponent,
    EnfantFormComponent,
    SocialMediaComponent,
    EnfantListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxIntlTelInputModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
