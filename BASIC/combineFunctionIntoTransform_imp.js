/**
 * =========================================================
 * REFACTORING: DERIVED VARIABLES / ENRICHING OBJECT
 * =========================================================
 *
 * Ideia:
 * Em vez de recalcular os mesmos valores várias vezes,
 * podemos criar um objeto "enriquecido" contendo dados
 * derivados do objeto original.
 *
 * Benefícios:
 * - Evita repetição de cálculos
 * - Reduz dependência entre funções
 * - Facilita entendimento do fluxo de transformação
 * - Centraliza regras de negócio
 */


/**
 * =========================================================
 * IMPLEMENTAÇÃO INICIAL
 * =========================================================
 *
 * Problemas:
 * - Repetição de cálculos (basePrice)
 * - Dependência implícita entre funções
 * - Múltiplas leituras do mesmo objeto
 * - Difícil visualizar o pipeline de transformação
 */

// const order = {
//   quantity: 10,
//   itemPrice: 5
// }

// function basePrice(order) {
//   return order.quantity * order.itemPrice
// }

// function discount(order) {
//   return Math.max(0, basePrice(order) - 50) * 0.05
// }

// function finalPrice(order) {
//   return basePrice(order) - discount(order)
// }


/**
 * =========================================================
 * REFACTORING: ENRICH OBJECT
 * =========================================================
 *
 * Estratégia:
 * Criar um objeto derivado contendo propriedades
 * calculadas a partir do objeto original.
 *
 * Dessa forma:
 * - cálculos são feitos uma única vez
 * - dados derivados ficam explícitos
 * - pipeline de transformação fica mais claro
 */

function enrichOrder(order) {
  const result = { ...order }

  result.basePrice = order.quantity * order.itemPrice
  result.discount = Math.max(0, result.basePrice - 50) * 0.05
  result.finalPrice = result.basePrice - result.discount

  return result
}


/**
 * =========================================================
 * EXEMPLO DE USO
 * =========================================================
 */

const order = {
  quantity: 10,
  itemPrice: 5
}

const enriched = enrichOrder(order)

console.log(enriched)


/**
 * =========================================================
 * RESULTADO
 * =========================================================
 *
 * Objeto derivado contendo valores calculados.
 *
 * {
 *   quantity: 10,
 *   itemPrice: 5,
 *   basePrice: 50,
 *   discount: 0,
 *   finalPrice: 50
 * }
 */