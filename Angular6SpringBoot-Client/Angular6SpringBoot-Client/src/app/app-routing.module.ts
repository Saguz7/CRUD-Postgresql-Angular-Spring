import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { SearchClientsComponent } from './search-clients/search-clients.component';

const routes: Routes = [
    { path: '', redirectTo: 'client', pathMatch: 'full' },
    { path: 'client', component: ClientsListComponent },
    { path: 'add', component: CreateClientComponent },
    { path: 'findbyage', component: SearchClientsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
