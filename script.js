//First we need some arrays of names etc...
const firstNames = ['Zara', 'Tharion', 'Kira', 'Ragnor',
 'Lila', 'Nala', 'Varis', 'Mara', 'Kato', 'Elora', 'Darius', 'Sora', 'Zane', 'Fira', 'Milo',
 'Aran', 'Luna', 'Remy', 'Lyra', 'Torin'];

const lastNames = ['Moonshadow', 'Stormbringer', 'Brightflame', 'Ironfist', 'Silverleaf', 'Sunstrider', 'Nightfall', 'Swiftwind',
'Fireheart', 'Starlight', 'Blackthorn', 'Lightbringer', 'Shadowflame', 'Emberstone', 'Greenbottle', 'Silvermoon', 'Moonbeam',
'LeBeau', 'Dawnflower', 'Stormchaser'];

const greetWord = ['Hail', 'Greetings', 'Salutations', 'Well met', 'Hello', 'Good day', 'Good morrow', 'Good eve', 'Welcome', 'Farewell', 'Goodbye', 'Adieu', 'Namaste', 'Shalom', 'Aloha', 'Konnichiwa', 'Bonjour', 'Ciao', 'Hola', 'Guten Tag'];

const verbs = ["attack", "cast", "dodge", "heal", "sneak to", "explore", "persuade", "intimidate", "investigate", "loot", "craft", "trade", "rest", "travel to", "summon", "transform", "enchant", "trap", "escape with", "defend"];

const monsters = ["Beholder", "Dragon", "Lich", "Mind Flayer", "Owlbear", "Goblin", "Zombie", "Vampire", "Werewolf", "Mimic", "Gelatinous Cube", "Tarrasque", "Kraken", "Hydra", "Balor", "Rakshasa", "Medusa", "Basilisk", "Manticore", "Cyclops"];

const objects = ["Sword", "Shield", "Bow", "Arrow", "Dagger", "Axe", "Hammer", "Staff", "Wand", "Ring", "Amulet", "Potion", "Scroll", "Book", "Map", "Coin", "Gem", "Key", "Chest", "Lantern"];

//Second we create a randomize function
const randomIterate = (Array) => {
    return(Array[Math.floor(Math.random() * Array.length)]);
}

//Now we put the message together with a function
const randomMessage = () => {
    console.log(`${randomIterate(greetWord)} ${randomIterate(firstNames)} ${randomIterate(lastNames)}, ${randomIterate(verbs)} the ${randomIterate(monsters)} and ${randomIterate(verbs)} the ${randomIterate(objects)}!`);
}

//randomMessage();


//EXTENDED SCOPE SECTION

//Challenge is to create a function to create a random name like "Sassesuka Pilopa"
/* Idea to achieve that:
Create a function where we combine different syllables (up to 5 per first and last name) including double letters.
Rule is that the first character of each first and last name need to be uppercase. I could create a loop where the amount of times it should loop is defined by a randomizer.
If I restrict myself to a max of 5 syllables per name that would make a number between 2 and 10 characters.*/
const randomName = () => {
/* DISCLAIMER: I didn't want to create the function too random, otherwise the names were unreadable/unspeakble and totally silly*/
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const extraVowels = ['a', 'e', 'i', 'o', 'u'];
    
    //Random iteration no. for name creation with min of 2 character and max of 10 chars
    const randomNum = Math.floor((Math.random() * 5));
    const ranNumTwo = Math.floor((Math.random() * 5));
    
    let newFirstName = [];
    let newLastName = [];
    let completeName = [];

    //First Name-Section:
    for (let i = 0; i <= randomNum; i++){
        newFirstName.push(randomIterate(alphabet) + randomIterate(extraVowels));
    }
    
    //console.log(newFirstName);
    //This section is supposed to transform the first character to uppercase
    let firstCharUpFirst = newFirstName[0][0].toUpperCase() + newFirstName[0][1];
    newFirstName.splice(0, 1, firstCharUpFirst);
    //console.log('First Name: ' + newFirstName);
    
    //Last Name-Section:
    for (let j = 0; j <= ranNumTwo; j++){
        newLastName.push(randomIterate(alphabet) + randomIterate(extraVowels));
    }
    
    //This section is supposed to transform the first character to uppercase
    let firstCharUpLast = newLastName[0][0].toUpperCase() + newLastName[0][1];
    newLastName.splice(0, 1, firstCharUpLast);
    newLastName.join(' ');
    //console.log('Last Name: ' + newLastName);

    //Here we join the two names (and syllable arrays) together
    completeName.push(newFirstName.join('') + ' ' + newLastName.join(''));

    return completeName;
    /*It works!! *__* */
}
//console.log(randomName());

//For the next challenge I need another random message with the randomName()-function
const ranMesTwo = () => {
    console.log(`${randomIterate(greetWord)} ${randomName()}, ${randomIterate(verbs)} the ${randomIterate(monsters)} and ${randomIterate(verbs)} the ${randomIterate(objects)}!`);
}

//Last Challenge

/* Next and last challenge is to require a user input to chose if you want to have a more common name (DnD-wise) or a completely random name.
After the user has chosen option 1 or 2, using a switch case the function will return a random message with the name choice of the user. For this challenge 
I used the help of the following resource: https://www.codecademy.com/article/getting-user-input-in-node-js */

/*Uncomment the code below to use function with prompt-sync.
If you don't have this node-module, just copy the following to the terminal: npm install prompt-sync */

/*
const userInput = () => {
    const prompt = require('prompt-sync')({sigint: true});
    let option = prompt ('Greetings, traveller, pray tell me a choice if thou desire a common or a very random name for thy quest! 🗡️  Press 1 for a common name or 2 for a completely random name: ');
    option = Number(option);

    switch (option) {
        case 1:
        return randomMessage();
        break;
        case 2:
        return ranMesTwo();
        break;
    } 
}
*/

/* I've updated the code to use the node built-in readline-module.
To start the function again, exit terminal with Ctrl+C and type in node script.js again.*/

const userInput = () => {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

 readline.question('Greetings, traveller, pray tell me a choice if thou desire a common or a very random name for thy quest! 🗡️  Press 1 for a common name or 2 for a completely random name: ', option => {
  option = Number(option);
    switch (option) {
        case 1:
        return randomMessage();
        break;
        case 2:
        return ranMesTwo();
        break;
    }
  readline.close();
});
} 

//Finally we invoke the final function of this project. Have fun! :-)
userInput();

