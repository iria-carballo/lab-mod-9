import {
  LineaTicket,
  ResultadoLineaTicket,
  ResultadoTotalTicket,
  TipoIva,
  TotalPorTipoIva,
} from "./model";

export const calcularPorcentajeIva = (tipoDeIva: TipoIva) => {
  if (!tipoDeIva) {
    throw new Error("El tipo de IVA introducido no es válido");
  }
  switch (tipoDeIva) {
    case "general":
      return 21;
    case "reducido":
      return 10;
    case "superreducidoA":
      return 5;
    case "superreducidoB":
      return 4;
    case "superreducidoC":
      return 0;
    case "sinIva":
      return 0;
  }
};

export const calcularIVA = (
  precioProducto: number,
  tipoDeIva: TipoIva
): number => {
  if (!precioProducto || !tipoDeIva || precioProducto === 0) {
    throw new Error("Alguno de los parámetros introducidos no es válido");
  }
  const porcentajeIva = calcularPorcentajeIva(tipoDeIva);
  const ivaRedondeado = Number(
    (precioProducto * (porcentajeIva / 100)).toFixed(2)
  );

  return ivaRedondeado;
};

export const calcularResultadoLineaTicket = (
  lineaTicket: LineaTicket
): ResultadoLineaTicket => {
  if (!lineaTicket) {
    throw new Error("El parámetro no es válido");
  }

  const iva = calcularIVA(
    lineaTicket.producto.precio,
    lineaTicket.producto.tipoIva
  );

  return {
    nombre: lineaTicket.producto.nombre,
    cantidad: lineaTicket.cantidad,
    precioSinIva: lineaTicket.producto.precio * lineaTicket.cantidad,
    tipoIva: lineaTicket.producto.tipoIva,
    precioConIva: (lineaTicket.producto.precio + iva) * lineaTicket.cantidad,
  };
};

export const calcularTotales = (
  resultadoLineasTicket: ResultadoLineaTicket[]
): ResultadoTotalTicket => {
  if (!resultadoLineasTicket) {
    throw new Error("El parámetro no es válido");
  }

  const { totalSinIva, totalConIva, totalIva } = resultadoLineasTicket.reduce(
    (acc, linea) => {
      acc.totalSinIva += linea.precioSinIva;
      acc.totalConIva += linea.precioConIva;
      acc.totalIva += linea.precioConIva - linea.precioSinIva;
      return acc;
    },
    { totalSinIva: 0, totalConIva: 0, totalIva: 0 }
  );

  return {
    totalSinIva,
    totalConIva,
    totalIva: Number(totalIva.toFixed(2)), // Redondeamos a 2 decimales solo al final
  };
};

export const calcularTotalPorTipoIva = (
  resultadoLineasTicket: ResultadoLineaTicket[]
): TotalPorTipoIva[] => {
  if (!resultadoLineasTicket) {
    throw new Error("El parámetro no es válido");
  }

  let tiposDeIva: TotalPorTipoIva[] = [
    { tipoIva: "general", cuantia: 0 },
    { tipoIva: "reducido", cuantia: 0 },
    { tipoIva: "superreducidoA", cuantia: 0 },
    { tipoIva: "superreducidoB", cuantia: 0 },
    { tipoIva: "superreducidoC", cuantia: 0 },
    { tipoIva: "sinIva", cuantia: 0 },
  ];
  for (let i = 0; i < resultadoLineasTicket.length; i++) {
    const linea = resultadoLineasTicket[i];
    const iva = calcularIVA(resultadoLineasTicket[i].precioSinIva, resultadoLineasTicket[i].tipoIva);

    const existeTipoIva = tiposDeIva.find((item) => item.tipoIva === linea.tipoIva);

    if (existeTipoIva){
      existeTipoIva.cuantia += iva;
    }
  }

  return tiposDeIva.map((item) => ({
    ...item,
    cuantia: Number(item.cuantia.toFixed(2)),
  }));;
};
