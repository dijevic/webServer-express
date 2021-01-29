
let texto = 'hola loca'

let palabras = texto.split(' ')

palabras.forEach((palabra,index)=>{
    palabra[index] = palabra[0].charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    
    
    palabras.join(' ')
 console.log(palabras)
  
})
 console.log(palabras)
