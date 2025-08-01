// Função para calcular o valor total do pedido
function valorPedido() {
  let total = 0;

  const prato = document.getElementById("prato");
  const precoPrato = prato.options[prato.selectedIndex].getAttribute("preco");

  const bebida = document.getElementById("bebida");
  const precoBebida =
    bebida.options[bebida.selectedIndex].getAttribute("preco");

  const valorPrato = precoPrato ? parseInt(precoPrato) : 0;
  const valorBebida = precoBebida ? parseInt(precoBebida) : 0;

  total = valorPrato + valorBebida;

  document.getElementById("total").innerHTML = "Total: R$ " + total + ",00";
  document.getElementById("totalModal").innerHTML = "R$ " + total + ",00";

  return total;
}

document.getElementById("prato").addEventListener("change", valorPedido);
document.getElementById("bebida").addEventListener("change", valorPedido);

// Função para gerar o QR Code
function gerarQrCodePix(pixPayload) {
  try {
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Total_a_pagar_R$_${pixPayload}`;
    const qrCodeContainer = document.querySelector(".qr-code");
    qrCodeContainer.innerHTML = "";

    const img = document.createElement("img");
    img.src = apiUrl;
    img.alt = "QR Code para pagamento Pix";

    qrCodeContainer.appendChild(img);
  } catch (error) {
    console.error("Ocorreu um erro ao gerar o QR Code:", error);
  }
}

const qrCodeModal = document.getElementById("qrCodeModal");
qrCodeModal.addEventListener("show.bs.modal", function (event) {
  const total = valorPedido();
  gerarQrCodePix(total);
});

window.addEventListener("load", valorPedido);
