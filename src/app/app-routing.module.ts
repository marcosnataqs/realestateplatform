import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DealsComponent } from './deals/deals.component';

const routes: Routes = [
  { path: 'deals', component: DealsComponent },
  { path: '', redirectTo: '/deals', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
