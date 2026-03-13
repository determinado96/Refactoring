/**
 * =========================================================
 * REFACTORING: CHANGE FUNCTION DECLARATION
 * =========================================================
 *
 * Descrito por Martin Fowler no livro "Refactoring".
 *
 * Consiste em alterar a assinatura de uma função para tornar
 * sua API mais clara, coesa e expressiva, sem alterar o
 * comportamento do sistema.
 *
 * Mudanças comuns:
 * - Renomear a função
 * - Adicionar ou remover parâmetros
 * - Alterar a ordem dos parâmetros
 * - Substituir múltiplos parâmetros por um objeto
 * - Dividir um parâmetro em vários
 *
 * Objetivo:
 * - Melhorar legibilidade
 * - Reduzir ambiguidade
 * - Tornar a API mais expressiva
 */


/**
 * =========================================================
 * PROBLEMA 1: NOME DE FUNÇÃO POUCO EXPRESSIVO
 * =========================================================
 *
 * O nome da função não representa claramente o que ela faz.
 */

// Antes
function process(a, b) { ... }


/**
 * =========================================================
 * PROBLEMA 2: MUITOS PARÂMETROS (LONG PARAMETER LIST)
 * =========================================================
 *
 * Consequências:
 * - Difícil lembrar a ordem
 * - Aumenta chance de erros
 * - Reduz legibilidade
 */

// Antes
function createUser(name, email, age, role, isActive) { ... }


/**
 * =========================================================
 * PROBLEMA 3: PARÂMETROS OPCIONAIS CONFUSOS
 * =========================================================
 *
 * Quando existem muitos parâmetros opcionais,
 * fica difícil entender quais são obrigatórios.
 */

// Antes
function calculate(price, discount, tax, includeShipping) {}


/**
 * =========================================================
 * PROBLEMA 4: DATA CLUMPS (PARÂMETROS QUE SEMPRE VIAJAM JUNTOS)
 * =========================================================
 *
 * Se vários parâmetros sempre aparecem juntos,
 * provavelmente representam um único conceito
 * e deveriam ser encapsulados em um objeto.
 */


/**
 * =========================================================
 * EXEMPLO 1: AGRUPANDO PARÂMETROS RELACIONADOS
 * =========================================================
 *
 * Problemas:
 * - Muitos parâmetros
 * - Difícil lembrar a ordem
 * - Cliente é um conceito único, mas está fragmentado
 */

// Antes
function createOrder(customerName, customerEmail, productId, quantity) {
  console.log(`Order for ${customerName} (${customerEmail})`);
  console.log(`Product: ${productId}, Quantity: ${quantity}`);
}


// Depois
function createOrder({ customer, productId, quantity }) {
  console.log(`Order for ${customer.name} (${customer.email})`);
  console.log(`Product: ${productId}, Quantity: ${quantity}`);
}

createOrder({
  customer: { name: 'John Doe', email: 'john@example.com' },
  productId: '12345',
  quantity: 2
});


/**
 * =========================================================
 * EXEMPLO 2: MELHORANDO O NOME DA FUNÇÃO
 * =========================================================
 *
 * Problema:
 * - Nome genérico que não comunica intenção
 */

// Antes
function get(d) {
  return d * 1.1;
}


// Depois
function applyInterestRate(amount) {
  return amount * 1.1;
}


/**
 * =========================================================
 * EXEMPLO 3: INTRODUZINDO PARÂMETROS OPCIONAIS COM OBJETO
 * =========================================================
 *
 * Benefícios:
 * - Parâmetros opcionais ficam explícitos
 * - Não depende da ordem
 * - API mais clara
 */

// Antes
function calculateTotal(price, tax) {
  return price + tax;
}


// Depois
function calculateTotal(price, { tax = 0, discount = 0 } = {}) {
  return price + tax - discount;
}

calculateTotal(100, { tax: 10, discount: 5 });