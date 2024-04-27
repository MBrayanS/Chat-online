const formulario = document.querySelector('form')

formulario.addEventListener('submit', coletarDados)

function coletarDados( evento ) {
    evento.preventDefault()

    const { nomeInput, chaveInput, senhaInput, confirmarSenhaInput } = formulario
    const asSenhasSaoDiferentes = senhaInput.value !== confirmarSenhaInput.value

    if( asSenhasSaoDiferentes ) return alert('As senhas devem ser iguais!')

    const dadosDoFormulario = {
        nome: nomeInput.value,
        chave: chaveInput.value,
        senha: senhaInput.value
    }

    requisicaoPost('/api/cadastrar', dadosDoFormulario)
    .then( () => window.location.href = '/' )
}