const http = require('http');
http.createServer((req,res)=>{

    res.writeHead(200,{'content-type':'application/json'})


    let persona = {
        nombre :'diego',
        apellido : 'vielma',
        ubicacion: 'buenos aires',
        edad : 22
    }
    res.write(JSON.stringify( persona))

    res.end()
})
.listen(8080);
console.log('escuchando el puerto 8080')
