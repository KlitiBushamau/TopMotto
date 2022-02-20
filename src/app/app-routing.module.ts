import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from "./contact/contact.component";
import { DeilsComponent } from "./deils/deils.component";
import { OrivacyComponent } from "./orivacy/orivacy.component";
import { Page404Component } from "./page404/page404.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'contact', component: ContactComponent },
  { path: 'details', component: DeilsComponent },
  { path: 'privacy', component: OrivacyComponent },
  { path: '404', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
