const express = require('express')
let hbs = require('hbs');
require('./views/hbs/helpers/helpers')
const app = express()

let port = process.env.PORT || 3000

app.use(express.static( __dirname + '/public'))
hbs.registerPartials( __dirname + '/views/partials',  );
app.set('view engine', 'hbs')

app.get('/',  (req, res) => {
  res.render('home',{
    nombre : 'diginho'
  })
})

app.get('/about',  (req, res) => {

  res.render('about',{
  })
})

 
app.listen(port,()=>{
  console.log(`escuchando peticiones en el puerto ${port}`)
})