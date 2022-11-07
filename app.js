const express = require('express')
const app = express()
const port = 3000

app.get('/saludo/nombre/:nombre/apellido/:apellido',(req,res) => {
    res.json({
        msg: `Hola, ${req.params.nombre} ${req.params.apellido}`
    })
}) 

app.get('/dividir/:dividendo/:divisor',(req,res) => {
    
    let dividendo = Number(req.params.dividendo)
    let divisor = Number(req.params.divisor)
    let resultado = dividendo / divisor

    if (divisor == 0) {
        res.json({
            error: "no se puede dividir por cero"
        })
    } else {
        res.json({
        resultado: `${resultado}`
        })
    }
})

app.get('/suma/:num1/:num2',(req,res) => {
    
    let num1 = Number(req.params.num1)
    let num2 = Number(req.params.num2)
    let resultado = num1 + num2

    if (resultado < 0) {
        res.json({
            msg: "No se puede enviar el resultado"
        })
    } else {
        res.json({
        resultado: `${resultado}`
        })
    }
}) 

app.get('/acceso',(req,res) => {
    
    let num = Number(req.query.num)

    if(num % 2 != 0 || num == 0) {
        res.send("No autorizado")
    } else {
        res.send("Autorizado")
    }
})

app.get('/lista-de-compras',(req,res) => {
    
    res.json({
        producto1: req.query.producto1,
        producto2: req.query.producto2,
        producto3: req.query.producto3,
        producto4: req.query.producto4,
        producto5: req.query.producto5,
    })
})


app.listen(port, () => {
    console.log(`Listening del puerto ${port}`)
})