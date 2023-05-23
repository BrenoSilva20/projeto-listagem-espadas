const boataoAlterarTema = document.getElementById('botao-alterar-tema')

const body = document.querySelector('body')

boataoAlterarTema.addEventListener('click', () => {
  const modoEscuroEstaAtivo = body.classList.contains('modo-escuro')

  body.classList.toggle('modo-escuro')

  if (modoEscuroEstaAtivo) {
  } else {
    body.classList.add('modo-escuro')
  }
})
