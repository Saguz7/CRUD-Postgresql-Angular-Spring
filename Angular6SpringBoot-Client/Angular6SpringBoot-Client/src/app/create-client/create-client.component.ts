import { Component, OnInit } from '@angular/core';

import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  client: Client = new Client();
  submitted = false;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
  }

  newClient(): void {
    this.submitted = false;
    this.client = new Client();
  }

  save() {
    this.clientService.createClient(this.client)
      .subscribe(data => console.log(data), error => console.log(error));
    this.client = new Client();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
