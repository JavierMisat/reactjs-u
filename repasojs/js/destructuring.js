//Destructuring  objects

const aprendiendoJS = {
    version: {
        nueva: 'ES6+',
        anterior: 'ES5'
    },
    frameworks:['React', 'VUE', 'AngularJS']
};

/**
 * Destructuring is extract values to the object
 */

console.log(aprendiendoJS);

//Extraer un valor del objeto
let {version, frameworks} = aprendiendoJS;
let {nueva, anterior} = version;
console.log(nueva, anterior);