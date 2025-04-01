import { ValidacionClave } from "./model";

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error("El parámetro introducido no es válido");
  }
  if (/[a-z]/.test(clave) && /[A-Z]/.test(clave)) {
    return { esValida: true };
  }

  return {
    esValida: false,
    error: "La clave debe de tener mayúsculas y minúsculas",
  };
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error("El parámetro introducido no es válido");
  }
  if (/\d/.test(clave)) {
    return { esValida: true };
  }

  return {
    esValida: false,
    error: "La clave debe de tener números",
  };
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error("El parámetro introducido no es válido");
  }
  if (/[^a-zA-Z0-9]/.test(clave)) {
    return { esValida: true };
  }

  return {
    esValida: false,
    error: "La clave debe de tener caracteres especiales",
  };
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error("El parámetro introducido no es válido");
  }
  if (clave.length < 8) {
    return {
      esValida: false,
      error: "La clave debe tener una longitud mínima de 8 caracteres",
    };
  }
  return {
    esValida: true,
  };
};

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  if (!clave) {
    throw new Error("El parámetro introducido no es válido");
  }

  if (clave.includes(nombreUsuario)) {
    return {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };
  }
  return {
    esValida: true,
  };
};

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  if (!clave) {
    throw new Error("El parámetro introducido no es válido");
  }
  if (commonPasswords.some((password) => clave.includes(password))) {
    return {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };
  }

  return {
    esValida: true,
  };
};
