import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { SearchClientsComponent } from './search-clients/search-clients.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateClientComponent,
    ClientDetailsComponent,
    ClientsListComponent,
    SearchClientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
