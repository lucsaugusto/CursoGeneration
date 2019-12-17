import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  getCep(id: string){
    return this.http.get(`https://viacep.com.br/ws/${id}/json/`)
  }
}
