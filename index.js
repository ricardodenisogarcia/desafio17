// Escribir acá la función cuentaPalabras
function cuentaPalabras(texto) {
  var textoAEvaluar = texto;
  var textoTroceado = textoAEvaluar.split(" ");
  var cantidadDePalabras = textoTroceado.length;
  var palabrasConA = 0;
  for (var indice = 0; indice < cantidadDePalabras; indice++) {
    var letraAEvaluar = textoTroceado[indice].charAt();
    var letraA = "a";
    if (letraAEvaluar == letraA) {
      palabrasConA++;
    }
  }
  return {
    cantidadDePalabras,
    palabrasConA,
  };
}

// no modificar esta funcion
function testCuentaPalabras() {
  const texto =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus non, eligendi harum adipisci eos provident quaerat eveniet illo placeat distinctio omnis pariatur maiores et voluptates perferendis laborum quam facere.";
  const resultado = cuentaPalabras(texto);
  if (resultado.cantidadDePalabras == 30 && resultado.palabrasConA == 3) {
    console.log("testCuentaPalabras passed");
  } else {
    throw "testCuentaPalabras falló";
  }
}
function main() {
  testCuentaPalabras(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus non, eligendi harum adipisci eos provident quaerat eveniet illo placeat distinctio omnis pariatur maiores et voluptates perferendis laborum quam facere."
  );
}

main();
