
const express = require('express');
const morgan = require('morgan')
const app = express()
const dbConnection = require('./Config/db')
const userModel = require('./Models/user')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("Public"))
app.set("view engine",'ejs')


app.get('/get-form-data', (req,res) =>{
    console.log(req.body);
   res.send('request data')
    
})
app.get('/register', (req,res) =>{
   
    res.render('register')
  
    
})
app.post('/register', async (req,res)=>{
    const {username, email, password} = req.body
   const newUser =  await userModel.create({
        username: username,
        email: email,
        password: password
    })
    res.send(newUser)
    
})

app.get('/get-users',(req, res)=>{
    userModel.find({
        username: 'b'
    }).then((users) =>{
        res.send(users)
        console.log(users);
        
    })
    
    
})
  
app.listen(3000)



