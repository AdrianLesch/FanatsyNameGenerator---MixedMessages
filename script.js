//First we need some arrays of names etc...

const firstNames = ['Zara', 'Tharion', 'Kira', 'Ragnor',
 'Lila', 'Nala', 'Varis', 'Mara', 'Kato', 'Elora', 'Darius', 'Sora', 'Zane', 'Fira', 'Milo',
 'Aran', 'Luna', 'Remy', 'Lyra', 'Torin'];

const lastNames = ['Moonshadow', 'Stormbringer', 'Brightflame', 'Ironfist', 'Silverleaf', 'Sunstrider', 'Nightfall', 'Swiftwind',
'Fireheart', 'Starlight', 'Blackthorn', 'Lightbringer', 'Shadowflame', 'Emberstone', 'Greenbottle', 'Silvermoon', 'Moonbeam',
'LeBeau', 'Dawnflower', 'Stormchaser'];

const greetWord = ['Hail', 'Greetings', 'Salutations', 'Well met', 'Hello', 'Good day', 'Good morrow', 'Good eve', 'Welcome', 'Farewell', 'Goodbye', 'Adieu', 'Namaste', 'Shalom', 'Aloha', 'Konnichiwa', 'Bonjour', 'Ciao', 'Hola', 'Guten Tag'];

const verbs = ["attack", "cast", "dodge", "heal", "sneak", "explore", "persuade", "intimidate", "investigate", "loot", "craft", "trade", "rest", "travel", "summon", "transform", "enchant", "trap", "escape", "defend"];

const monsters = ["Beholder", "Dragon", "Lich", "Mind Flayer", "Owlbear", "Goblin", "Zombie", "Vampire", "Werewolf", "Mimic", "Gelatinous Cube", "Tarrasque", "Kraken", "Hydra", "Balor", "Rakshasa", "Medusa", "Basilisk", "Manticore", "Cyclops"];

const objects = ["Sword", "Shield", "Bow", "Arrow", "Dagger", "Axe", "Hammer", "Staff", "Wand", "Ring", "Amulet", "Potion", "Scroll", "Book", "Map", "Coin", "Gem", "Key", "Chest", "Lantern"];

//Second we create a randomize function

const randomIterate = (Array) => {
    return(Array[Math.floor(Math.random() * Array.length)]);
}

//Now we put the message together with a function
//Example sentence would be `randomIterate(greetWord) randomIterate(firstNames) randomIterade(lastNames), randomIterade(verbs) the randomIterade(monsters) and randomIterate(verbs) the randomIterate(objects)!`
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

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const extraVowels = ['a', 'e', 'i', 'o', 'u'];
    
    //Random iteration no. for name creation with min of 2 character and max of 10 chars
    const randomNum = Math.floor((Math.random() * 5));

    let newFirstName = [];
    let newLastName = [];

   for (let i = 0; i <= randomNum; i++){
        newFirstName.push(randomIterate(alphabet) + randomIterate(extraVowels));
    }
    

    //WIP WIP WIP WIP
    console.log(newFirstName);
    let firstCharUp = newFirstName[0][0].toUpperCase();
    //newFirstName.splice(0, 1, firstCharUp);
    newFirstName.map(firstCharUp);
    console.log(newFirstName);
    

}

randomName();


