import { Container, Titulos } from "./Script.js";

var Alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var Detalhes = [
  "O jogador que tenta adivinhar a palavra deve ir dizendo as letras que podem existir na palavra.",
  "Cada letra que ele acerta é escrita no espaço correspondente.",
  "Caso a letra não exista nessa palavra, desenha-se uma parte do corpo (iniciando pela cabeça, tronco, braços…).",
];
var divContexto = document.createElement("ul");
divContexto.setAttribute("class", "divContexto");

for (let i = 0; i < Detalhes.length; i++) {
  var contexto = document.createElement("li");
  contexto.setAttribute("class", "Contexto");
  divContexto.appendChild(contexto);
  contexto.textContent = Detalhes[i];
}
var divJogoForca = document.createElement("div");
divJogoForca.setAttribute("class", "divJogoForca");

var divForca = document.createElement("div");
divForca.setAttribute("class", "divForca");

var divLetras = document.createElement("div");
divLetras.setAttribute("class", "divLetras");

for (let i = 0; i < 4; i++) {
  var Forca = document.createElement("div");
  Forca.setAttribute("class", "Forca");
  divForca.appendChild(Forca);
  Forca.style = "background:green;widht:20px;height:20px;border:2px solid";
}

export function JogoForca0() {
  console.log("Jogo Da Forca");
  Container.appendChild(divContexto);
  Container.appendChild(divJogoForca);
  divJogoForca.appendChild(divForca);
  divJogoForca.appendChild(divLetras);
  Container.style.width = "70%";
  Titulos.textContent = "Jogo Da Forca";

  for (let i = 0; i < Alfabeto.length; i++) {
    var Letra = document.createElement("div");
    Letra.setAttribute("class", "Letra");
    divLetras.appendChild(Letra);
    Letra.textContent = Alfabeto[i];
  }
  const Letras = document.querySelectorAll("div.Letra");
  console.log(Letras.length);
  for (let i = 0; i < Letras.length; i++) {
    Letras[i].addEventListener("click", () => {
      divLetras.removeChild(Letras[i]);
    });
  }
}
