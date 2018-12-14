import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HttpService } from "../http.service";

@Component({
  selector: "app-add-pet",
  templateUrl: "./add-pet.component.html",
  styleUrls: ["./add-pet.component.css"]
})
export class AddPetComponent implements OnInit {
  newPet: any;
  errors: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) {}

  ngOnInit() {
    this.newPet = {
      name: "",
      type: "",
      description: "",
      likes: 0,
      skillOne: "",
      skillTwo: "",
      skillThree: ""
    };
  }

  create() {
    const obs = this._httpService.createPet(this.newPet);
    obs.subscribe(data => {
      console.log("Adding pet!", data);
      if (data["error"]) {
        this.errors = data["error"];
      } else {
        this.goHome();
      }
    });
  }

  goHome() {
    this._router.navigate(["/pets"]);
  }
}
