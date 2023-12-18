import { Injectable } from '@angular/core';
import { OrdemServico } from 'src/app/models/OrdemServico';

const ordem_servico: OrdemServico[] = [{
    id: 1,
    cliente: 'Leandri Junior',
    carro: "Ford Ká",
    placa: 'BBG-1454',
    status: 'Em andamento',
    is_aprovado: "Sim",
    responsavel: 'Dhonathan',
    data_expedicao: '10/12/2023',
    data_entrega: '17/12/2023',
    hora_entrega: '17:30',
}];
 
@Injectable({
    providedIn: 'root'
})

export class OrdemServicoService {

  constructor() { }
  getOrdemServico(): OrdemServico[] {
    return ordem_servico;
}
}
