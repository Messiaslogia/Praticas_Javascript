const express = require('express')
const app = express()

app.use('/opa', (req, res, next) => {
    console.log('Antes...')
    next()
})

app.use('/opa', (req, res, next) => {
    // res.send('Estou Mal')
    console.log('Durante...')
    res.json({
        data: [
            { id: 7, name: 'Ana', position: 1 },
            { id: 34, name: 'Bia', position: 2 },
            { id: 7, name: 'Carlos', position: 3 }
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
    next()

    // res.json({
    //     name: 'iPad 32Gb',
    //     price: 1899.00,
    //     discount: 0.12
    // })

    // res.send('<h1>Estou bem!</h1><br><br><h2>Tipo é HTML!</h2>')
})

app.use('/opa', (req, res, next) => {
    console.log('Depois...')
    next()
})

app.listen(3001, () => {
    console.log("Executando 2...")
})