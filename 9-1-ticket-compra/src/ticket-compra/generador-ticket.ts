import {
  calcularResultadoLineaTicket,
  calcularTotales,
  calcularTotalPorTipoIva,
} from "./generador-ticket-helper";
import { LineaTicket, ResultadoLineaTicket, TicketFinal } from "./model";

export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  let resultadoLineas: ResultadoLineaTicket[] = [];

  for (let i = 0; i < lineasTicket.length; i++) {
    resultadoLineas = [
      calcularResultadoLineaTicket(lineasTicket[i]),
      ...resultadoLineas,
    ];
  }

  const totales = calcularTotales(resultadoLineas);
  const totalesPorIVA = calcularTotalPorTipoIva(resultadoLineas); //implemetar funcion

  const ticketFinal: TicketFinal = {
    lineas: resultadoLineas,
    total: totales,
    desgloseIva: totalesPorIVA,
  };

  return ticketFinal;
};
