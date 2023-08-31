let finDeTransmisionDeDatos = function (id) {
  console.log("Transferencia", id, "terminada");
};

let obtenDatosDeInternet = function (id, duracion) {
  return new Promise((resolve) => {
    console.log("Proceso", id, "obteniendo datos de internet");
    setTimeout(() => {
      finDeTransmisionDeDatos(id);
      resolve();
    }, duracion);
  });
};
module.exports.getDatos = obtenDatosDeInternet;
