import { events } from "./data/events.js";

let gold = 100;
let popularity = 50;
let army = 10;
let years = 0;
let dynasty = [{ name: "Henri I", age: 18, skills: { economy: 5, diplomacy: 5, military: 5 } }];
let longTermEffects = [];
let character = dynasty[0];
let spouse = null;
let children = [];
let councils = [];
let decisionDuration = 1;

const stats = { gold: "Or", popularity: "Popularité", army: "Armée" };

const goldElement = document.getElementById('gold');
const popularityElement = document.getElementById('popularity');
const armyElement = document.getElementById('army');
const yearsElement = document.getElementById('years');
const eventText = document.getElementById('event-text');
const decisionButtonsContainer = document.getElementById('decision-buttons');
const dynastyList = document.getElementById('dynasty-list');
const characterNameElement = document.getElementById('character-name');
const characterAgeElement = document.getElementById('character-age');
const skillEconomyElement = document.getElementById('skill-economy');
const skillDiplomacyElement = document.getElementById('skill-diplomacy');
const skillMilitaryElement = document.getElementById('skill-military');
const spouseDataElement = document.getElementById('spouse-data');
const noSpouseElement = document.getElementById('no-spouse');
const spouseNameElement = document.getElementById('spouse-name');
const spouseAgeElement = document.getElementById('spouse-age');
const noChildrenElement = document.getElementById('no-children');
const childrenList = document.getElementById('children-list');

function copy(object){
    return JSON.parse(JSON.stringify(object));
}

function updateStats() {
    console.log('Updating stats:');
    console.log(`Gold: ${gold}, Popularity: ${popularity}, Army: ${army}, Years: ${years}`);
    goldElement.textContent = `${gold}`;
    popularityElement.textContent = `${popularity}`;
    armyElement.textContent = `${army}`;
    yearsElement.textContent = `${years}`;

    displayLongTermEffects();
    updateCharacterInfo();
    updateSpouseInfo();
    updateChildrenInfo();
}

function showEvent(event) {
    eventText.textContent = event.text;
    decisionButtonsContainer.innerHTML = '';

    decisionDuration = Math.floor(Math.random() * 5) + 1;

    event.decisions.forEach((decision, index) => {
        const button = document.createElement('button');
        button.textContent = decision.text;
        button.addEventListener('click', () => makeDecision(decision));
        decisionButtonsContainer.appendChild(button);
    });
}

function makeDecision(decision) {
    console.log('Making decision:');
    console.log(decision);

    applyShortTermEffects(decision.shortTermEffects);
    applyLongTermEffects(decision.longTermEffects);

    if (decision.special) {
        handleSpecialEvent(decision.special);
    }

    updateStats();

    showEvent(choseEvent());
    incrementCharacterAge();
    incrementYears();
    updateDynastyList();
    checkGameOver();
}

function choseEvent(){
    let event;
    let loop = true;
    while(loop){
        event = events[Math.floor(Math.random() * events.length)];
        if(event.conditional){
            switch (event.conditional) {
                case "no-spouse":
                    if(!spouse){
                        loop = false;
                    }
                    break;
                case "spouse":
                    if(spouse){
                        loop = false;
                    }
                    break;
                case "child":
                    if(children.length > 0){
                        loop = false;
                    }
                    break;
                default:
                    break;
            }
        }else{
            loop = false;
        }
    }
    return copy(event);
}

function applyShortTermEffects(effects) {
    gold += effects.gold ? effects.gold : 0;
    popularity += effects.popularity ? effects.popularity : 0;
    army += effects.army ? effects.army : 0;

    // Limiter les valeurs à 0 minimum
    gold = isNaN(gold) ? 0 : Math.max(gold, 0);
    popularity = isNaN(popularity) ? 0 : Math.max(popularity, 0);
    army = isNaN(army) ? 0 : Math.max(army, 0);
}

function applyLongTermEffects(effects) {
    Object.keys(effects).forEach(stat => {
        if (effects[stat].amount !== 0) {
            longTermEffects.push({
                stat: stat,
                amount: effects[stat].amount,
                duration: effects[stat].duration
            });
        }
    })
}

function displayLongTermEffects() {
    // Effacer les effets à long terme précédents
    Object.keys(stats).forEach(stat => {
        const statElement = document.getElementById(stat);
        statElement.innerHTML = `${window[stat].textContent}`;
    });

    // Calculer et afficher les effets à long terme actifs
    const longTermEffectsDisplay = { gold: 0, popularity: 0, army: 0 };
    const effectsToRemove = [];

    longTermEffects.forEach(effect => {
        if (effect.duration > 0) {
            longTermEffectsDisplay[effect.stat] += effect.amount;
            effect.duration--;
        } else {
            effectsToRemove.push(effect);
        }
    });

    // Supprimer les effets à long terme expirés
    effectsToRemove.forEach(effect => {
        const index = longTermEffects.indexOf(effect);
        if (index > -1) {
            longTermEffects.splice(index, 1);
        }
    });

        // Affichage des effets à long terme mis à jour
    Object.keys(longTermEffectsDisplay).forEach(stat => {
        const statElement = document.getElementById(stat);
        const effectAmount = longTermEffectsDisplay[stat];
        if (effectAmount !== 0) {
            const effectSign = effectAmount > 0 ? '+' : '';
            const effectColor = effectAmount > 0 ? 'green' : 'red';
            const effectText = `<span style="color: ${effectColor};">${effectSign}${effectAmount}</span>`;
            statElement.innerHTML = `${window[stat].textContent} (${effectText})`;
        }
    });
    
}

function updateCharacterInfo() {
    characterNameElement.textContent = character.name;
    characterAgeElement.textContent = `${character.age} ans`;
    skillEconomyElement.textContent = character.skills.economy;
    skillDiplomacyElement.textContent = character.skills.diplomacy;
    skillMilitaryElement.textContent = character.skills.military;
}

function updateSpouseInfo() {
    if (spouse) {
        noSpouseElement.style.display = 'none';
        spouseDataElement.style.display = 'block';
        spouseNameElement.textContent = spouse.name;
        spouseAgeElement.textContent = `${spouse.age} ans`;
    } else {
        noSpouseElement.style.display = 'block';
        spouseDataElement.style.display = 'none';
    }
}

function updateChildrenInfo() {
    if (children.length > 0) {
        noChildrenElement.style.display = 'none';
        childrenList.style.display = 'block';
        childrenList.innerHTML = '';
        children.forEach(child=>{
            const li = document.createElement('li');
            li.textContent = `${child.name}, ${child.age} ans`;
            childrenList.appendChild(li);
        })
    } else {
        noChildrenElement.style.display = 'block';
        childrenList.style.display = 'none';
    }
}

function updateDynastyList() {
    dynastyList.innerHTML = '';
    dynasty.forEach(dynast => {
        const li = document.createElement('li');
        li.textContent = `${dynast.name}, ${dynast.age} ans`;
        dynastyList.appendChild(li);
    });
}

function incrementCharacterAge() {
    character.age += decisionDuration;
    if (spouse) {
        spouse.age += decisionDuration;
    }
    children.forEach(child => child.age += decisionDuration);
}

function incrementYears() {
    years += decisionDuration;
}

function handleSpecialEvent(special) {
    switch (special.type) {
        case 'marriage':
            if (!spouse) {
                marry(special.spouse);
            } else {
                alert("Vous avez déjà une épouse.");
            }
            break;
        case 'childbirth':
            if (spouse) {
                haveChild(special.child);
            } else {
                alert("Vous devez avoir une épouse pour avoir un enfant.");
            }
            break;
        case 'trainChild':
            trainChild(special.skill, special.value);
            break;
        // Add more case statements for other special event types
    }
}

function marry(newSpouse) {
    console.log('Getting married to:');
    console.log(newSpouse);

    spouse = newSpouse;
    updateSpouseInfo();
}

function haveChild(newChild) {
    console.log('Having a child:');
    console.log(newChild);

    children.push(newChild);
    updateChildrenInfo();
    updateDynastyList();
}

function trainChild(skill, value) {
    console.log(`Training child in ${skill} by ${value}`);
    
    children.forEach(child => {
        child.skills[skill] += value;
    });
    updateDynastyList();
}

// Fonction pour convertir un nombre en chiffres romains (adaptée pour ce besoin spécifique)
function toRoman(num) {
    const romanNumeralMap = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    let roman = '';
    for (let i = 0; i < romanNumeralMap.length; i++) {
        while (num >= romanNumeralMap[i].value) {
            roman += romanNumeralMap[i].numeral;
            num -= romanNumeralMap[i].value;
        }
    }
    return roman;
}

function checkGameOver() {
    if (character.age > 60) {
        if (children.length > 0) {
            const heir = children[0];
            dynasty.push(heir);
            character = heir;
            children.shift();
        } else {
            alert('Le roi est mort sans héritier. Vous avez perdu.');
            resetGame();
        }
    }
}

function resetGame() {
    gold = 100;
    popularity = 50;
    army = 10;
    years = 0;
    dynasty = [{ name: "Henri I", age: 18, skills: { economy: 5, diplomacy: 5, military: 5 } }];
    character = dynasty[0];
    spouse = null;
    children = [];
    longTermEffects = [];
    updateStats();
    updateDynastyList();
    showEvent(events[Math.floor(Math.random() * events.length)]);
}

function initializeGame() {
    updateStats();
    showEvent(choseEvent());
    updateDynastyList();
}

initializeGame();
