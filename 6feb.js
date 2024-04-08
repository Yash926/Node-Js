// the promise is created with a function takes 2 arguments:resolve and reject
// resolve function is called if the asynchronous opr is successful

// let mypromise = new Promise((myResolve,myReject)=>{
//     myResolve();     //producing code
// })
// console.log(mypromise);
// let mypromise = new Promise((myResolve,myReject)=>{
//     myReject();     //producing code
// })
// console.log(mypromise);

// mypromise.then(()=>{            //consuming code
//     console.log('success');
// }).catch(()=>{
//     console.log('failed');
// })

// http request

// creating server and url requesting

// const http=require('http');  //core module

// function rqLister(req,res){
    // console.log(req);
    // process.exit();
    // }
    // const server=http.createServer(rqLister);
    // server.listen(3000);
    
// const http=require('http');  
// const server=http.createServer((req,res)=>{
// res.setHeader('Content-type','text/html');
// res.write('<html>')
// res.write('<head><title>Yash</title></head>')
// res.write('<body><h1>Welcome to Lovely Professional University</h1></body>')
// res.write('</html>')
// res.end();
// });
// server.listen(3000);

// ROuting Request

const http=require('http');
const server=http.createServer((req,res)=>{

    const url=req.url;
    if(url==='/'){          // '/' denotes root url
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>Enter the name</title></head>');
        res.write('<body><form action="/message" method="Post"><input type name="message"><input type="submit"value="send"></form></body> ')
        res.write('</html>')
        return res.end();
    }
    
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Yash</title></head>');
    res.write('<body><h1>WELCOME TO MY WORLD</h1></body>');
    res.write('</html>');
    res.end();
    

});
server.listen(3000);






