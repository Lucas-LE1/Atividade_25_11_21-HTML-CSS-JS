import { InicioJogo} from "./Forca.js";

var Jogos = ["Forca"];

var body = document.querySelector("body");
body.style.height = window.innerHeight;
body.style.width = window.innerWidth;

export var Container = document.createElement("div");
Container.setAttribute("class", "Container");

export var Titulos = document.querySelector(".Titulos");
body.appendChild(Container) && Container.appendChild(Titulos);

for (let i = 0; i < Jogos.length; i++) {
  var BntSeletores = document.createElement("div");
  BntSeletores.setAttribute("class", "BntSeletores");

  var TitleJogos = document.createElement("p");
  TitleJogos.setAttribute("class", "TitleJogos");
  Container.appendChild(BntSeletores) && BntSeletores.appendChild(TitleJogos);
  TitleJogos.textContent = Jogos[i];
}
const bnts = document.querySelectorAll("div.BntSeletores");

for (let i = 0; i < bnts.length; i++) {
  bnts[i].onclick = () => {
    switch (i) {
      case 0:
        InicioJogo();
        break;
    }
    for (let i = 0; i < bnts.length; i++) {
      Container.removeChild(bnts[i]);
    }
  };
}


