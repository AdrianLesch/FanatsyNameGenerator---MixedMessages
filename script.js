//First we need some arrays of names

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


//Example sentence would be `randomIterate(greetWord) randomIterate(firstNames) randomIterade(lastNames), randomIterade(verbs) the randomIterade(monsters) and randomIterate(verbs) the randomIterate(objects)!`
const randomMessage = () => {
    console.log(`${randomIterate(greetWord)} ${randomIterate(firstNames)} ${randomIterate(lastNames)}, ${randomIterate(verbs)} the ${randomIterate(monsters)} and ${randomIterate(verbs)} the ${randomIterate(objects)}!`);
}

randomMessage();
