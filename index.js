const express = require('express');

// for middleware
const cors= require('cors');
const app = express();

app.use(cors());
app.use(express.json());


const port= process.env.PORT || 5000;


app.get('/',(req,res)=>{
    res.send("WOW,Hello,my second and node!");
});

const users= [
    {id:0, name: "rahul", email: 'rahul@gmail.com', phoneNumber:'01775675786'},
    {id:1, name: "shanto", email: 'shanto@gmail.com', phoneNumber:'01775675786'},
    {id:2, name: "jarif", email: 'jarif@gmail.com', phoneNumber:'01775675786'},
    {id:3, name: "sakib", email: 'sakib@gmail.com', phoneNumber:'01775675786'},
    {id:4, name: "nibras", email: 'nibras@gmail.com', phoneNumber:'01775675786'},
    {id:5, name: "tusher", email: 'tusher@gmail.com', phoneNumber:'01775675786'}
    
]


app.get('/users',(req,res)=>{
    // to see the output on the cmd we will find as an object
    // console.log(req.query);
     const search= req.query.search;
    if(search){
        // keyword converted to lowercase first then inclused the search word
   const searchResult= users.filter(user=>user.name.toLowerCase().
   includes(search));
   res.send(searchResult);
    }
    else{
        res.send(users);
    }

    
});

// app.METHOD
app.post('/users',(req,res)=>{
    const newUser= req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post',req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})


// dynamic api call

app.get('/users/:id',(req,res)=>{
    const id =req.params.id;
    const user=users[id];
   res.send(user);
})

app.get('/fruits/mangos/fazli',(req,res)=>{
    res.send('Yum Mangos');
})

app.get('/fruits', (req,res)=>{
    res.send(['mango','oranges','apple']);
})

app.listen(port,()=>{
    console.log("Listening to port",port);
})
 