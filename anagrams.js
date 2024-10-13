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

'skwearoownia',
'woiśrnwaikiekls',
'puitkkbaacej',
'tmarazsutkeąb',
'zinyralactaaakczmk',
'aioołzyawtsmzd',
'srgegzemriońwiiuz',
'woamesrztuskyazżikn',
'rzóieuriggksss'


const anagrams = [
    "Kafa Taag",             // aągaktaf (8 liter)
    "Kasia Wronowe",         // skwearoownia (12 liter)
    "Wiesław Kiornie",       // woiśrnwaikiekls (15 liter)
    "Jakub Tacięk",          // puitkkbaacej (12 liter)
    "Marta Kazusęt",         // tmarazsutkeąb (13 liter)
    "Krzysztof Acanali",     // zinyralactaaakczmk (19 liter)
    "Zosia Małowyta",        // aioołzyawtsmzd (14 liter)
    "Mirek Zygrosien",       // srgegzemriońwiiuz (18 liter)
    "Kazimierz Ustysko",     // woamesrztuskyazżikn (20 liter)
    "Grzegorz Sukiś"         // rzóieuriggksss (14 liter)
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
                const combinationToTry = `${realGiven} ${realSurname}`;

                const realNameNormalised = combinationToTry.replace(' ', '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split('').sort().join('');

                if (fakeNameNormalised === realNameNormalised) {
                    console.log(`${fakeName} is ${combinationToTry} // ${fakeNameNormalised}`);
                }
            }
        }
    }
}

checkAnagrams();