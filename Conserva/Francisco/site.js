function entrar() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (usuario === "admin" && senha === "1234") {
    document.getElementById("login").style.display = "none";
    document.getElementById("site").style.display = "block";
    document.getElementById("erro").innerText = ""; // limpa erro
  } else {
    document.getElementById("erro").innerText = "Usuário ou senha incorretos";
  }
}

const membros = document.querySelectorAll(".member");
const info = document.getElementById("info");

membros.forEach((membro) => {
  membro.onclick = () => {
    membros.forEach((m) => m.classList.remove("active"));
    membro.classList.add("active");
    info.innerHTML = `<b>${membro.dataset.nome}</b><br>${membro.dataset.desc}`;
  };
});
