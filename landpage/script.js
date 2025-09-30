document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const msgSucesso = document.getElementById('msg-enviada');

  if (nome && email && mensagem) {
    document.getElementById('msg-enviada').classList.remove('d-none');
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';

setTimeout(() => {
      msgSucesso.classList.add('d-none');
    }, 3000);

  } else {
    alert('Por favor, preencha todos os campos!');
  }
});
