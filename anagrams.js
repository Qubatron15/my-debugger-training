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
    "Wania Krosowe",          // skwearoownia (12 liter)
    "Kornelia Wiśkows",       // woiśrnwaikiekls (15 liter)
    "Kafa Gata",              // aągaktaf (8 liter)
    "Baczek Jakitup",         // puitkkbaacej (12 liter)
    "Bąk Marta Tusk",         // tmarazsutkeąb (13 liter)
    "Kazimarka Czystałn",     // zinyralactaaakczmk (19 liter)
    "Marta Zawosiodł",        // aioołzyawtsmzd (14 liter)
    "Ziemi Grzegorńw",        // srgegzemriońwiiuz (18 liter)
    "Zwyczaj Komaśstir",      // woamesrztuskyazżikn (20 liter)
    "Grzegor Rusiakss"        // rzóieuriggksss (14 liter)
];


for (let i in anagrams) {
    const lettersArray = anagrams[i].replace(' ', '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split('');
    let result = lettersRandomized[i].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    lettersArray.forEach(letter => result = result.replace(letter, ''));

    console.log(`${anagrams[i]}: ${result}`);
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