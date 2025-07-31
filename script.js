function valorPedido() {
  let total = 0;
  const prato = document.getElementById("prato");
  const precoPrato = prato.options[prato.selectedIndex].getAttribute("preco");
  const bebida = document.getElementById("bebida");
  const precoBebida =
    bebida.options[bebida.selectedIndex].getAttribute("preco");

  total = parseInt(precoPrato) + parseInt(precoBebida);
  document.getElementById("total").innerHTML = "Total: R$ " + total;
}
