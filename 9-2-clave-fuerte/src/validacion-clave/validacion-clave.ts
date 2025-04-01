import { ValidacionClave } from "./model";
import { tieneCaracteresEspeciales, tieneLongitudMinima, tieneMayusculasYMinusculas, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes } from "./validacion-clave.helper";

export const validarClave = (
    nombreUsuario: string,
    clave: string,
    commonPasswords: string[]
  ): ValidacionClave => {
    const validaciones = [
      tieneMayusculasYMinusculas(clave),
      tieneNumeros(clave),
      tieneCaracteresEspeciales(clave),
      tieneLongitudMinima(clave),
      tieneNombreUsuario(nombreUsuario, clave),
      tienePalabrasComunes(clave, commonPasswords),
    ];
  
    for (const validacion of validaciones) {
      if (!validacion.esValida) {
        return validacion; 
      }
    }
  
    return { esValida: true };
  };

