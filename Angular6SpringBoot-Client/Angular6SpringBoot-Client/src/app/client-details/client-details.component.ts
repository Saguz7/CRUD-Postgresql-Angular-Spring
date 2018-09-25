import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client';

import { ClientsListComponent } from '../clients-list/clients-list.component';

@Component({
  selector: 'client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  @Input() client: Client;

  constructor(private clientService: ClientService, private listComponent: ClientsListComponent) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.clientService.updateClient(this.client.id,
      { id: this.client.id, name: this.client.name, lastName: this.client.lastName,curp: this.client.curp,rs: this.client.rs,rfc: this.client.rfc,address: this.client.address, email: this.client.email, active: isActive })
      .subscribe(
        data => {
          console.log(data);
          console.log(this.client.id);
          this.client = data as Client;
        },
        error => console.log(error));
  }

  deleteClient() {
    if(confirm('¿Seguro de eliminar este cliente?')){
    this.clientService.deleteClient(this.client.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
    }
}
