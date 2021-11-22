import { JogoForca0 } from "./Forca.js";

var Jogos = ["Forca", 2, 3, 4];

var body = document.querySelector("body");

var ContainerSeletor = document.createElement("div");
ContainerSeletor.setAttribute("class", "ContainerSeletor");
body.appendChild(ContainerSeletor);

var TituloSeletor = document.createElement("h1");
TituloSeletor.setAttribute("class", "TituloSeletor");
TituloSeletor.textContent = "Seleção De Jogos";
ContainerSeletor.appendChild(TituloSeletor);

for (let i = 0; i < Jogos.length; i++) {
  var BntSeletores = document.createElement("button");
  BntSeletores.setAttribute("class", "BntSeletores");
  ContainerSeletor.appendChild(BntSeletores);

  var TitleJogos = document.createElement("p");
  TitleJogos.setAttribute("class", "TitleJogos");
  BntSeletores.appendChild(TitleJogos);
  TitleJogos.textContent = Jogos[i];
}
const bnts = document.querySelectorAll("button.BntSeletores");

bnts[0].onclick = () => {
  JogoForca0();
};
