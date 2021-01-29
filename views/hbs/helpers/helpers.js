var hbs = require('hbs');


hbs.registerHelper('getYear',()=>{
  return new Date().getFullYear()
})
hbs.registerHelper('capitalizar', (texto) =>{

  let palabras = texto.split(' ');
  for(let i = 0; i < palabras.length; i++){
      palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase()
  }

  return palabras.join(' ')
})