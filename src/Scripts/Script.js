var body = document.querySelector('body');

var ContainerSeletor = document.createElement('div');
ContainerSeletor.setAttribute('class','ContainerSeletor');
body.appendChild(ContainerSeletor);

var TituloSeletor = document.createElement('h1');
TituloSeletor.setAttribute('class','TituloSeletor');
TituloSeletor.textContent = 'Seleção De Jogos';
ContainerSeletor.appendChild(TituloSeletor);

