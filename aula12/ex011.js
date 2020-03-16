var idade = 15
if(idade < 16){
    console.log(`Não vota`)
} else {
    if(idade < 18 || idade > 65){ //Condição Aninhada!
        console.log(`Voto opcional`)
    } else {
        console.log(`Voto obrigatório`)
    }
}

// Sinaxe Reduzida //
// if(idade < 16){
//     console.log(`Não vota`)
// } else if(idade < 18 || idade > 65){ //Condição Aninhada!
//     console.log(`Voto opcional`)
// } else {
//     console.log(`Voto obrigatório`)
// }