import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { DataReadService } from './login/data-read.service';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { ClientsComponent } from './clients/clients.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AuthService } from './_services/auth.service';
import { authInterceptorProviders } from '../helpers/auth.interceptor';
import { MatTableModule } from '@angular/material/table';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ViewDocumentsComponent } from './view-documents/view-documents.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponentComponent,
    ClientsComponent,
    SidebarComponent,
    ViewDocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatListModule,
    MatFormFieldModule,
  ],
  providers: [DataReadService, AuthService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
