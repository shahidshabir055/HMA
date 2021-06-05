import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { LoginComponent } from './login/login.component';
import { ViewDocumentsComponent } from './view-documents/view-documents.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'documents', component: ViewDocumentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
