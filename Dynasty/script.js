import { config } from "./config.js";
import { events } from "./data/events.js";
import { Adapter } from "./scripts/adapters.js";
import { AEBootstrap } from "./scripts/bootstrap.js";
import { Utils } from "./scripts/utils.js";

//DATA

let gold = 100;
let popularity = 50;
let army = 10;
let years = 0;
let dynasty = [{ name: "Henri I", genre : "male", reign : 0, age: 18, skills: { economy: 5, diplomacy: 5, military: 5 } }];
let longTermEffects = [];
let character = dynasty[0];
let spouse = null;
let children = [];
let councils = {
    economy : null,
    military : null,
    diplomacy : null,
};
let decisionDuration = 1;
let genealogyOrderBirth = 0;

//Template elements

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
const modalEvent = document.getElementById('modal-text');
const modal = bootstrap.Modal.getOrCreateInstance('#modal');
const toastEvent = document.getElementById('toast-text');
const toast = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToast"));

/********************* GAME LOGIC ********************/

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
    updateCouncilInfo();
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
                case "adult-age":
                    event.decisions.forEach(decision=>{
                        let age = Math.floor(Math.random() * 20)+30;
                        decision.text = decision.text.replace('Y', age);
                        if(decision.special && decision.special.spouse){
                            decision.special.spouse.age = age;
                        }
                    })
                break;
                case "skills":
                    event.decisions.forEach(decision=>{
                        if(decision.special && decision.special.spouse){
                            Object.values(decision.special.spouse.skills).forEach(skill=>{
                                skill = Math.floor(Math.random() * 5);
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
                case "male-housename":
                    let house_male = Adapter.findHouse();
                    event.decisions.forEach(decision=>{
                        if(decision.special && decision.special.spouse){
                            decision.special.spouse.name += " " + house_male;
                        }
                    })
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

    decisionDuration = Math.floor(Math.random() * 3) + 1;

    event.decisions.forEach((decision, index) => {
        const button = document.createElement('button');
        button.textContent = decision.text;
        button.addEventListener('click', () => makeDecision(decision));
        decisionButtonsContainer.appendChild(button);
    });

    resizeParchment();
}

function checkOrientation(decision){
    let characteristics = getCharacteristics();
    if(decision.orientation){
        let pass = false;
        if(decision.orientation == "popularity" && (Math.random() + popularity/100.0) >= 0.6){
            pass=true;
        }if(decision.orientation == "army" && (Math.random() + army/100.0) >= 0.6){
            pass=true;
        }if(decision.orientation == "gold" && (Math.random() + gold/100.0) >= 0.6){
            pass=true;
        }else{
            if((Math.random() + characteristics[decision.orientation]/100.0) >= 0.6)pass=true;
        }
        if(pass){
            if(decision.bonus == "popularity"){
                let pop = Math.max(decision.shortTermEffects.popularity, -1*decision.shortTermEffects.popularity);
                let res = (pop-pop/10);
                popularity += res;
                launchToast(" +" + res + " " + decision.bonus);
            }if(decision.bonus == "army"){
                let pop = Math.max(decision.shortTermEffects.army, -1*decision.shortTermEffects.army);
                let res = (pop-pop/10);
                army += res;
                launchToast(" +" + res + " " + decision.bonus);
            }if(decision.bonus == "gold"){
                let pop = Math.max(decision.shortTermEffects.gold, -1*decision.shortTermEffects.gold);
                let res = (pop-pop/10);
                gold += res;
                launchToast(" +" + res + " " + decision.bonus);
            }else{
                character.skills[decision.bonus]++;
                launchToast("+1" + " " + decision.bonus);
            } 
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
    while (true) {
        event = events[Math.floor(Math.random() * events.length)];
        if (!event.conditional || checkConditions(event.conditional)) {
            break;
        }
    }
    return Utils.copy(event);
}

function checkConditions(conditions) {
    return conditions.every(condition => {
        switch (condition) {
            case "no-spouse":
                return !spouse;
            case "spouse":
                return spouse;
            case "is-male":
                return character.genre === "male";
            case "is-female":
                return character.genre === "female";
            case "child":
                return children.length > 0;
            case "no-child":
                return children.length === 0;
            default:
                return true;
        }
    });
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

    Object.values(councils).forEach(council=>{
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
        case 'council-military':
            addCouncil(special.spouse, 'military');
            break;
        case 'council-economy':
            addCouncil(special.spouse, 'economy');
            break;
        case 'council-diplomacy':
            addCouncil(special.spouse, 'diplomacy');
            break;
        // Add more case statements for other special event types
    }
}

function addCouncil(council, post){
    councils[post] = council;
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
    addCharacterInGenealogy(newChild, character);
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

/********************* RENDERING ********************/

function eraseGenealogy(){
    document.getElementById("tree_gen_1").innerHTML = "";
    addCharacterInGenealogy(character);
    updateCharacterInGenealogy(character, character, true, false)
}

function updateCharacterInGenealogy(oldPerson, person, isKing, isDead){
    let li = document.getElementById(oldPerson.id);
    li.setAttribute("id", person.id);
    li.firstElementChild.textContent = person.name;
    if(isKing && !li.classList.contains("isKing")){
        li.classList.add("isKing");
    }
    if(isDead && !li.classList.contains("isDead")){
        li.classList.add("isDead");
    }
}

function addCharacterInGenealogy(person, parent){
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = person.name;
    li.appendChild(p);
    li.setAttribute("id", person.name +"_"+ genealogyOrderBirth);
    person.id = person.name +"_"+ genealogyOrderBirth;
    genealogyOrderBirth++;

    if(!parent){
        let ul = document.getElementById("tree_gen_1");
        ul.appendChild(li);
    }else{
        let liParent = document.getElementById(parent.id);
        console.log(liParent.querySelectorAll(':scope > ul').length == 0)
        if(liParent.querySelectorAll(':scope > ul').length == 0){
            const ul = document.createElement("ul");
            ul.appendChild(li)
            liParent.appendChild(ul);
        }else{
            liParent.lastElementChild.appendChild(li);
        }
    }
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

function updateCouncilInfo(){
    let anyCouncils = document.getElementById('no-councils');
    let listCouncils = document.getElementById('councils-list')
    if(councils.economy == null && councils.military == null && councils.diplomacy == null){
        anyCouncils.style.display = 'block';
        listCouncils.style.display = 'none';
    }else{
        anyCouncils.style.display = 'none';
        listCouncils.style.display = 'block';
        if(councils.economy){
            listCouncils.textContent = "Grand Trésorier : " + councils.economy.name;
        }
        if(councils.military){
            listCouncils.textContent = "Grand Stratège : " + councils.military.name;
        }
        if(councils.diplomacy){
            listCouncils.textContent = "Grand Pigeonnier : " + councils.diplomacy.name;
        }
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
        li.classList.add('stone');

        const spanName = document.createElement('span');
        spanName.textContent = `${dynast.name} `;
        spanName.classList.add("grave");
        li.appendChild(spanName);

        const spanReign = document.createElement('span');
        spanReign.setAttribute('data-bs-toggle', 'tooltip');
        spanReign.setAttribute('data-bs-title', 'Reign duration');
        const img = document.createElement('img');
        img.setAttribute('src', './images/icons/crown.svg');
        img.setAttribute('alt', 'Reign');
        const span = document.createElement('span');
        span.textContent = `${dynast.reign}`;
        span.classList.add("grave");
        spanReign.appendChild(img);
        spanReign.appendChild(span);
        li.appendChild(spanReign);

        if(dynast.status && dynast.status == "dead"){
            const spanDead = document.createElement('span');
            spanDead.setAttribute('data-bs-toggle', 'tooltip');
            spanDead.setAttribute('data-bs-title', 'Age');
            const img2 = document.createElement('img');
            img2.setAttribute('src', './images/icons/tombstone.svg');
            img2.setAttribute('alt', 'Age');
            const span2 = document.createElement('span');
            span2.textContent = `${dynast.age}`;
            span2.classList.add("grave");
            spanDead.appendChild(img2);
            spanDead.appendChild(span2);
            li.appendChild(spanDead);
        }else{
            const spanLife = document.createElement('span');
            spanLife.setAttribute('data-bs-toggle', 'tooltip');
            spanLife.setAttribute('data-bs-title', 'Age');
            const img2 = document.createElement('img');
            img2.setAttribute('src', './images/icons/crowned-heart.svg');
            img2.setAttribute('alt', 'Age');
            const span2 = document.createElement('span');
            span2.textContent = `${dynast.age}`;
            span2.classList.add("grave");
            spanLife.appendChild(img2);
            spanLife.appendChild(span2);
            li.appendChild(spanLife);
        }



        dynastyList.appendChild(li);
    });
    AEBootstrap.enableTooltip();
    resizeParchment();
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

function launchModal(text){
    modalEvent.innerText = text;
    modal.show();
}

function launchToast(text){
    toastEvent.innerText = text;
    toast.show();
}


/********************* START & ENDGAME LOGIC ********************/

function checkGameOver() {
    if (character.age > 60) {
        if (children.length > 0) {
            updateCharacterInGenealogy(character, character, true, true);
            character.status = "dead";
            const heir = findHeir();
            let oldHeir = Utils.copy(heir);
            heir.name = addKingNumber(heir.name);
            heir.reign = 0;
            updateCharacterInGenealogy(oldHeir, heir, true, false);
            dynasty.push(heir);
            character = heir;
            spouse = null;
            children = [];
            generateSpouseAndChildren();
            launchModal(`Le roi est mort. ${character.name} est couronné à sa place. Longue vie au Roi !`)
        } else {
            launchModal('Le roi est mort sans héritier. Vous avez perdu.')
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
    genealogyOrderBirth = 0;
    updateStats();
    updateDynastyList();
    updateSpouseInfo();
    eraseGenealogy();
    showEvent(events[Math.floor(Math.random() * events.length)]);
}

function initializeGame() {
    updateStats();
    showEvent(choseEvent());
    updateDynastyList();
    eraseGenealogy();
    AEBootstrap.enableTooltip();
}

/********************* START ********************/

// First call to define "parchment" height
document.onload = resizeParchment();

// Redraw when viewport is modified
window.addEventListener('resize', function(event){
  resizeParchment();
});


function resizeParchment() {
  var content = document.querySelector('#parchment-game');
  var container = document.querySelector('#game');
  var content2 = document.querySelector('#parchment-family');
  var container2 = document.querySelector('#royal-family');
  var content3 = document.querySelector('#parchment-court');
  var container3 = document.querySelector('#royal-court');

  // SVG feTurbulence can modify all others elements, for this reason "parchment" is in another <div> and in absolute position.
  // so for a better effect, absolute height is defined by his content.
  content.style.height = container.offsetHeight + 'px';
  content.style.width = container.offsetWidth + 'px';
  content2.style.height = container2.offsetHeight + 'px';
  content2.style.width = container2.offsetWidth + 'px';
  content3.style.height = container3.offsetHeight + 'px';
  content3.style.width = container3.offsetWidth + 'px';
  content3.style.left = container3.getBoundingClientRect().left + 'px';
}

initializeGame();


document.getElementById("version").innerHTML = config.version;