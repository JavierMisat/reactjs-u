//Metodos de arreglos

const personas = [
    {nombre: 'Juan', edad: 23, aprendiendo: 'JS'},
    {nombre: 'Javier', edad: 26, aprendiendo: 'PHP'},
    {nombre: 'Andrea', edad: 41, aprendiendo: 'Negocios'},
    {nombre: 'Alejandra', edad: 30, aprendiendo: 'REACT'},
    {nombre: 'Karen', edad: 23, aprendiendo: 'Java'},
];


//Filtrar quienes son mayores > de 28 años
const mayores28 = personas.filter(persona => {
    return persona.edad > 28;
});

//console.log(mayores28);

//Que aprende alejandra y su edad
const alejandra = personas.find(persona => {
    return persona.nombre.toLowerCase() === 'alejandra';
});

console.log(`Alejandra está aprendiendo ${alejandra.aprendiendo}`);

//Saber edad total de las personas
let total = personas.reduce((edadTotal, persona) =>{
    return  edadTotal + persona.edad;
}, 0);

//Sacar un promedio de edad
console.log(total / personas.length);