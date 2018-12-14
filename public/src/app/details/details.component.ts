import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  liked: Boolean;
  pet: any;
  id: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.id = params['id'];
    });
    this.readPet();
    this.liked = false;
  }

  readPet() {
    const obs = this._httpService.getPet(this.id);
    obs.subscribe(data => {
      console.log('Retvieving pet', data);
      this.pet = data['data'];
    });
  }

  delete() {
    const obs = this._httpService.deletePet(this.id);
    obs.subscribe(data => {
      console.log('Destroying Pet...', data);
      this.goHome();
    });
  }

  like() {
    this.pet.likes += 1;
    this.liked = true;
    const obs = this._httpService.likePet(this.id, this.pet);
    obs.subscribe(data => {
      console.log('Liking pet...', data);
      this.readPet();
    });
  }

  goHome() {
    this._router.navigate(['/pets']);
  }
}
