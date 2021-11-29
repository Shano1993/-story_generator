let arrayNames = [
    'et John',
    'et Paul',
    'et Jacques',
    'et Arthur',
    'et Pierre'
];

let arrayObjects = [
    'utilise une pierre',
    'utilise un bâton',
    'utilise une chaussure',
    'utilise un ballon',
    'utilise une pioche'
];

let arrayTemperatures = [
    'avec 10°C',
    'avec 25°C',
    'avec 30°C',
    'avec 35°C',
    'avec 40°C'
];

let arrayPlaces = [
    'dans un arbre',
    'chez le voisin',
    'dans la prairie',
    'dans un château',
    'chez Jérôme'
];

let arrayVerbs = [
    'et joue',
    'et dors',
    'et mange',
    'et est',
    'et se bat'
];

let story = document.querySelector('p');
const generator = document.querySelector('button');
let randomName = arrayNames[Math.floor(Math.random() * arrayNames.length)];
let randomObject = arrayObjects[Math.floor(Math.random() * arrayObjects.length)];
let randomTemperature = arrayTemperatures[Math.floor(Math.random() * arrayTemperatures.length)];
let randomPlace = arrayPlaces[Math.floor(Math.random() * arrayPlaces.length)];
let randomVerb = arrayVerbs[Math.floor(Math.random() * arrayVerbs.length)];

function text() {
    story.innerHTML += document.querySelector('input').value + ' '
        + randomName + ' ' + randomObject + ' ' + randomTemperature + ' ' + randomVerb + ' ' + randomPlace ;
}

generator.addEventListener("click", text);




