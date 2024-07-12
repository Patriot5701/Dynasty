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

function updateStats() {
    goldElement.textContent = `${gold}`;
    popularityElement.textContent = `${popularity}`;
    armyElement.textContent = `${army}`;
    yearsElement.textContent = `${years}`;

    displayLongTermEffects();
    updateCharacterInfo();
}

function showEvent(event) {
    eventText.textContent = event.text;
    decisionButtonsContainer.innerHTML = '';

    event.decisions.forEach((decision, index) => {
        const button = document.createElement('button');
        button.textContent = decision.text;
        button.addEventListener('click', () => makeDecision(decision));
        decisionButtonsContainer.appendChild(button);
    });
}

function makeDecision(decision) {
    applyShortTermEffects(decision.shortTermEffects);
    applyLongTermEffects(decision.longTermEffects);

    updateStats();
    showEvent(events[Math.floor(Math.random() * events.length)]);
    incrementCharacterAge();
    incrementYears();
    updateDynastyList();
    checkGameOver();
}

function applyShortTermEffects(effects) {
    gold += effects.gold;
    popularity += effects.popularity;
    army += effects.army;

    // Limiter les valeurs à 0 minimum
    gold = Math.max(gold, 0);
    popularity = Math.max(popularity, 0);
    army = Math.max(army, 0);
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

function updateDynastyList() {
    dynastyList.innerHTML = '';
    dynasty.forEach(dynast => {
        const li = document.createElement('li');
        li.textContent = `${dynast.name}, ${dynast.age} ans`;
        dynastyList.appendChild(li);
    });
}

function incrementCharacterAge() {
    character.age += 1;
}

function incrementYears() {
    years += 1;
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
    showEvent(events[Math.floor(Math.random() * events.length)]);
}

function initializeGame() {
    updateStats();
    showEvent(events[Math.floor(Math.random() * events.length)]);
    updateDynastyList();
}

initializeGame();
