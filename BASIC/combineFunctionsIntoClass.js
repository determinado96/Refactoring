/**
 * =========================================================
 * REFACTORING: COMBINE FUNCTIONS INTO CLASS
 * =========================================================
 *
 * Descrito por Martin Fowler no livro "Refactoring".
 *
 * Quando várias funções operam sobre os mesmos dados e
 * representam o mesmo conceito do domínio, elas podem ser
 * combinadas dentro de uma classe.
 *
 * Objetivo:
 * - Melhorar coesão
 * - Reduzir dispersão de lógica
 * - Representar melhor o modelo de domínio
 */


/**
 * =========================================================
 * IMPLEMENTAÇÃO INICIAL
 * =========================================================
 *
 * Problemas:
 * - Funções espalhadas no código
 * - Todas operam sobre o mesmo objeto "reading"
 * - Forte dependência de estrutura de dados externa
 * - Baixa coesão
 */

function base(reading) {
  return reading.quantity * reading.monthlyRate;
}

function taxableCharge(reading) {
  return Math.max(0, base(reading) - reading.taxThreshold);
}

function calculateBaseCharge(reading) {
  return base(reading) + reading.fixedFee;
}


/**
 * =========================================================
 * PROBLEMA IDENTIFICADO
 * =========================================================
 *
 * Todas as funções:
 * - usam o mesmo objeto
 * - dependem dos mesmos dados
 * - representam comportamentos do mesmo conceito
 *
 * Isso indica que existe um conceito de domínio implícito:
 *
 * → Reading
 */


/**
 * =========================================================
 * REFACTORING: COMBINE FUNCTIONS INTO CLASS
 * =========================================================
 *
 * Estratégia:
 * Encapsular os dados e comportamentos relacionados dentro
 * de uma classe que representa explicitamente o conceito
 * do domínio.
 *
 * Benefícios:
 * - Maior coesão
 * - Encapsulamento de regras de negócio
 * - Modelo de domínio mais claro
 */

class Reading {
  constructor({ quantity, monthlyRate, taxThreshold, fixedFee }) {
    this.quantity = quantity;
    this.monthlyRate = monthlyRate;
    this.taxThreshold = taxThreshold;
    this.fixedFee = fixedFee;
  }

  base() {
    return this.quantity * this.monthlyRate;
  }

  taxableCharge() {
    return Math.max(0, this.base() - this.taxThreshold);
  }

  calculateBaseCharge() {
    return this.base() + this.fixedFee;
  }
}


/**
 * =========================================================
 * EXEMPLO DE USO
 * =========================================================
 */

const reading = new Reading({
  quantity: 10,
  monthlyRate: 5,
  taxThreshold: 30,
  fixedFee: 10
});

console.log(reading.base());
console.log(reading.taxableCharge());
console.log(reading.calculateBaseCharge());