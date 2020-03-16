var agora = new Date
var hora = agora.getTime()
console.log(`Agora são exatamente: ${hora}`)
if (hora > 6 && hora < 12) {
    console.log('Bom dia!')
} else if (hora > 6 && hora < 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}