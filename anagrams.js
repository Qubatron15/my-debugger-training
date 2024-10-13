// const randomized = realNames.map(name => name.replace(' ', '').toLowerCase().split('').sort(function(){return 0.5-Math.random()}).join(''))

const realNames = new Set([
    'Weronika',
    'Agata',
    'Jakub',
    'Mateusz',
    'Natalia',
    'Arnold'
]);

const realSurnames = new Set([
    'Sowa',
    'Fąk',
    'Patecki',
    'Trąbka',
    'Kaczmarczyk'
]);


const lettersRandomized = [
    'skwearoownia',
    'woiśrnwaikiekls',
    'aągaktaf',
    'puitkkbaacej',
    'tmarazsutkeąb',
    'zinyralactaaakczmk',
    'aioołzyawtsmzd',
    'srgegzemriońwiiuz',
    'woamesrztuskyazżikn',
    'rzóieuriggksss'
];


const anagrams = new Set([
    "Kafa Taag",
    "Kasia Wronowe",
    "Jakub Kaciętp",
    "Bartek Szamuta",
    "Katarzyna Kicla Macz"
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
    for (let fakeName of anagrams) {
        const fakeNameNormalised = fakeName
            .replaceAll(' ', '')
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .split('')
            .sort()
            .join('');

            console.log('fakeNameNormalised', fakeNameNormalised);

        for (let realName of realNames) {
            for (let realSurname of realSurnames) {
                const combinationToTry = `${realName} ${realSurname}`;

                const realNameNormalised = combinationToTry
                    .replaceAll(' ', '')
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .split('')
                    .sort()
                    .join('');

                if (fakeNameNormalised === realNameNormalised) {
                    // console.log(`${fakeName} is ${combinationToTry} // ${fakeNameNormalised}`);
                    anagrams.delete(fakeName);
                    realNames.delete(realName);
                    realSurnames.delete(realSurname);
                }
            }
        }
    }
}

// checkChatGPT();
checkAnagrams();