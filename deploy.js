const http=require('http')
const fs=require('fs')
const port= process.env.PORT || 5000 // 5000 is the set port for local denouement

const handle=(fileName,statusCode,req,res)=>{   //we write req and res as user might give custom command
     fs.readFile(fileName,(err,data)=>
     {
         if(err)
         {   
             res.writeHead(500,{'Content-Type':'text/plain'})
             res.end("page not found")
         }
         res.writeHead(statusCode,{'content-type':'text/html'})
         res.end(data)
     })
}
const myServer=http.createServer((req,res)=>{
   if(req.url==='/')
   {
     handle('home.html',200,req,res);
   }

   else if(req.url==='/about')
    {
      handle('about.html',200,req,res); //req and res are objects
    }

    else if(req.url==='/contact')
        {
          handle('contact.html',200,req,res);
        }

    else
    {
       res.end("404 not found")  // donot write console.log as it is response based
    }

});

myServer.listen(port,()=>{
    console.log(`Server running at:http://localhost:${port}/`) 
})