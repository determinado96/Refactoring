class Departamento {
  constructor(gerente) {
    this.gerente = gerente;
  }

  getGerente() {
    return this.gerente;
  }
}

class Funcionario {
  constructor(nome, departamento) {
    this.nome = nome;
    this.departamento = departamento;
  }

  getDepartamento() {
    return this.departamento;
  }
}

const departamento = new Departamento("João");
const funcionario = new Funcionario("Maria", departamento);

// Train wreck
// Se mudar a implementação de getDepartamento ou getGerente, o código abaixo pode quebrar
console.log(
  funcionario
    .getDepartamento()
      .getGerente()
);

// -----

class Departamento {
    constructor(gerente) {
        this.gerente = gerente;
    }

    getGerente() {
        return this.gerente;
    }
}

class Funcionario {
    constructor(nome, departamento) {
        this.nome = nome;
        this.departamento = departamento;
    }

    // Hide Delegate
    getGerente() {
        return this.departamento.getGerente();
    }
}

const departamento = new Departamento("João");
const funcionario = new Funcionario("Maria", departamento);

console.log(
    funcionario.getGerente()
);