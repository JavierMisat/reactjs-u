// //Scope en javascript
// var musica = 'Rock';
//
// if(musica){
//     var musica= 'Grunge';
//     console.log(`Dentro del if ${musica}`);
// }
//
// console.log(`Fuera del if ${musica}`);

//Correccion de scope con let
let musica = 'Rock';

if(musica){
    let musica = 'Gounge';
    console.log(`Dentro del if ${musica}`);
}

console.log(`Fuera del if ${musica}`);