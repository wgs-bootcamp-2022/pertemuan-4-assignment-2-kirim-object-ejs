const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
    res.render('index',{
        name : "Yahya",
    })
})
app.get('/about', (req,res)=>{
    res.render('about')
})
app.get('/contact', (req,res)=>{
    cont = [
        { name : "Yahya",
          email: "Yahyaz@gmail.com"
        },
        { name : "Budi",
          email: "Budi@gmail.com"
        },        
        { name : "Zack",
          email: "Zack@gmail.com"
        },
    ]
    res.render('contact',{cont})
})

app.get('/product/:id', (req,res)=>{
    const id = req.params.id
    const category = req.query.category
    res.render('product.ejs', category)
})

app.get('/category/:id', (req,res)=>{
    res.send('category id :'+req.params.id)
})
app.get('/product/:id/:category_id', (req,res)=>{
    res.send('product id :'+req.params.id+' category id :'+req.params.category_id)
})
app.use('/', (req, res) => {
    res.status(404)
    res.send('page not found: 404')
})
app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
})