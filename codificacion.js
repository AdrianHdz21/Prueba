// Función para codificar una cadena de texto
function codificarCadena() {
  // Obtener el valor del input de la cadena original
  let cadenaOriginal = document.getElementById("cadena").value.toLowerCase();


  // Validar la cadena original antes de continuar
  if (!validarCadena(cadenaOriginal)) {
    return;
  }

  // Variable que recibe la cadena codificada
  let nuevaCadenaCodificada = "";

  // Obtener el elemento donde se mostrará el resultado de la codificación
  let resultadoCodificacion = document.getElementById("areaResultado");

  // Recorrer cada carácter de la cadena original
  for (let i = 0; i < cadenaOriginal.length; i++) {
    // Utilizar un switch para codificar cada letra según las reglas especificadas
    switch (cadenaOriginal[i]) {
      case "a":
        nuevaCadenaCodificada += "ai";
        break;
      case "e":
        nuevaCadenaCodificada += "enter";
        break;
      case "i":
        nuevaCadenaCodificada += "imes";
        break;
      case "o":
        nuevaCadenaCodificada += "ober";
        break;
      case "u":
        nuevaCadenaCodificada += "ufat";
        break;
      default:
        nuevaCadenaCodificada += cadenaOriginal[i];
        break;
    }
  }

  // Mostrar la cadena codificada en el área de resultado
  resultadoCodificacion.value = nuevaCadenaCodificada;
}

// Función para decodificar una cadena de texto
function decodificarCadena() {
  // Obtener el valor del input de la cadena codificada
  let cadenaCodificada = document.getElementById("cadena").value.toLowerCase();

  // Validar la cadena codificada antes de continuar
  if (!validarCadena(cadenaCodificada)) {
    return;
  }

  // Convertir la cadena codificada a minúsculas y dividirla en un array de caracteres
  let cadenaARecorrer = cadenaCodificada.split("");

  // Variable que recibe la cadena decodificada
  let nuevaCadenaDecodificada = "";

  // Obtener el elemento donde se mostrará el resultado de la decodificación
  let resultadoDecodificacion = document.getElementById("areaResultado");

  // Recorrer cada carácter de la cadena codificada
  for (let i = 0; i < cadenaARecorrer.length; i++) {
    // Utilizar un switch para decodificar cada combinación según las reglas especificadas
    switch (true) {
      case cadenaARecorrer.slice(i, i + 5).join("") === "enter":
        nuevaCadenaDecodificada += "e";
        i += 4; // Salta las siguientes letras en caso de que sea una combinación
        break;
      case cadenaARecorrer.slice(i, i + 4).join("") === "imes":
        nuevaCadenaDecodificada += "i";
        i += 3;
        break;
      case cadenaARecorrer.slice(i, i + 2).join("") === "ai":
        nuevaCadenaDecodificada += "a";
        i += 1;
        break;
      case cadenaARecorrer.slice(i, i + 4).join("") === "ober":
        nuevaCadenaDecodificada += "o";
        i += 3;
        break;
      case cadenaARecorrer.slice(i, i + 4).join("") === "ufat":
        nuevaCadenaDecodificada += "u";
        i += 3;
        break;
      default:
        nuevaCadenaDecodificada += cadenaARecorrer[i];
    }
  }

  // Mostrar la cadena decodificada en el área de resultado
  resultadoDecodificacion.value = nuevaCadenaDecodificada;
}

// Función para validar que la cadena contiene solo letras minúsculas
function validarCadena(cadena) {
  let resultadoDecodificacion = document.getElementById("areaResultado");
  let mensaje = "Por favor, ingrese solo letras minúsculas, sin caracteres especiales.";
  
  if (/[^a-z0-9\sñ]/.test(cadena)) {
    resultadoDecodificacion.value = mensaje;
    return false;
  }
  return true;
}

// Función para limpiar los campos de entrada y resultado
function limpiar() {
  document.getElementById("areaResultado").value = "";
  document.getElementById("cadena").value = "";
 // document.getElementById("cadenaDecodificar").value = "";
}

// Función para copiar el texto del área de resultado al portapapeles
function copiarTexto() {
  var textarea = document.getElementById("areaResultado");
  textarea.select();
  textarea.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Texto copiado: " + textarea.value);
}
