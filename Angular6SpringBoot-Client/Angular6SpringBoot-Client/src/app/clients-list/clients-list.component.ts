import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ClientService } from '../client.service';
import { Client } from '../client';

@Component({
  selector: 'clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients: Observable<Client[]>;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteClients() {
    this.clientService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadData() {
    this.clients = this.clientService.getClientsList();
  }
}
