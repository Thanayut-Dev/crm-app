import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/auth/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'deals',
    loadChildren: () => import('./modules/generic-master/generic-master.module').then(m => m.GenericMasterModule),
    data: { layouts: ['deals'] },
    canActivate: [AuthGuard]
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/generic-master/generic-master.module').then(m => m.GenericMasterModule),
    data: { layouts: ['contact'] },
    canActivate: [AuthGuard]
  },
  {
    path: 'customer',
    loadChildren: () => import('./modules/generic-master/generic-master.module').then(m => m.GenericMasterModule),
    data: { layouts: ['customer'] },
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'settings',
  //   loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule),
  //   canActivate: [AuthGuard]
  // },
  {
    path: '**',
    redirectTo: 'deals'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
