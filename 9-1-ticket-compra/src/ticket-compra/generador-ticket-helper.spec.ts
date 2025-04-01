import {
  calcularPorcentajeIva,
  calcularIVA,
  calcularResultadoLineaTicket,
  calcularTotales,
  calcularTotalPorTipoIva,
} from "./generador-ticket-helper";
import { LineaTicket, ResultadoLineaTicket, TipoIva } from "./model";

describe("calcularPorcentajeIva", () => {
  it("Debe devolver error si tipoDeIva es null", () => {
    //Assert
    const tipoDeIva: any = null;
    //Act
    const resultado = () => calcularPorcentajeIva(tipoDeIva);
    //Arrange
    expect(resultado).toThrow("El tipo de IVA introducido no es válido");
  });
  it("Debe devolver error si tipoDeIva es undefined", () => {
    //Assert
    const tipoDeIva: any = undefined;
    //Act
    const resultado = () => calcularPorcentajeIva(tipoDeIva);
    //Arrange
    expect(resultado).toThrow("El tipo de IVA introducido no es válido");
  });
  it.each([
    ["general", 21],
    ["reducido", 10],
    ["superreducidoA", 5],
    ["superreducidoB", 4],
    ["superreducidoC", 0],
    ["sinIva", 0],
  ])(
    "Si el tipo de Iva es %s debería devolver %s",
    (tipoDeIva: string, porcentaje: number) => {
      const resultado = calcularPorcentajeIva(tipoDeIva as TipoIva);
      expect(resultado).toBe(porcentaje);
    }
  );
});

describe("calcularIVA", () => {
  it("Debe devolver error si alguno de los parámetros es null", () => {
    //Assert
    const precioProducto: any = null;
    const tipoDeIva: any = null;
    //Act
    const resultado = () => calcularIVA(precioProducto, tipoDeIva);
    //Arrange
    expect(resultado).toThrow(
      "Alguno de los parámetros introducidos no es válido"
    );
  });
  it("Debe devolver error si alguno de los parámetros es undefined", () => {
    //Assert
    const precioProducto: any = undefined;
    const tipoDeIva: any = undefined;
    //Act
    const resultado = () => calcularIVA(precioProducto, tipoDeIva);
    //Arrange
    expect(resultado).toThrow(
      "Alguno de los parámetros introducidos no es válido"
    );
  });
  it("Debe devolver error si el precio del producto es 0", () => {
    //Assert
    const precioProducto: any = undefined;
    const tipoDeIva: any = undefined;
    //Act
    const resultado = () => calcularIVA(precioProducto, tipoDeIva);
    //Arrange
    expect(resultado).toThrow(
      "Alguno de los parámetros introducidos no es válido"
    );
  });
  it("Debe devolver 2,1 si el precio del producto es 10", () => {
    //Assert
    const precioProducto = 10;
    const tipoDeIva = "general";
    //Act
    const resultado = calcularIVA(precioProducto, tipoDeIva);
    //Arrange
    expect(resultado).toBe(2.1);
  });
  it.each([
    ["general", 2.1],
    ["reducido", 1],
    ["superreducidoA", 0.5],
    ["superreducidoB", 0.4],
    ["superreducidoC", 0],
    ["sinIva", 0],
  ])(
    "Si el tipo de Iva es %s debería devolver %s",
    (tipoDeIva: string, valor: number) => {
      const precioProducto = 10;
      const resultado = calcularIVA(precioProducto, tipoDeIva as TipoIva);
      expect(resultado).toBe(valor);
    }
  );
});

describe("calcularResultadoLineaTicket", () => {
  it("Debe devolver error si la línea es null", () => {
    //Arrange
    const lineaTicket: any = null;
    //Act
    const resultado = () => calcularResultadoLineaTicket(lineaTicket);
    //Assert
    expect(resultado).toThrow("El parámetro no es válido");
  });
  it("Debe devolver error si la línea es undefined", () => {
    //Arrange
    const lineaTicket: any = undefined;
    //Act
    const resultado = () => calcularResultadoLineaTicket(lineaTicket);
    //Assert
    expect(resultado).toThrow("El parámetro no es válido");
  });

  it("Debe devolver el resultado de la linea con el Iva correspondiente aplicado", () => {
    //Arrange
    const producto = {
      producto: {
        nombre: "Legumbres",
        precio: 2,
        tipoIva: "general",
      },
      cantidad: 2,
    };
    //Act
    const resultado = calcularResultadoLineaTicket(producto as LineaTicket);
    //Assert
    const productolinea = {
      nombre: "Legumbres",
      cantidad: 2,
      precioSinIva: 4,
      tipoIva: "general",
      precioConIva: 4.84,
    };
    expect(resultado).toStrictEqual(productolinea);
  });
});

describe("calcularTotales", () => {
  it("Debe devolver error si algún parámetro es null", () => {
    //Arrange
    const resultadoLineasTicket: any = null;
    //Act
    const resultado = () => calcularTotales(resultadoLineasTicket);
    //Assert
    expect(resultado).toThrow("El parámetro no es válido");
  });
  it("Debe devolver error si algún parámetro es undefined", () => {
    //Arrange
    const resultadoLineasTicket: any = undefined;
    //Act
    const resultado = () => calcularTotales(resultadoLineasTicket);
    //Assert
    expect(resultado).toThrow("El parámetro no es válido");
  });
  it("Debe devolver un objeto donde totalSinIVa sea 14, totalConIVa sea 15.34 y totalIVA sea 1.34", () => {
    //Arrange
    const resultadoLineasTicket: ResultadoLineaTicket[] = [
      {
        nombre: "Legumbres",
        cantidad: 2,
        precioSinIva: 4, // Corregido
        tipoIva: "general",
        precioConIva: 4.84,
      },
      {
        nombre: "Lasaña",
        cantidad: 2,
        precioSinIva: 10, // Corregido
        tipoIva: "superreducidoA",
        precioConIva: 10.5,
      },
    ];

    //Act
    const resultado = calcularTotales(resultadoLineasTicket);
    const resultadoesperado = {
      totalSinIva: 14,
      totalConIva: 15.34,
      totalIva: 1.34,
    };
    //Assert
    expect(resultado).toStrictEqual(resultadoesperado);
  });
});

describe("calcularTotalPorTipoIva", () => {
  it("Debe devolver error si algún parámetro es null", () => {
    //Arrange
    const resultadoLineasTicket: any = null;
    //Act
    const resultado = () => calcularTotalPorTipoIva(resultadoLineasTicket);
    //Assert
    expect(resultado).toThrow("El parámetro no es válido");
  });
  it("Debe devolver error si algún parámetro es undefined", () => {
    //Arrange
    const resultadoLineasTicket: any = undefined;
    //Act
    const resultado = () => calcularTotalPorTipoIva(resultadoLineasTicket);
    //Assert
    expect(resultado).toThrow("El parámetro no es válido");
  });
  it("debería devolver un tipo general de 0,84, un tipo superreducidoA de 0,5 y el resto de tipos 0", () => {
    //Arrange
    const resultadoLineasTicket: ResultadoLineaTicket[] = [
      {
        nombre: "Legumbres",
        cantidad: 2,
        precioSinIva: 4, // Corregido
        tipoIva: "general",
        precioConIva: 4.84,
      },
      {
        nombre: "Lasaña",
        cantidad: 2,
        precioSinIva: 10, // Corregido
        tipoIva: "superreducidoA",
        precioConIva: 10.5,
      },
    ];
    //Act
    const resultado = calcularTotalPorTipoIva(resultadoLineasTicket);
    const resultadoesperado = [
      { tipoIva: "general", cuantia: 0.84 },
      { tipoIva: "reducido", cuantia: 0 },
      { tipoIva: "superreducidoA", cuantia: 0.5 },
      { tipoIva: "superreducidoB", cuantia: 0 },
      { tipoIva: "superreducidoC", cuantia: 0 },
      { tipoIva: "sinIva", cuantia: 0 },
    ];
    //Assert
    expect(resultado).toStrictEqual(resultadoesperado);
  });
});
