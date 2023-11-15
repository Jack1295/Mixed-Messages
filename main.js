// random number generator
function generateRand(num) {
    return Math.floor(Math.random() * num);
}

// function to get emojis based on Pokémon names
function getEmoji(pokeName) {
    switch (pokeName) {
        case 'Weedle':
            return '🐛';
        case 'Snorlax':
            return '😴';
        case 'Oddish':
            return '🍃';
        case 'Zigzagoon':
            return '🦝';
        case 'Metapod':
            return '🐛';
        case 'Growlith':
            return '🔥';
        case 'Geodude':
            return '💪';
        case 'Squirtle':
            return '💧';
        case 'Rattata':
            return '🐭';
        case 'Pidgy':
            return '🐦';
        case 'Ekans':
            return '🐍';
        case 'Sandshrew':
            return '🦔';
        case 'Cubone':
            return '🦴';
        default:
            return '';
    }
}

// function to get emojis based on Pokémon outcomes
function getOutcomeEmoji(outcome) {
    switch (outcome) {
        case 'you win!...but your Pokémon is badly hurt':
            return '🏆😢';
        case 'your Opponent flees before you can attack':
            return '🏃‍♂️💨';
        case 'you run away scared.. BWARK BWARK BWARK':
            return '😱🏃‍♂️';
        case 'because you used the rare candy cheat, your Pokémon is a too high level to do your dirty work.. it wonders off to find some berries':
            return '🍬';
        default:
            return 'hmmm nothing much seems to be happening';
    }
}

const collectivePoke = {
    pokeOpp: ['Weedle', 'Snorlax', 'Oddish', 'Zigzagoon', 'Metapod', 'Growlith'],
    ourPoke: ['Geodude', 'Squirtle', 'Rattata', 'Pidgy', 'Ekans', 'Sandshrew', 'Cubone'],
    pokeOutcome: [
        'you win!...but your Pokémon is badly hurt',
        'your Opponent flees before you can attack',
        'you run away scared.. BWARK BWARK BWARK',
        'because you used the rare candy cheat, your Pokémon is a too high level to do your dirty work.. it wonders off to find some berries'
    ]
};

// empty array to store our battle sequence
let personalBattle = [];

// for loop to iterate through the object
for (let prop in collectivePoke) {
    let optionIdx = generateRand(collectivePoke[prop].length);

    switch (prop) {
        case 'pokeOpp':
            personalBattle.push(`While taking a shortcut through long grass a ${collectivePoke[prop][optionIdx]} ${getEmoji(collectivePoke[prop][optionIdx])} appears!`);
            break;
        case 'ourPoke':
            personalBattle.push(`You panic and throw the first Pokéball you find in your backpack... you choose ${collectivePoke[prop][optionIdx]} ${getEmoji(collectivePoke[prop][optionIdx])}!`);
            break;
        case 'pokeOutcome':
            personalBattle.push(`A battle breaks out and... ${collectivePoke[prop][optionIdx]} ${getOutcomeEmoji(collectivePoke[prop][optionIdx])}`);
            break;
        default:
            personalBattle.push('Hmm, not much seems to be happening');
    }
}

function formatBattle(battle) {
    const formatted = personalBattle.join('\n');
    console.log(formatted);
}

formatBattle(personalBattle);