import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'search-clients',
  templateUrl: './search-clients.component.html',
  styleUrls: ['./search-clients.component.css']
})
export class SearchClientsComponent implements OnInit {

  age: number;
  clients: Client[];

  constructor(private dataService: ClientService) { }

  ngOnInit() {
    this.age = 0;
  }

  private searchClients() {
    this.dataService.getClientsByAge(this.age)
      .subscribe(clients => this.clients = clients);
  }

  onSubmit() {
    this.searchClients();
  }
}
