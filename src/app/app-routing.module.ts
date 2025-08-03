import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/developers', pathMatch: 'full' },
  {
    path: 'developers',
    loadChildren: () =>
      import('./shared/developers/developers.module').then(
        (m) => m.DevelopersModule
      ),
  },
  { path: '**', redirectTo: '/developers', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
