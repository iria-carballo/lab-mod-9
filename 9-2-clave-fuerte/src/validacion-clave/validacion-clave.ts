import { ValidacionClave } from "./model";

export const validarClave = (
    nombreUsuario: string,
    clave: string,
    commonPasswords: string[]
  ): ValidacionClave => {
    // ...
  };

/*

1. Comprobar si tiene mayúsculas y minúsuclas --> Error: "La clave debe de tener mayúsculas y minúsculas".
2. Comprobar que tiene números --> "La clave debe de tener números".
3. Comprobar que tiene caracteres especiales --> "La clave debe de tener caracteres especiales".
4. Comprobar que tiene al menos 8 caracteres --> "La clave debe de tener una longitud mínima de 8 caracteres".
5. Comprobar que no contiene el username --> "La clave no debe tener el nombre del usuario".
6. Comprobar que no contiene las palabras comunes --> "La clave no debe de contener palabras comunes".
 
*/