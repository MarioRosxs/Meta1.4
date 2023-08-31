

const obtenDatosDeInternet = require("./servicioDatosPromise");
const realizarTransmisionesThen = () => {
    obtenDatosDeInternet.getDatos(1, 1000)
        .then(() => obtenDatosDeInternet.getDatos(2, 500))
        .then(() => obtenDatosDeInternet.getDatos(3, 1500))
        .then(() => obtenDatosDeInternet.getDatos(4, 700))
        .then(() => console.log("Programa terminado"))
        .catch((error) => console.error("Error:", error.message));
};
const realizarTransmisionesAsync = async () => {
    try {
        await obtenDatosDeInternet.getDatos(1, 1000);
        await obtenDatosDeInternet.getDatos(2, 500);
        await obtenDatosDeInternet.getDatos(3, 1500);
        await obtenDatosDeInternet.getDatos(4, 700);
        console.log("Programa terminado");
    } catch (error) {
        console.error("Error:", error.message);
    }
};

//realizarTransmisionesThen();
realizarTransmisionesAsync();