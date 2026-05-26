// 
let discount = 0.1;

// vários lugares fazem:
let price = price - (price * discount);

// Problemas?
// Qualquer código pode alterar discount
// Mudanças futuras quebram vários pontos

// -----

let _discount = 0.1;

function getDiscount() {
  return _discount;
}

function setDiscount(value) {
  if (value < 0 || value > 0.5) {
    throw new Error("Desconto inválido");
  }

  _discount = value;
}

function calculate(price) {
  return price - (price * getDiscount());
}

// Conseguimos adicionar validações (sem repetir)
// Adicionar logging
// Mais importante, conseguimos mudar a implementação sem quebrar os consumidores

let _discountConfig = {
  default: 0.1,
  vip: 0.2
};

// Precisariamos arrumar apenas getDiscount
