function gerarRelatorioPedido(pedido) {
  let total = 0;

  // Responsabilidade: Calcular o total do pedido
  for (const item of pedido.itens) {
    total += item.preco * item.quantidade;
  }

  // Responsabilidade: Aplicar desconto
  const desconto = total * 0.1;
  const totalComDesconto = total - desconto;

  // Responsabilidade: Imprimir relatório
  console.log("=== RELATÓRIO DO PEDIDO ===");
  console.log("Cliente:", pedido.cliente);
  console.log("Total:", totalComDesconto);
}

// -----

function calcularTotal(pedido) {
  let total = 0;

  for (const item of pedido.itens) {
    total += item.preco * item.quantidade;
  }

  return total;
}

function aplicarDesconto(total) {
  return total * 0.1;
}

function imprimirRelatorio(pedido, totalComDesconto) {
  console.log("=== RELATÓRIO DO PEDIDO ===");
  console.log("Cliente:", pedido.cliente);
  console.log("Total:", totalComDesconto);
}

function gerarRelatorioPedido(pedido) {
  const total = calcularTotal(pedido);
  const desconto = aplicarDesconto(total);
  const totalComDesconto = total - desconto;

  imprimirRelatorio(pedido, totalComDesconto);
}
