document
  .getElementById("formRegistro")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let vagas = parseInt(document.getElementById("vagas").textContent);
    if (vagas > 0) {
      vagas -= 1;
      document.getElementById("vagas").textContent = vagas;
      alert("Registro realizado com sucesso! Verifique seu e-mail.");
    } else {
      alert("Desculpe, as vagas estão esgotadas!");
    }
  });

const dataEvento = new Date("2025-12-30T18:44:00").getTime();

const atualizarContador = setInterval(() => {
  const agora = new Date().getTime();
  const diferenca = dataEvento - agora;

  // Cálculo do tempo restante
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  // Atualiza os valores na página
  document.getElementById("dias").textContent = dias
    .toString()
    .padStart(2, "0");
  document.getElementById("horas").textContent = horas
    .toString()
    .padStart(2, "0");
  document.getElementById("minutos").textContent = minutos
    .toString()
    .padStart(2, "0");
  document.getElementById("segundos").textContent = segundos
    .toString()
    .padStart(2, "0");

  // Se o evento já passou
  if (diferenca < 0) {
    clearInterval(atualizarContador);
    document.getElementById("timer").innerHTML =
      "<h3>O evento já começou! 🎉</h3>";
  }
}, 1000);
