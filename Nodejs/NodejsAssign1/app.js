const http = require('http');

const server=http.createServer((req,res)=>{
    //console.log(req.url,req.headers);
    const url=req.url;
    if(url==='/'){
        res.write('<html>');
        res.write('<head>');
        res.write('<h1>Home Page</h1>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="msg"><button type="submit"></button></form><body>');
        res.write('</head>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/home'){
        res.write('<html>');
        res.write('<head>');
        res.write('<h1>Welcome Home</h1>');
        res.write('</head>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/about'){
        res.write('<html>');
        res.write('<head>');
        res.write('<h1>Welcome to About Us page</h1>');
        res.write('</head>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/node'){
        res.write('<html>');
        res.write('<head>');
        res.write('<h1>welocme to my nodejs project</h1>');
        res.write('</head>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('<h1>Hello</h1>');
    res.write('</head>');
    res.write('</html>');
    res.end();
});


server.listen(4000);