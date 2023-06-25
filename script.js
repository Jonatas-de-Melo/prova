window.onload = function() {
  var paises = ['Brasil', 'Estados Unidos', 'França', 'Japão', 'Itália', 'Espanha', 'Austrália', 'Canadá', 'México', 'Argentina'];
  var listaPaises = document.getElementById('litasPaises');
  var saudacao = document.getElementById('saudacao');

  paises.forEach(function(pais) {
    var itemLista = document.createElement('li');
    var btnMarcar = document.createElement('button');
    btnMarcar.textContent = pais;
    btnMarcar.addEventListener('click', function() {
      this.classList.toggle('visitado');
    });
    itemLista.appendChild(btnMarcar);
    listaPaises.appendChild(itemLista);
  });

 

  var nomeUsuario = prompt('Digite seu nome?');

  var horarioAtual = new Date();
  var horaAtual = horarioAtual.getHours();
  var mensagemSaudacao;

  alert('click no pais que voce deseja conhecer!');

  if (horaAtual < 12) {
    mensagemSaudacao = 'Bom dia';
  } else if (horaAtual < 18) {
    mensagemSaudacao = 'Boa tarde';
  } else {
    mensagemSaudacao = 'Boa noite';
  }

  saudacao.textContent = mensagemSaudacao + ', ' + nomeUsuario;

  document.title = mensagemSaudacao + ', ' + nomeUsuario;

  var botaoEmail = document.createElement('a');
  botaoEmail.href = 'mailto:jonatasmelo511@gmail.com';
  botaoEmail.textContent = 'Enviar email';
  botaoEmail.classList.add('email-button');
  document.body.appendChild(botaoEmail);
};
