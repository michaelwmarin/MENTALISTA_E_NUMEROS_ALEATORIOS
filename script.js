//alert - document.write - console.log
var numeroCerto = parseInt(Math.random() * 10 + 11);

function pegarChute() {
  var valorDoUsuario = document.querySelector("input").value;
  var p = document.querySelector("p");

  if (numeroCerto == valorDoUsuario) {
    p.textContent = "Você acertou!";
  } else {
    p.textContent = "Você errou!";
  }
}

document.querySelector("button").addEventListener("click", pegarChute);
