const formulario = document.getElementById('form-atividade')

let linhas = '' // o que sera exibido no corpo da tabela

formulario.addEventListener('submit',function (e) // Todas as variaveis dentro do 
{                                                 // escopo da evento 'addEventListener'
    e.preventDefault()                            // são resetados do vez que o 
                                                  // evento é acionado 
    const nome = document.getElementById('nome')   
    const tel = document.getElementById('telefone') 
    
    let linha = '<tr>'
    linha = linha + `<td>${nome.value}</td>`
    linha = linha + `<td>${tel.value}</td>`

    linhas = linhas + linha

    let corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas // função que exibira o conteudo no
                                   // navegador
   // alert(`Nome:  ${nome.value}   Telefone: ${tel.value}`)  

})