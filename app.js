const express = require('express')
const app = express()

app.use(express.static('public')) // use the public folder
app.set('views', 'views') // setting the template engine
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render('home-guest')
})




app.listen(3000)