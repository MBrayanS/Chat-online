async function requisicaoPost( rota, dados ) {
    const init = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados),
    }

    const requisicao = await fetch(rota, init)
    
    if( requisicao.ok ) return true

    const erro = await requisicao.json()
    
    alert(erro.message)

    throw erro
}