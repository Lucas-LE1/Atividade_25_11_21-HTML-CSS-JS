import { Container, Titulos } from "./Script.js";

var Detalhes = [
  "O jogador que tenta adivinhar a palavra deve ir dizendo as letras que podem existir na palavra.",
  "Cada letra que ele acerta é escrita no espaço correspondente.",
  "Caso a letra não exista nessa palavra, desenha-se uma parte do corpo (iniciando pela cabeça, tronco, braços…).",
];
var divContexto = document.createElement("ul");
divContexto.setAttribute("class", "divContexto");

for (let i = 0; i < Detalhes.length; i++) {
  var contexto = document.createElement("li");
  contexto.setAttribute("class", "contexto");
  divContexto.appendChild(contexto);
  contexto.textContent = Detalhes[i];
}

var divForca = document.createElement('div');
divForca.setAttribute('class','divForca');

var divLetras = document.createElement('div');
divLetras.setAttribute('class','divLetras');

export function JogoForca0() {
  console.log("Jogo Da Forca");
  Container.appendChild(divContexto)
  Container.appendChild(divForca);
  Container.appendChild(divLetras);
  Container.style.width = "70%";
  Titulos.textContent = "Jogo Da Forca";

}
