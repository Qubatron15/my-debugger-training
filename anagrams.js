// const randomized = realNames.map(name => name.replace(' ', '').toLowerCase().split('').sort(function(){return 0.5-Math.random()}).join(''))

const realGivenNames = [
    'Weronika',
    'Agata',
    'Jakub',
    'Mateusz',
];

const realSurnames = [
    'Sowa',
    'Fąk',
    'Patecki',
    'Trąbka',
];


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


const anagrams = [
    "Kafa Taag",
    "Kasia Wronowe",
    "Jakub Kaciętp",
    "Bartek Szamuta",
  ];


function checkChatGPT() {
    for (let i in anagrams) {
        const lettersArray = anagrams[i].replace(' ', '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split('');
        let result = lettersRandomized[i].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        lettersArray.forEach(letter => result = result.replace(letter, ''));

        console.log(`${anagrams[i]}: ${result}`);
    }
}


function checkAnagrams() {
    for (let fakeName of anagrams) {
        const fakeNameNormalised = fakeName
            .replace(' ', '')
            .toLowerCase()
            // .normalize("NFD")
            // .replace(/[\u0300-\u036f]/g, "")
            .split('')
            .sort()
            .join('');

        for (let realGiven of realGivenNames) {
            for (let realSurname of realSurnames) {
                const combinationToTry = `${realGiven} ${realSurname}`;

                const realNameNormalised = combinationToTry
                    .replace(' ', '')
                    .toLowerCase()
                    // .normalize("NFD")
                    // .replace(/[\u0300-\u036f]/g, "")
                    .split('')
                    .sort()
                    .join('');

                if (fakeNameNormalised === realNameNormalised) {
                    console.log(`${fakeName} is ${combinationToTry} // ${fakeNameNormalised}`);
                }
            }
        }
    }
}

// checkChatGPT();
checkAnagrams();