/**
 * =========================================================
 * REFACTORING: INLINE VARIABLE
 * =========================================================
 *
 * Consiste em remover uma variável intermediária e substituir
 * seu uso diretamente pela expressão que a gerou.
 *
 * Fluxo original:
 * expressão → variável → uso
 *
 * Fluxo após refatoração:
 * expressão → uso direto
 *
 * Objetivo:
 * - Remover variáveis desnecessárias
 * - Reduzir ruído no código
 * - Simplificar a leitura
 */


/**
 * =========================================================
 * PROBLEMA
 * =========================================================
 *
 * Às vezes criamos variáveis intermediárias que não agregam
 * significado algum ao código. Elas apenas armazenam uma
 * expressão simples e são usadas imediatamente.
 *
 * Nesse caso, a variável não melhora a legibilidade.
 */


/**
 * =========================================================
 * IMPLEMENTAÇÃO INICIAL
 * =========================================================
 */

// Antes
function getTotal(order) {
  const basePrice = order.quantity * order.itemPrice;
  return basePrice;
}


/**
 * =========================================================
 * REFACTORING: INLINE VARIABLE
 * =========================================================
 *
 * Estratégia:
 * Substituir o uso da variável pela expressão original
 * que a produziu.
 *
 * Benefícios:
 * - Código mais curto
 * - Menos variáveis temporárias
 * - Menos distração para o leitor
 */

// Depois
function getTotal(order) {
  return order.quantity * order.itemPrice;
}