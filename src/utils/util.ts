
export function getHoraAtual(){
    const horaAtual: number = new Date().getHours();
}
export function getTurnoString(hora: number): string{
   
        if (hora >= 0 && hora < 12) {
          return "Boa Dia";
        } else if (hora >= 12 && hora < 18) {
          return "Boa Tarde";
        } else {
          return "Boa Noite";
        }
      
}