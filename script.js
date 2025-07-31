function valorPedido() {
  let total = 0;
  const prato = document.getElementById("prato");
  const precoPrato = prato.options[prato.selectedIndex].getAttribute("preco");
  const bebida = document.getElementById("bebida");
  const precoBebida =
    bebida.options[bebida.selectedIndex].getAttribute("preco");

  total = parseInt(precoPrato) + parseInt(precoBebida);
  document.getElementById("total").innerHTML = "Total: R$ " + total;
  document.getElementById("totalModal").innerHTML = "R$ " + total;
}
window.addEventListener("load", valorPedido);
window.addEventListener("change", valorPedido);

function gerarQrCodePix(pixPayload) {
  try {
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${pixPayload}`;
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
  gerarQrCodePix(2199751684);
});
