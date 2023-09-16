
const http = require('http');
const express =require('express');
const bodyParser=require('body-parser');
const fs = require('fs');

const app=express();
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.json());

var user;

app.get('/login', (req, res, next) => {
    res.send(`
        <html>
        <head>
            <title>Login Page</title>
        </head>
        <body>
            <form action="/login" method="POST">
                Username:<input type="text" name="username">
                <button type="submit">Login</button>
            </form>
            <script>
                document.querySelector('form').addEventListener('submit', function (event) {
                    event.preventDefault();
                    const username = document.querySelector('input[name="username"]').value;
                    localStorage.setItem('username', username);
                    window.location.href = '/';
                });
                
   
            </script>
        </body>
        </html>
    `);
});



app.post('/login',(req,res,next)=>{
 
    const username = req.body.username;
    res.redirect('/');
})


app.get('/',(req,res,next)=>{
    fs.readFile('messages.txt', 'utf8', (err, data) => {
        console.log(data);
      
    res.send(`
    <html>
    <head>
    </head>
    <body>
        <form action="/" method="POST">
            <p>${data}</p>
            Type<input type="text" name="msg">
            <button id="sendData" type="submit">send</button>
        </form>
    </body>
    <script>
    document.getElementById('sendData').addEventListener('click', () => {
        const data = localStorage.getItem('username'); // Replace with your actual data key
  
        fetch('/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data }),
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result.message);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      });
    </script>
    </html>
`);


});
});


app.post('/data',(req,res,next)=>{
    user=req.body.data;
   // console.log(user);
    
    res.redirect('/');
  });
  


app.post('/',(req,res,next)=>{
    
  //  console.log(req.body.msg);
    const msg=req.body.msg;
    fs.appendFile('messages.txt', `"${user}": "${msg}"\n`, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Message saved to file.');
        }
      });
    
    
    res.redirect('/');
  });



app.listen(4000);