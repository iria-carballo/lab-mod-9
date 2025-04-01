import { ValidacionClave } from "./model";

/* export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
    if (!clave){
        throw new Error ("El parámetro introducido no es válido")
    }
    // ...
  };

  export const tieneNumeros = (clave: string): ValidacionClave => {
    if (!clave){
        throw new Error ("El parámetro introducido no es válido")
    }
    // ...
  };  

  export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
    if (!clave){
        throw new Error ("El parámetro introducido no es válido")
    }
    // ...
  }; */

  export const tieneLongitudMinima = (clave: string): ValidacionClave => {
    if (!clave){
        throw new Error ("El parámetro introducido no es válido");
    };
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

  /* export const tieneNombreUsuario = (
    nombreUsuario: string
    clave: string,
  ): ValidacionClave => {
    if (!clave){
        throw new Error ("El parámetro introducido no es válido")
    }
   
    //...
  };

  export const tienePalabrasComunes = (
    clave: string,
    commonPasswords: string[]
  ): ValidacionClave => {
    if (!clave){
        throw new Error ("El parámetro introducido no es válido")
    }
    // ...
  }; */
  