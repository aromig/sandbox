function catYears(age) {
    return age === 1 ? 15
         : age === 2 ? 24
         : 24 + (age - 2) * 4;
}

const name = 'Moonpie';
const age = 10;
const sentence = `My ${age} year old cat, ${name}, is ${catYears(age)} years old in cat years.`;

//console.log(sentence);

let cats = [
    { name: 'Mango', mood: 'lazy' },
    { name: 'Moonpie', mood: 'hungry' },
    { name: 'Macaroon', mood: 'hyper' }
];

var html = `
    <ul>
    ${cats.map(cat => `<li>${cat.name} is a ${cat.mood} cat.</li>`).join('')}
    </ul>
`;

//console.log(html);

const song = {
    name: 'Where is the Love?',
    artist: 'The Black Eyed Peas',
    year: 2003,
    featuring: 'Justin Timberlake'
}

const title = `<p>${song.name} (${song.year}) - ${song.artist} ${song.featuring ? `(Feat ${song.featuring})` : null}</p>`;

//console.log(title);

let names = ['jake', 'ben', 'abi', 'nick'];
let fullnames = names.map(name => `${name} romig`);
//console.log(fullnames);

let fullNames = names.map(name => ({ first: name, last: 'romig' }));
//console.log(fullNames);

let a = 1234;
let b = 5678;

// console.log(a, b);

[a, b] = [b, a];

// console.log(a, b);

function convertCurrency(amount) {
    const converted = {
        EUR: amount * 0.8071,
        GBP: amount * 0.7205,
        CAD: amount * 1.296,
        JPY: amount * 105.99,
        PHP: amount * 52.05
    };
    return converted;
}

const { EUR, CAD, JPY, PHP } = convertCurrency(100);
//console.log(EUR, CAD, JPY, PHP);

// console.log("hello world".endsWith("hello", 5))
// console.log("hello world".endsWith("world"))

