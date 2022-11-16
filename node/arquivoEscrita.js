const fs = require('fs')

const produtos = {
    nome: 'Celular',
    preco: '1999',
    desconto:  '0.15'
}

// Cria um arquivo 

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produtos), err => {
    console.log(err || 'Arquivo Salvo')
})