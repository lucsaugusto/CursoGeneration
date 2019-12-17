import { EnderecoService } from './../../service/endereco.service';
import { Endereco } from './../../model/endereco';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-show-cep',
  templateUrl: './show-cep.component.html',
  styleUrls: ['./show-cep.component.css']
})
export class ShowCepComponent implements OnInit {

  endereco: Endereco = new Endereco('', '', '', '', '', '', '');
  id: string;
  
  constructor(public enderecoService:EnderecoService) { }

  ngOnInit() {
  }

  btnClick(){
    this.enderecoService.getCep(this.id).subscribe((enderecoOut: Endereco)=>{
      this.endereco = enderecoOut;
    })
  }
}
