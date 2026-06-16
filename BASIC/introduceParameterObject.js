function calcularFrete(
  ruaOrigem,
  cidadeOrigem,
  estadoOrigem,
  ruaDestino,
  cidadeDestino,
  estadoDestino,
  peso,
  distanciaKm,
) {
  const custoBase = distanciaKm * 1.2;
  const custoPeso = peso * 0.5;

  return custoBase + custoPeso;
}

// uso
// muitos parâmetros, difícil de entender o que cada um representa, fácil errar a ordem dos parâmetros
const valor = calcularFrete(
  "Rua A",
  "Porto Alegre",
  "RS",
  "Rua B",
  "São Paulo",
  "SP",
  10,
  800,
);

// -----

class Endereco {
  constructor(rua, cidade, estado) {
    this.rua = rua;
    this.cidade = cidade;
    this.estado = estado;
  }
}

class FreteRequest {
  constructor(origem, destino, peso, distanciaKm) {
    this.origem = origem;
    this.destino = destino;
    this.peso = peso;
    this.distanciaKm = distanciaKm;
  }
}

function calcularFrete(request) {
  const custoBase = request.distanciaKm * 1.2;
  const custoPeso = request.peso * 0.5;

  return custoBase + custoPeso;
}

const origem = new Endereco("Rua A", "Porto Alegre", "RS");
const destino = new Endereco("Rua B", "São Paulo", "SP");

const request = new FreteRequest(origem, destino, 10, 800);

const valor = calcularFrete(request);
