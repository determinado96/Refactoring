/**
 * =========================================================
 * REFACTORING: EXTRACT VARIABLE
 * =========================================================
 *
 * Descrito por Martin Fowler no livro "Refactoring".
 *
 * Consiste em extrair partes de uma expressão complexa
 * para variáveis intermediárias com nomes significativos.
 *
 * Objetivo:
 * - Melhorar legibilidade
 * - Tornar a intenção do código mais clara
 * - Facilitar manutenção
 * - Facilitar debug
 */


/**
 * =========================================================
 * IMPLEMENTAÇÃO INICIAL
 * =========================================================
 *
 * Problemas:
 * - Expressão longa e difícil de entender
 * - Repetição de cálculos
 * - Intenção do código pouco clara
 * - Difícil depurar partes específicas da lógica
 */

// Antes
return order.quantity * order.itemPrice -
  Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
  Math.min(order.quantity * order.itemPrice * 0.1, 100);


/**
 * =========================================================
 * REFACTORING: EXTRACT VARIABLE
 * =========================================================
 *
 * Estratégia:
 * Extrair partes da expressão para variáveis com nomes
 * que representem claramente o conceito do domínio.
 *
 * Benefícios:
 * - Cada cálculo ganha um significado explícito
 * - Evita repetição de expressões
 * - Código mais fácil de ler e manter
 */

// Depois
const basePrice = order.quantity * order.itemPrice;

const quantityDiscount =
  Math.max(0, order.quantity - 500) * order.itemPrice * 0.05; // desconto por quantidade

const shipping =
  Math.min(basePrice * 0.1, 100); // frete limitado a 100

return basePrice - quantityDiscount + shipping;