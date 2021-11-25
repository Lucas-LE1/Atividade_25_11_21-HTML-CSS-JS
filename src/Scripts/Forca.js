import { Container, Titulos } from "./Script.js";
import { WordsForca } from "./WordsForcaScript.js";

var Alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var Detalhes = [
  "O jogador que tenta adivinhar a palavra deve ir dizendo as letras que podem existir na palavra.",
  "Cada letra que ele acerta é escrita no espaço correspondente.",
  "Caso a letra não exista nessa palavra, desenha-se uma parte do corpo (iniciando pela cabeça, tronco, braços…).",
];
var index1 = Math.floor(Math.random() * WordsForca.length);
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
divForca.textContent = WordsForca[index1].dica;

var divLetras = document.createElement("div");
divLetras.setAttribute("class", "divLetras");

var divCorpo = document.createElement("div");
divCorpo.setAttribute("class", "divCorpo");
divForca.appendChild(divCorpo);

var divTraçados = document.createElement("div");
divTraçados.setAttribute("class", "divTraçados");
divForca.appendChild(divTraçados);

function criarTraçados() {
  let palavra = SortearLetra();
  console.log(palavra);
  for (let i = 0; i < palavra.length; i++) {
    var divCaracter = document.createElement("div");
    divCaracter.setAttribute("class", "DivCaracter");
    var Caracter = document.createElement("p");
    divTraçados.appendChild(divCaracter);
    divCaracter.appendChild(Caracter);
  }
  var Caracters = document.querySelectorAll("div.DivCaracter");
  let TestePalavra = Caracters.length;
  for (let i = 0; i < Alfabeto.length; i++) {
    var Letra = document.createElement("div");
    Letra.setAttribute("class", "Letra");
    divLetras.appendChild(Letra);
    Letra.textContent = Alfabeto[i];
  }
  const Letras = document.querySelectorAll("div.Letra");

  for (let index = 0; index < Letras.length; index++) {
    Letras[index].addEventListener("click", () => {
      divLetras.removeChild(Letras[index]);

      if (palavra.search(Letras[index].innerHTML) == -1) {
      } else {
        for (let i = 0; i < palavra.length; i++) {
          if (palavra[i] == Letras[index].innerHTML) {
            Caracters[i].textContent = Letras[index].innerHTML;
            TestePalavra--;
          }
        }
      }
      if (TestePalavra==0) {
      }
    });
  }
}
function SortearLetra() {
  let index2 = Math.floor(Math.random() * WordsForca[index1].Words.length);
  return WordsForca[index1].Words[index2].toUpperCase();
}

export function JogoForca0() {
  console.log("Jogo Da Forca");
  Container.appendChild(divContexto);
  Container.appendChild(divJogoForca);
  divJogoForca.appendChild(divForca);
  divJogoForca.appendChild(divLetras);
  Container.style.width = "60%";
  Titulos.textContent = "Jogo Da Forca";
  criarTraçados();
}
