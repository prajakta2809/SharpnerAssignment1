const fs=require('fs');

const  requestHAndler = (req,res)=>{
  const url=req.url;
  const method=req.method;
    if(url==='/'){
        fs.readFile("message.txt",{encoding:"utf-8"},(err,data)=>{
            if(err){
                console.log(err);
            }
            console.log('data from file'+data);
            res.write('<html>');
            res.write('<head>');
            res.write(`<body>${data}</body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="msg"><button type="submit">submit</button></form><body>');
            res.write('</head>');
            res.write('</html>');
            // res.write("<html>");
            // res.write("<head><title>Enter</title></head>")
            // res.write(`<body>${data}</body>`);
            // res.write('<body><form action="/message" method="POST"><input type="text" name="msg"><button type="submit">submit</button></form><body>');
            // res.write("</html>");
            return res.end();
            
        });
        
     }
    // if(url==='/home'){
    //     res.write('<html>');
    //     res.write('<head>');
    //     res.write('<h1>Welcome Home</h1>');
    //     res.write('</head>');
    //     res.write('</html>');
    //     return res.end();
    // }
    // if(url==='/about'){
    //     res.write('<html>');
    //     res.write('<head>');
    //     res.write('<h1>Welcome to About Us page</h1>');
    //     res.write('</head>');
    //     res.write('</html>');
    //     return res.end();
    // }
    // if(url==='/node'){
    //     res.write('<html>');
    //     res.write('<head>');
    //     res.write('<h1>welocme to my nodejs project</h1>');
    //     res.write('</head>');
    //     res.write('</html>');
    //     return res.end();
    // }
    else if(url==='/message' && method==='POST'){
        const body=[];
         req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
         });
         req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            console.log(parsedBody);
            const msg=parsedBody.split('=')[1];
            fs.writeFile('message.txt',msg,(err)=>{
                if(err){
                    console.log(err);
                }
                console.log(`inside fs.write`);
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });
         });
       
        
    
    }else{
        res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('<h1>Hello</h1>');
    res.write('</head>');
    res.write('</html>');
    res.end();
    }
    

};

//module.exports = requestHAndler;

// module.exports={
//     handler:requestHAndler,
//     someText:'Some text'
// }

// module.exports.handler=requestHAndler;
// module.exports.someText='Some hard coded text';

