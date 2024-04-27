const formulario = document.querySelector('form')

formulario.addEventListener('submit', coletarDadosDeLogin)

function coletarDadosDeLogin( evento ) {
    evento.preventDefault()

    const { chaveInput, senhaInput } = formulario

    const dadosDoFormulario = {
        chave: chaveInput.value,
        senha: senhaInput.value,
    }

    requisicaoPost('/api/logar', dadosDoFormulario)
        .then( () => window.location.href = '/' )
}