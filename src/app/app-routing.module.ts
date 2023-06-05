import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProfilComponent } from './pages/update-profil/update-profil.component';
import { MesEnfantsComponent } from './pages/mes-enfants/mes-enfants.component';

const routes: Routes = [
  { path: '', component: UpdateProfilComponent },
  { path: 'update_profil', component: UpdateProfilComponent },
  { path: 'mes_enfants', component: MesEnfantsComponent },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
