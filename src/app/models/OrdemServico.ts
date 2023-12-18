export interface OrdemServico {
    id: number,
    cliente: string,
    carro: string,
    placa: string,
    status: string,
    is_aprovado: string,
    responsavel: string,
    data_expedicao: string,
    data_entrega: string,
    hora_entrega: string,
}