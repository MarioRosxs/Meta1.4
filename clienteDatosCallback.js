const obtenDatosDeInternet = require("./servicioDatosCallback");

obtenDatosDeInternet.getDatos(1, 1000, function () {
  obtenDatosDeInternet.getDatos(2, 500, function () {
    obtenDatosDeInternet.getDatos(3, 1500, function () {
      obtenDatosDeInternet.getDatos(4, 700, function () {
        console.log("Programa terminado");
      });
    });
  });
});
