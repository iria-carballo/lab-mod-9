import {
  tieneMayusculasYMinusculas,
  tieneLongitudMinima,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "./validacion-clave.helper";

describe("tieneMayusculasYMinusculas", () => {
  it("Debería devolver null si el parámetro es null", () => {
    //Arrange
    const clave: any = null;
    //Act
    const resultado = () => tieneMayusculasYMinusculas(clave);
    //Assert
    expect(resultado).toThrow("El parámetro introducido no es válido");
  });

  it("Debería devolver undefined si el parámetro es undefined", () => {
    //Arrange
    const clave: any = undefined;
    //Act
    const resultado = () => tieneMayusculasYMinusculas(clave);
    //Assert
    expect(resultado).toThrow("El parámetro introducido no es válido");
  });

  it("Debería devolver false y error:La clave debe de tener mayúsculas y minúsculas", () => {
    //Arrange
    const clave = "j89jshd4";
    //Act
    const resultado = tieneMayusculasYMinusculas(clave);
    const resultadoEsperado = {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };
    //Assert
    expect(resultado).toStrictEqual(resultadoEsperado);
  });

  it("Debería devolver esValida:true", () => {
    //Arrange
    const clave = "J89jshd4";
    //Act
    const resultado = tieneMayusculasYMinusculas(clave);

    //Assert
    expect(resultado).toStrictEqual({
      esValida: true,
    });
  });
});

describe("tieneNumeros", () => {
  it("Debería devolver null si el parámetro es null", () => {
    //Arrange
    const clave: any = null;
    //Act
    const resultado = () => tieneNumeros(clave);
    //Assert
    expect(resultado).toThrow("El parámetro introducido no es válido");
  });

  it("Debería devolver undefined si el parámetro es undefined", () => {
    //Arrange
    const clave: any = undefined;
    //Act
    const resultado = () => tieneNumeros(clave);
    //Assert
    expect(resultado).toThrow("El parámetro introducido no es válido");
  });

  it("Debería devolver false y error:La clave debe de tener números", () => {
    //Arrange
    const clave = "aBcdefgh";
    //Act
    const resultado = tieneNumeros(clave);
    const resultadoEsperado = {
      esValida: false,
      error: "La clave debe de tener números",
    };
    //Assert
    expect(resultado).toStrictEqual(resultadoEsperado);
  });

  it("Debería devolver esValida:true", () => {
    //Arrange
    const clave = "1Bcdefgh";
    //Act
    const resultado = tieneNumeros(clave);

    //Assert
    expect(resultado).toStrictEqual({
      esValida: true,
    });
  });
});

describe("tieneCaracteresEspeciales", () => {
  it("Debería devolver null si el parámetro es null", () => {
    //Arrange
    const clave: any = null;
    //Act
    const resultado = () => tieneCaracteresEspeciales(clave);
    //Assert
    expect(resultado).toThrow("El parámetro introducido no es válido");
  });

  it("Debería devolver undefined si el parámetro es undefined", () => {
    //Arrange
    const clave: any = undefined;
    //Act
    const resultado = () => tieneCaracteresEspeciales(clave);
    //Assert
    expect(resultado).toThrow("El parámetro introducido no es válido");
  });
  it("Debería devolver false y error: La clave debe de tener caracteres especiales", () => {
    // Arrange
    const clave: any = "1Bcdefgh";
    // Act
    const resultado = tieneCaracteresEspeciales(clave);
    const resultadoEsperado = {
      esValida: false,
      error: "La clave debe de tener caracteres especiales",
    };
    // Assert
    expect(resultado).toStrictEqual(resultadoEsperado);
  });
  it("Debería devolver esValida:true", () => {
    //Arrange
    const clave = "1Bcdefg&";
    //Act
    const resultado = tieneCaracteresEspeciales(clave);

    //Assert
    expect(resultado).toStrictEqual({
      esValida: true,
    });
  });
});

describe("tieneLongitudMinima", () => {
  it("Debería devolver null si el parámetro es null", () => {
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
  });

  it("Debería devolver false y error:La clave debe tener una longitud mínima de 8 caracteres si la clave tiene menos de 8 caracteres", () => {
    //Arrange
    const clave = "1Bcdef&";
    //Act
    const resultado = tieneLongitudMinima(clave);
    const resultadoEsperado = {
      esValida: false,
      error: "La clave debe tener una longitud mínima de 8 caracteres",
    };
    //Assert
    expect(resultado).toStrictEqual(resultadoEsperado);
  });

  it("Debería devolver esValida:true", () => {
    //Arrange
    const clave = "1Bcdefg&";
    //Act
    const resultado = tieneLongitudMinima(clave);

    //Assert
    expect(resultado).toStrictEqual({
      esValida: true,
    });
  });
});

describe("tieneNombreUsuario", () => {
  it("Debería devolver null si algún parámetro es null", () => {
    //Arrange
    const clave: any = null;
    const nombreUsuario: any = null;
    //Act
    const resultado = () => tieneNombreUsuario(nombreUsuario, clave);
    //Assert
    expect(resultado).toThrow("El parámetro introducido no es válido");
  });

  it("Debería devolver undefined si el parámetro es undefined", () => {
    //Arrange
    const clave: any = undefined;
    const nombreUsuario: any = undefined;
    //Act
    const resultado = () => tieneNombreUsuario(nombreUsuario, clave);
    //Assert
    expect(resultado).toThrow("El parámetro introducido no es válido");
  });

  it("Debería devolver false y error:La clave debe tener una longitud mínima de 8 caracteres si la clave tiene menos de 8 caracteres", () => {
    //Arrange
    const clave = "1Buserg&";
    const nombreUsuario = "user";
    //Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);
    const resultadoEsperado = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };
    //Assert
    expect(resultado).toStrictEqual(resultadoEsperado);
  });

  it("Debería devolver esValida:true", () => {
    //Arrange
    const clave = "1Bcdefg&";
    const nombreUsuario = "user";
    //Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);

    //Assert
    expect(resultado).toStrictEqual({
      esValida: true,
    });
  });
});

describe("tienePalabrasComunes", () => {
  it("Debería devolver null si algún parámetro es null", () => {
    //Arrange
    const clave: any = null;
    const commonPasswords: any = null;
    //Act
    const resultado = () => tienePalabrasComunes(clave, commonPasswords);
    //Assert
    expect(resultado).toThrow("El parámetro introducido no es válido");
  });

  it("Debería devolver undefined si el parámetro es undefined", () => {
    //Arrange
    const clave: any = undefined;
    const commonPasswords: any = undefined;
    //Act
    const resultado = () => tienePalabrasComunes(clave, commonPasswords);
    //Assert
    expect(resultado).toThrow("El parámetro introducido no es válido");
  });

  it("Debería devolver esValida:true", () => {
    //Arrange
    const clave = "1Bcdefg&";
    const commonPasswords = [
      "123456",
      "password",
      "qwerty",
      "123456789",
      "abc123",
      "letmein",
      "welcome",
      "monkey",
      "sunshine",
      "iloveyou",
      "admin",
      "password1",
      "football",
      "12345",
      "123123",
    ];
    //Act
    const resultado = tienePalabrasComunes(clave, commonPasswords);

    //Assert
    expect(resultado).toStrictEqual({
      esValida: true,
    });
    it("Debería devolver false y error:La clave no debe de contener palabras comunes", () => {
      //Arrange
      const clave = "1Badmin&";
      const commonPasswords: string[] = [
        "password",
        "123456",
        "qwerty",
        "admin",
        "letmein",
        "welcome",
        "monkey",
        "sunshine",
        "password1",
        "123456789",
        "football",
        "iloveyou",
        "1234567",
        "123123",
        "12345678",
        "abc123",
        "qwerty123",
        "1q2w3e4r",
        "baseball",
        "password123",
        "superman",
        "987654321",
        "mypass",
        "trustno1",
        "hello123",
        "dragon",
        "1234",
        "555555",
        "loveme",
        "hello",
        "hockey",
        "letmein123",
        "welcome123",
        "mustang",
        "shadow",
        "12345",
        "passw0rd",
        "abcdef",
        "123abc",
        "football123",
        "master",
        "jordan23",
        "access",
        "flower",
        "qwertyuiop",
        "admin123",
        "iloveyou123",
        "welcome1",
        "monkey123",
        "sunshine1",
        "password12",
        "1234567890",
      ];
      //Act
      const resultado = tienePalabrasComunes(clave, commonPasswords);
      const resultadoEsperado = {
        esValida: false,
        error: "La clave no debe de contener palabras comunes",
      };

      //Assert
      expect(resultado).toStrictEqual(resultadoEsperado);
    });
  });
});
