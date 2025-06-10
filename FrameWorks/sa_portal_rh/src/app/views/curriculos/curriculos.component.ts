import { Component } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculosService } from 'src/app/services/curriculos.service';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.scss'],
})
export class CurriculosComponent {
  public currriculos: Curriculo[] = []; // vetor para armazenar os curriculos do BD

  constructor(private _curriculosService: CurriculosService) {}
  //injeta o serviço de vagas  dentro do componente

  
}
