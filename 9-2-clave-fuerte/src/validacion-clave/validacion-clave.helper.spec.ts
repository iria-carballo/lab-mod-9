import { tieneLongitudMinima } from "./validacion-clave.helper";

describe("tieneLongitudMinima", () => {
  /* it("Debería devolver null si el parámetro es null", () => {
    //Arrange
    const clave: any = null;
    //Act
    const resultado = () => tieneLongitudMinima(clave);
    //Assert
    expect(resultado).toThrow("El parámetro introducido no es válido");
  });
  it("Debería devolver undefined si el parámetro es undefined", () => {
    //Arrange
    const clave: any = undefined;
    //Act
    const resultado = () => tieneLongitudMinima(clave);
    //Assert
    expect(resultado).toThrow("El parámetro introducido no es válido");
  }); */

  it("Debería devolver false y error:La clave debe tener una longitud mínima de 8 caracteres si la clave tiene menos de 8 caracteres", () => {
    //Arrange
    const clave = "1234567";
    //Act
    const resultado = () => tieneLongitudMinima(clave);
    const resultadoEsperado = {
        esValida: false,
        error: "La clave debe tener una longitud mínima de 8 caracteres",
    }
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});
