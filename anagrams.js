// const randomized = realNames.map(name => name.replace(' ', '').toLowerCase().split('').sort(function(){return 0.5-Math.random()}).join(''))

const fakeNames = new Set([
    "Kafa Taag",
    "Kasia Wronowe",
    "Jakub Kaciętp",
    "Bartek Szamuta",
    "Katarzyna Kicla Macz"
]);

const realNames = new Set([
    'Weronika Sowa',
    'Agata Fąk',
    'Jakub Patecki',
    'Mateusz Trąbka',
    'Natalia Kaczmarczyk'
]);


// function checkChatGPT() {
//     for (let i in anagrams) {
//         const lettersArray = anagrams[i].replace(' ', '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split('');
//         let result = lettersRandomized[i].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

//         lettersArray.forEach(letter => result = result.replace(letter, ''));

//         console.log(`${anagrams[i]}: ${result}`);
//     }
// }

function checkAnagrams() {
    for(let fake of fakeNames) {
        for(let real of realNames) {
            if (fake === real) {
                console.log(`The ${fake} is anagram of ${real}`);
                realNames.delete(real);
                fakeNames.delete(fake);
            }
        }
    }
}

checkAnagrams();