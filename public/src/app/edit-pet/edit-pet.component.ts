import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  id: any;
  updatePet: any;
  errors: any;
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
    this.retrievePet();
  }

  retrievePet() {
    const obs = this._httpService.getPet(this.id);
    obs.subscribe(data => {
      console.log('Here is your pet', data);
      this.updatePet = { name: data['data'].name,
      type: data['data'].type,
      description: data['data'].description,
      likes: data['data'].likes,
      skillOne: data['data'].skillOne,
      skillTwo: data['data'].skillTwo,
      skillThree: data['data'].skillThree };
    });
  }

  edit() {
    const obs = this._httpService.updatePet(this.id, this.updatePet);
    obs.subscribe(data => {
      console.log('Updating...', data);
      if (data['error']) {
        this.errors = data;
      } else {
        this.goDetails();
      }
    });
  }

  goDetails() {
    this._router.navigate(['/pets', this.id]);
  }

}
