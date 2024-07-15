import { events } from "./data/events.js";
import { firstnames } from "./data/names.js";
import { Adapter } from "./scripts/adapters.js";
import { AEBootstrap } from "./scripts/bootstrap.js";
import { Utils } from "./scripts/utils.js";

let gold = 100;
let popularity = 50;
let army = 10;
let years = 0;
let dynasty = [{ name: "Henri I", genre : "male", reign : 0, age: 18, skills: { economy: 5, diplomacy: 5, military: 5 } }];
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
    if(event.generate){
        event.generate.forEach(generation=>{
            switch (generation) {
                case "age":
                    event.decisions.forEach(decision=>{
                        let age = Math.floor(Math.random() * Math.min(25, character.age - 10));
                        decision.text = decision.text.replace('Y', age);
                        if(decision.special && decision.special.child){
                            decision.special.child.age = age;
                        }
                    })
                break;
                case "skills":
                    event.decisions.forEach(decision=>{
                        if(decision.special && decision.special.spouse){
                            Object.values(decision.special.spouse.skills).forEach(skill=>{
                                skill = Math.floor(Math.random() * 10);
                            })
                        }
                    })
                    break;
                case "female-firstname":
                    let name = Adapter.findName("female", "got");
                    event.decisions.forEach(decision=>{
                        decision.text = decision.text.replace('X', name);
                        if(decision.special && decision.special.spouse){
                            decision.special.spouse.name = name;
                        }
                    })
                    break;         
                case "male-firstname":
                    let name_male = Adapter.findName("male", "got");
                    event.decisions.forEach(decision=>{
                        decision.text = decision.text.replace('X', name_male);
                        if(decision.special && decision.special.spouse){
                            decision.special.spouse.name = name_male;
                        }
                    })
                    break;
                case "male-child-firstname":
                    let names = [];
                    event.decisions.forEach(decision=>{
                        let name = Adapter.findName("male", "got");
                        while(names.includes(name)){
                            name = Adapter.findName("male", "got");
                        }
                        names.push(name);
                        decision.text = decision.text.replace('X', name);
                        if(decision.special && decision.special.child){
                            decision.special.child.name = name;
                        }
    
                    })
                    break;
                case "female-child-firstname":
                    let female_names = [];
                    event.decisions.forEach(decision=>{
                        let name = Adapter.findName("female", "got");
                        while(female_names.includes(name)){
                            name = Adapter.findName("female", "got");
                        }
                        female_names.push(name);
                        decision.text = decision.text.replace('X', name);
                        if(decision.special && decision.special.child){
                            decision.special.child.name = name;
                        }
                    })
                    break;
                default:
                    break;
            }
        })


    }

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

function checkOrientation(decision){
    let characteristics = getCharacteristics();
    if(decision.orientation){
        let pass = false;
        if(decision.orientation == "popularity" && (Math.random() + popularity/100.0) >= 0.6){
            pass=true;
        }else{
            if((Math.random() + characteristics[decision.orientation]/100.0) >= 0.6)pass=true;
        }
        if(pass){
            if(decision.bonus == "popularity"){
                let pop = Math.max(decision.shortTermEffects.popularity, -1*decision.shortTermEffects.popularity);
                popularity += (pop-pop/10);
            }else{
                character.skills[decision.bonus]++;
            } 
            alert(decision.result);
        }
    }
}

function makeDecision(decision) {
    console.log('Making decision:');
    console.log(decision);

    applyShortTermEffects(decision.shortTermEffects);
    applyLongTermEffects(decision.longTermEffects);

    checkOrientation(decision);

    if (decision.special) {
        handleSpecialEvent(decision.special);
    }

    incrementCharacterAge();
    incrementYears();
    checkGameOver();
    updateStats();
    updateDynastyList();
    showEvent(choseEvent());
}

function choseEvent(){
    let event;
    let loop = true;
    while(loop){
        event = events[Math.floor(Math.random() * events.length)];
        if(event.conditional){
            let conditions = [];
            event.conditional.forEach(condition=>{
                switch (condition) {
                    case "no-spouse":
                        if(!spouse){
                            conditions.push(false);
                        }
                        break;
                    case "spouse":
                        if(spouse){
                            conditions.push(false);
                        }
                        break;
                    case "is-male":
                        if(character.genre == "male"){
                            conditions.push(false);
                        }
                        break;
                    case "is-female":
                        if(character.genre == "female"){
                            conditions.push(false);
                        }
                        break;
                    case "child":
                        if(children.length > 0){
                            conditions.push(false);
                        }
                        break;
                    case "no-child":
                        if(children.length == 0){
                            conditions.push(false);
                        }
                    default:
                        break;
                }
            })
            if(conditions.length == event.conditional.length){
                loop = false;
            }
        }else{
            loop = false;
        }
    }
    let eventToDisplay = Utils.copy(event);
    return eventToDisplay;
}

function getCharacteristics(){
    let economy = character.economy;
    let diplomacy = character.diplomacy;
    let military = character.military;

    if(spouse){
        economy += spouse.economy;
        diplomacy += spouse.diplomacy;
        military += spouse.military;
    }

    councils.forEach(council=>{
        economy += council.economy;
        diplomacy += council.diplomacy;
        military += council.military;
    })
    return {economy : economy, diplomacy : diplomacy, military : military};
}

function applyShortTermEffects(effects) {
    let characteristics = getCharacteristics();
    gold += ((effects.gold ? effects.gold : 0) + (characteristics.economy > 10 ? characteristics.economy-10 : 0));
    popularity += ((effects.popularity ? effects.popularity : 0) + (characteristics.diplomacy > 30 ? characteristics.diplomacy-30 : 0) + (characteristics.economy > 20 ? characteristics.economy-20 : 0));
    army += ((effects.army ? effects.army : 0) + (characteristics.military > 10 ? characteristics.military-10 : 0));

    // Limiter les valeurs à 0 minimum
    gold = isNaN(gold) ? 0 : Math.max(gold, 0);
    popularity = isNaN(popularity) ? 0 : Math.max(popularity, 0);
    army = isNaN(army) ? 0 : Math.max(army, 0);
}

function applyLongTermEffects(effects) {
    longTermEffects.forEach(effect => {
        gold += effect.stat == "gold" ? effect.amount : 0;
        popularity += effect.stat == "popularity" ? effect.amount : 0;
        army += effect.stat == "army" ? effect.amount : 0;
    })


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
    // Calculer et afficher les effets à long terme actifs
    const longTermEffectsDisplay = { gold: 0, popularity: 0, army: 0 };
    const effectsToRemove = [];

    let characteristics = getCharacteristics();
    longTermEffectsDisplay.gold += (characteristics.economy > 10 ? characteristics.economy-10 : 0);
    longTermEffectsDisplay.popularity += (characteristics.diplomacy > 30 ? characteristics.diplomacy-30 : 0) + (characteristics.economy > 20 ? characteristics.economy-20 : 0);
    longTermEffectsDisplay.army += (characteristics.military > 10 ? characteristics.military - 10 : 0);

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
        li.innerText = `${dynast.name} `;

        const spanReign = document.createElement('span');
        spanReign.setAttribute('data-bs-toggle', 'tooltip');
        spanReign.setAttribute('data-bs-title', 'Reign duration');
        const img = document.createElement('img');
        img.setAttribute('src', './images/crown.svg');
        img.setAttribute('alt', 'Reign');
        const span = document.createElement('span');
        span.textContent = `${dynast.reign}`;
        spanReign.appendChild(img);
        spanReign.appendChild(span);
        li.appendChild(spanReign);

        if(dynast.status && dynast.status == "dead"){
            const spanDead = document.createElement('span');
            spanDead.setAttribute('data-bs-toggle', 'tooltip');
            spanDead.setAttribute('data-bs-title', 'Age');
            const img2 = document.createElement('img');
            img2.setAttribute('src', './images/tombstone.svg');
            img2.setAttribute('alt', 'Age');
            const span2 = document.createElement('span');
            span2.textContent = `${dynast.age}`;
            spanDead.appendChild(img2);
            spanDead.appendChild(span2);
            li.appendChild(spanDead);
        }else{
            const spanLife = document.createElement('span');
            spanLife.setAttribute('data-bs-toggle', 'tooltip');
            spanLife.setAttribute('data-bs-title', 'Age');
            const img2 = document.createElement('img');
            img2.setAttribute('src', './images/crowned-heart.svg');
            img2.setAttribute('alt', 'Age');
            const span2 = document.createElement('span');
            span2.textContent = `${dynast.age}`;
            spanLife.appendChild(img2);
            spanLife.appendChild(span2);
            li.appendChild(spanLife);
        }



        dynastyList.appendChild(li);
    });
    AEBootstrap.enableTooltip();
}

function incrementCharacterAge() {
    character.age += decisionDuration;
    character.reign += decisionDuration;
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
        case "adopt":
            haveChild(special.child);
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

    let trained = false;
    children.every(child=>{
        if(child.genre == "male"){
            child.skills[skill] += value;
            trained = true;
            return false;
        }
        return true;
    })
    if(!trained)children[0].skills[skill] += value;
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

function addKingNumber(name){
    let number = 1;
    dynasty.forEach(king=>{
        if(king.name.includes(name)){
            number++;
        }
    })
    return `${name} ${toRoman(number)}`;
}

function findHeir(){
    let heir;
    children.every(child=>{
        if(child.genre == "male"){
            heir = child;
            return false;
        }else{
            return true;
        }
    })
    return heir == null ? children[0] : heir;
}

function generateSpouseAndChildren(){
    if(character.age >= 40 && Math.random() >= 0.9){
        spouse = {
            name : Adapter.findName(character.genre == "male" ? "female" : "male", "got"),
            age : Math.floor(Math.random() * Math.min(33, character.age - 2)) + 12,
            genre : character.genre == "male" ? "female" : "male",
            skills : {
                economy : Math.floor(Math.random() * 6) - 1,
                diplomacy : Math.floor(Math.random() * 6) - 1,
                military : Math.floor(Math.random() * 6) - 1
            }
        }
        if(spouse.age >= 18 && Math.random >= 0.6){
            let genre = Math.random >= 0.6 ? "male" : "female";
            children.push({
                name : Adapter.findName(genre, "got"),
                genre : genre,
                age : Math.floor(Math.random() * (spouse.age - 17)),
            });
        }
    }
}

function checkGameOver() {
    if (character.age > 60) {
        if (children.length > 0) {
            character.status = "dead";
            const heir = findHeir();
            heir.name = addKingNumber(heir.name);
            dynasty.push(heir);
            character = heir;
            spouse = null;
            children = [];
            generateSpouseAndChildren();
            alert(`Le roi est mort. ${character.name} est couronné à sa place. Longue vie au Roi !`);
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
    dynasty = [{ name: "Henri I", age: 18, reign : 0, genre : "male", skills: { economy: 5, diplomacy: 5, military: 5 } }];
    character = dynasty[0];
    spouse = null;
    children = [];
    longTermEffects = [];
    updateStats();
    updateDynastyList();
    updateSpouseInfo();
    showEvent(events[Math.floor(Math.random() * events.length)]);
}

function initializeGame() {
    updateStats();
    showEvent(choseEvent());
    updateDynastyList();
    AEBootstrap.enableTooltip();
}

initializeGame();
