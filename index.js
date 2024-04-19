const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json())

const users = [
    {id: 1, name: 'Rakib', email: 'rakib@gmail.com'},
    {id: 2, name: 'Nowen', email: 'nowen@gmail.com'},
    {id: 3, name: 'Asad', email: 'asad@gmail.com'},
    {id: 4, name: 'Mahfuz', email: 'mahfuz@gmail.com'},
    {id: 4, name: 'Nohas', email: 'nohas@gmail.com'},
    {id: 4, name: 'Masud', email: 'masud@gmail.com'},
]
app.get('/', (req, res)=>{
    res.send('Hello Bangladesh')
})

app.get('/users', (req, res) =>{
    res.send(users);
})

app.post('/users', (req, res) =>{
    console.log('Post api hitting')
    console.log(req.body)
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, ()=>{
    console.log(`This is my second project of back end ${port}`)
})