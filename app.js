//apologies, I was busy and usually turning it in is no problem,
//but a mix of not getting to see a full demonstration and getting sick
//messed with my schedule, so please tell me about where the flaws are in my code
//I would like to learn more as I don't feel I know what questions to ask
//without just asking you to go over the whole lesson again

const pokemon = [
    { name: "Charmander", type: "fire", maxHp: 100, attack: 15 },
    { name: "Squirtle", type: "water", maxHp: 110, attack: 12 },
    { name: "Pikachu", type: "electric", maxHp: 95, attack: 18 },
    { name: "Bulbasaur", type: "grass", maxHp: 105, attack: 13 }
];

function pokemonRender(render) {
    document.getElementById("pokemonDiv").innerHTML = "";
    render.forEach(item => {
        document.getElementById("pokemonDiv").appendChild(item.name)
    })
}

const mapping = pokemon.map(item => {
    const ele = document.createElement("div");
    ele.name = item.name;
    ele.type = item.type;
    ele.maxHp = item.maxHp;
    ele.attack = item.attack;
    return ele.name + " (" + ele.type + ") -- " + ele.maxHp + " HP";
    //I think this is also trying to do the job of pokemonRender,
    //I don't think I understand how to make it transform the data
    //it's like pokemonRender, but both need to render and neither do right now
})

mapping(pokemon);//the list is not printing.

pokemonRender(pokemon);//the list is not printing...



const sumHP = pokemon.reduce((hp, item) => {
    //return maxHP + item;
    pokemon.forEach(item => {
        item.maxHp ++
        //so for each maxHP it will add them together.
        //I think I need the Number() function to read the maxHP as a number,
        //but in the list they aren't in "" so maybe not.
    })
})

//document.getElementById("pokemonDiv").innerHTML = "HIYA"
//I can't see the div for some reason// I can see the div now!