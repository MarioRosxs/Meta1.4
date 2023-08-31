const ataqueGolpe = function () {
  return "Atacando con golpe";
};

const ataqueRayo = function () {
  return "Atacando con rayo fulminante";
};

const ataqueEspada = function () {
  return "Atacando con espada";
};

const ataqueVeneno = function () {
  return "Atacando con veneno corrosivo";
};

const ataqueExplosion = function () {
  return "Detonando explosión mágica";
};

const ataqueFuego = function () {
  return "Atacando con llamas ardientes";
};

const atacar = (ataque) => (personaje) => {
  const mensajeAtaque = ataque();
  console.log(`${mensajeAtaque} a ${personaje}`);
};

console.log(atacar(ataqueGolpe)("Personaje 1"));
console.log(atacar(ataqueRayo)("Personaje 2"));
console.log(atacar(ataqueEspada)("Personaje 1"));
console.log(atacar(ataqueFuego)("Personaje 2"));
console.log(atacar(ataqueExplosion)("Personaje 1"));
console.log(atacar(ataqueVeneno)("Personaje 2"));
