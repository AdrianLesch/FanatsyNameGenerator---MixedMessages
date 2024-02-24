//First we need some arrays of names

const firstNames = ['Zara', 'Tharion', 'Kira', 'Ragnor',
 'Lila', 'Nala', 'Varis', 'Mara', 'Kato', 'Elora', 'Darius', 'Sora', 'Zane', 'Fira', 'Milo',
 'Aran', 'Luna', 'Remy', 'Lyra', 'Torin'];

const lastNames = ['Moonshadow', 'Stormbringer', 'Brightflame', 'Ironfist', 'Silverleaf', 'Sunstrider', 'Nightfall', 'Swiftwind',
'Fireheart', 'Starlight', 'Blackthorn', 'Lightbringer', 'Shadowflame', 'Emberstone', 'Greenbottle', 'Silvermoon', 'Moonbeam',
'LeBeau', 'Dawnflower', 'Stormchaser'];

const greetword = 

//Second we create a randomize function

const randomIterate = (namesArray) => {
    return(namesArray[Math.floor(Math.random() * namesArray.length)]);
}

const combineNames = () => {
    let combindedName = randomIterate(firstNames) + ' ' + randomIterate(lastNames);
    return combindedName;
}


