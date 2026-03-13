/**
 * =========================================================
 * REFACTORING: INLINE FUNCTION
 * =========================================================
 *
 * Consiste em remover uma função cujo corpo é simples ou
 * desnecessário, substituindo suas chamadas diretamente
 * pela lógica que ela executa.
 *
 * Esse refactoring é o oposto de "Extract Function".
 *
 * Objetivo:
 * - Reduzir indireção desnecessária
 * - Simplificar o fluxo de leitura
 * - Eliminar abstrações que não agregam valor
 */


/**
 * =========================================================
 * IMPLEMENTAÇÃO INICIAL
 * =========================================================
 *
 * Problema:
 * A função adiciona um nível de indireção sem trazer
 * benefícios claros de reutilização ou abstração.
 */

function isPremiumUser(user) {
  return user.type === 'premium';
}

function calculateDiscount(user, price) {
  if (isPremiumUser(user)) {
    return price * 0.8;
  }
  return price;
}


/**
 * =========================================================
 * PROBLEMA IDENTIFICADO
 * =========================================================
 *
 * - A função é extremamente simples
 * - Não está sendo reutilizada
 * - Não adiciona significado adicional ao código
 *
 * Nesse cenário, a função apenas cria uma indireção
 * desnecessária.
 */


/**
 * =========================================================
 * REFACTORING: INLINE FUNCTION
 * =========================================================
 *
 * Estratégia:
 * Substituir a chamada da função diretamente pela lógica
 * que ela executa.
 *
 * Atenção:
 * Caso a lógica venha a ser reutilizada ou se tornar mais
 * complexa, pode ser necessário reintroduzir a função
 * (Extract Function).
 */

function calculateDiscount(user, price) {
  // Se a regra de usuário premium mudar ou passar a ser
  // reutilizada, talvez seja melhor extrair novamente
  // para uma função específica.

  if (user.type === 'premium') {
    return price * 0.8;
  }

  return price;
}