import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pets: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.readPets();
  }

  readPets() {
    const obs = this._httpService.getPets();
    obs.subscribe(data => {
      console.log('Retrieving pets (ha get it?)', data);
      this.pets = data;
    });
  }

}
