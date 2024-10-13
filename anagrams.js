// const randomized = realNames.map(name => name.replace(' ', '').toLowerCase().split('').sort(function(){return 0.5-Math.random()}).join(''))

const realGivenNames = [
    'Weronika',
    'Karol',
    'Agata',
    'Jakub',
    'Mateusz',
    'Natalia',
    'Tomasz',
    'Remigiusz',
    'Mateusz',
    'Sergiusz'
];

const realSurnames = [
    'Sowa',
    'Wiśniewski',
    'Fąk',
    'Patecki',
    'Trąbka',
    'Kaczmarczyk',
    'Działowy',
    'Wierzgoń',
    'Krzyżanowski',
    'Górski'
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
    "Ania Woskrewo",          // skwearoownia (12 liter)
    "Wikal Irenosławsik",        // woiśrnwaikiekls (15 liter)
    "Kafa Agat",              // aągaktaf (8 liter)
    "Bajka Kupcięt",          // puitkkbaacej (12 liter)
    "Marta Bużkaste",        // tmarazsutkeąb (13 liter)
    "Kaczy Znalika Matarc",    // zinyralactaaakczmk (19 liter)
    "Zosia Dławazotym",        // aioołzyawtsmzd (14 liter)
    "Ziemig Urewizgrońs",        // srgegzemriońwiiuz (18 liter)
    "Zamieszy Krukwotsazn",      // woamesrztuskyazżikn (20 liter)
    "Grzesik Rógsuis"          // rzóieuriggksss (14 liter)
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
        const fakeNameNormalised = fakeName.replace(' ', '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split('').sort().join('');
        // console.log(fakeNameNormalised);

        for (let realGiven of realGivenNames) {
            for (let realSurname of realSurnames) {
                const combinationToTry = `${realGiven} ${realSurname}`.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

                const realNameNormalised = combinationToTry.replace(' ', '').toLowerCase().split('').sort().join('');

                if (fakeNameNormalised === realNameNormalised) {
                    console.log(`${fakeName} is ${combinationToTry}`);
                }
            }
        }
    }
}

checkAnagrams();