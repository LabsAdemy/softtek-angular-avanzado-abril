import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoAuxComponent } from './core/components/info-aux/info-aux.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  {
    path: 'agencies',
    loadChildren: () => import('./agencies/agencies.module').then((m) => m.AgenciesModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: ':lesson',
    outlet: 'infoAux',
    component: InfoAuxComponent,
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then((m) => m.RegisterModule),
  },
  { path: 'labs', loadChildren: () => import('./labs/labs.module').then((m) => m.LabsModule) },
  { path: 'trips', loadChildren: () => import('./trips/trips.module').then((m) => m.TripsModule) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
