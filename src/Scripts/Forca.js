import { Container, Titulos } from "./Script.js";
import { WordsForca } from "./WordsForcaScript.js";
import { DetectPhone } from './TesteDispositivo.js';

export function InicioJogo() {
  DetectPhone();
  var Alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  Titulos.style = "font-size:380%";
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
    CriarCorpo();
    var palavra = SortearLetra();
    let indexfinal = 0;
    for (let i = 0; i < palavra[0].length; i++) {
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
    const Corpo = document.querySelectorAll("canvas");
    console.log(Corpo.length);

    for (let index = 0; index < Letras.length; index++) {
      Letras[index].addEventListener("click", () => {
        divLetras.removeChild(Letras[index]);
        if (palavra[0].search(Letras[index].innerHTML) === -1) {
          Corpo[indexfinal].style.visibility = "visible";
          indexfinal++;
          if (Corpo[5].style.visibility == "visible") {
            console.log("Voçe Perdeu!");
            ReinicarForca();
          }
        } else {
          for (let i = 0; i < palavra[0].length; i++) {
            if (palavra[0][i] == Letras[index].innerHTML) {
              Caracters[i].textContent = palavra[1][i];
              TestePalavra--;
            }
          }
        }
        if (TestePalavra == 0) {
          Vencedor();
        }
        function ReinicarForca() {
          Container.removeChild(divContexto);
          Container.removeChild(divJogoForca);
          var botaoReiniciar = document.createElement("div");
          botaoReiniciar.setAttribute("class", "BntSeletores");
          botaoReiniciar.style.width = "70%";
          botaoReiniciar.innerHTML =
            "<p class=" + "TitleJogos" + ">Recomeçar<p/>";
          Container.appendChild(botaoReiniciar);
          Container.style ="justify-content:center;align-items:center";
          Titulos.style = "font-size:230%;";
          Titulos.textContent = "Game Over\nPalavra:\n\n" + palavra[1];
          botaoReiniciar.addEventListener("click", () => {
            Container.removeChild(botaoReiniciar);
            InicioJogo();
          });
        }
      });
    }
  }
  function SortearLetra() {
    let index2 = Math.floor(
      Math.random() * WordsForca[index1].Words.length
    );
    let palavra = WordsForca[index1].Words[index2].toUpperCase();
    var semAcento = palavra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return [semAcento,palavra];
  }

  function CriarCorpo() {
    for (let i = 0; i < 6; i++) {
      var Canvas1 = document.createElement("canvas");
      Canvas1.setAttribute("class", "Canva" + i);
      divCorpo.appendChild(Canvas1);
    }
    var DivTronco = document.createElement("div");
    var DivPernas = document.createElement("div");
    divCorpo.appendChild(DivTronco);
    divCorpo.appendChild(DivPernas);
    DivTronco.setAttribute("class", "DivTronco");
    DivPernas.setAttribute("class", "DivPernas");
    DivTronco.appendChild(document.querySelector(".Canva1"));
    DivTronco.appendChild(document.querySelector(".Canva2"));
    DivTronco.appendChild(document.querySelector(".Canva3"));
    DivPernas.appendChild(document.querySelector(".Canva4"));
    DivPernas.appendChild(document.querySelector(".Canva5"));
  }
  function Vencedor() {
    Container.removeChild(divContexto);
    Container.removeChild(divJogoForca);
    var botaoReiniciar = document.createElement("div");
    botaoReiniciar.setAttribute("class", "BntSeletores");
    botaoReiniciar.style.width = "70%";
    botaoReiniciar.innerHTML = "<p class=" + "TitleJogos" + ">Recomeçar<p/>";
    Container.appendChild(botaoReiniciar);
    Container.style = "justify-content:center;align-items:center";
    Titulos.textContent = "GANHADOR";
    botaoReiniciar.addEventListener("click", () => {
      Container.removeChild(botaoReiniciar);
      InicioJogo();
    });
  }
  console.log("Jogo Da Forca");
  Container.appendChild(divContexto);
  Container.appendChild(divJogoForca);
  divJogoForca.appendChild(divForca);
  divJogoForca.appendChild(divLetras);
  Titulos.textContent = "Jogo Da Forca";
  criarTraçados();
}