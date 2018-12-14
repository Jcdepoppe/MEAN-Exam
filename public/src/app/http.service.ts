import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getPets() {
    return this._http.get('api/pets');
  }

  getPet(id: number) {
    return this._http.get(`api/pets/${id}`);
  }

  createPet(newPet) {
    return this._http.post('api/pets', newPet);
  }

  deletePet(id: number) {
    return this._http.delete(`api/pets/${id}`);
  }

  updatePet(id: number, data) {
    return this._http.put(`api/pets/${id}`, data);
  }

  likePet (id: number, data) {
    return this._http.patch(`api/pets/${id}/like`, data);
  }
}
