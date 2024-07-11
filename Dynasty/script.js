let gold = 100;
let popularity = 50;
let army = 10;
let dynasty = ["Fondateur"];
let longTermEffects = [];

const events = [
    {
        text: "Une famine frappe votre royaume. Que faites-vous ?",
        decisions: [
            { 
                text: "Augmenter les impôts pour financer l'importation de vivres.",
                shortTermEffects: { gold: 20, popularity: -10, army: 0 },
                longTermEffects: { gold: { amount: 5, duration: 2 }, popularity: { amount: -3, duration: 1 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Distribuer des vivres aux nécessiteux malgré le coût élevé.",
                shortTermEffects: { gold: -30, popularity: 20, army: 0 },
                longTermEffects: { gold: { amount: -7, duration: 1 }, popularity: { amount: 4, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Organiser des travaux publics pour améliorer l'irrigation.",
                shortTermEffects: { gold: -40, popularity: 10, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 0, duration: 0 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Demander de l'aide aux pays voisins pour faire face à la famine.",
                shortTermEffects: { gold: -10, popularity: 5, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 3, duration: 3 }, army: { amount: 0, duration: 0 } }
            }
        ]
    },
    {
        text: "Une sécheresse sévit dans votre royaume. Que faites-vous ?",
        decisions: [
            { 
                text: "Rationner les ressources en eau pour économiser.",
                shortTermEffects: { gold: 0, popularity: -10, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: -5, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Investir dans des technologies pour améliorer l'irrigation.",
                shortTermEffects: { gold: -30, popularity: 10, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 5, duration: 3 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Organiser des prières et des rituels pour implorer la pluie.",
                shortTermEffects: { gold: -20, popularity: 15, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 7, duration: 1 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Faire appel à des marchands étrangers pour l'importation d'eau.",
                shortTermEffects: { gold: -40, popularity: 20, army: 0 },
                longTermEffects: { gold: { amount: 10, duration: 2 }, popularity: { amount: 0, duration: 0 }, army: { amount: 0, duration: 0 } }
            }
        ]
    },
    {
        text: "Un tremblement de terre dévaste une partie de votre royaume. Que faites-vous ?",
        decisions: [
            { 
                text: "Utiliser les ressources disponibles pour secourir les survivants.",
                shortTermEffects: { gold: -20, popularity: 15, army: -5 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 5, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Faire appel aux compétences des architectes pour reconstruire les infrastructures.",
                shortTermEffects: { gold: -30, popularity: 10, army: 0 },
                longTermEffects: { gold: { amount: -5, duration: 1 }, popularity: { amount: 3, duration: 3 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Mener une enquête pour déterminer les causes et éviter les futurs tremblements de terre.",
                shortTermEffects: { gold: -10, popularity: 5, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 0, duration: 0 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Ignorer la situation en se concentrant sur les autres priorités du royaume.",
                shortTermEffects: { gold: 0, popularity: -10, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: -3, duration: 2 }, army: { amount: 0, duration: 0 } }
            }
        ]
    },
    {
        text: "Une conspiration émerge à la cour royale. Que faites-vous ?",
        decisions: [
            { 
                text: "Lancer une enquête secrète pour démasquer les conspirateurs.",
                shortTermEffects: { gold: -20, popularity: 10, army: 0 },
                longTermEffects: { gold: { amount: -5, duration: 2 }, popularity: { amount: 0, duration: 0 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Augmenter la sécurité et la surveillance à la cour.",
                shortTermEffects: { gold: -10, popularity: 5, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 3, duration: 3 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Ignorer les rumeurs et se concentrer sur les affaires de l'État.",
                shortTermEffects: { gold: 0, popularity: -10, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: -3, duration: 1 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Convoquer une réunion avec les principaux nobles pour discuter des rumeurs de conspiration.",
                shortTermEffects: { gold: -5, popularity: 5, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 2, duration: 2 }, army: { amount: 0, duration: 0 } }
            }
        ]
    },
    {
        text: "Un assassinat a eu lieu dans votre cour royale. Que faites-vous ?",
        decisions: [
            { 
                text: "Lancer une enquête approfondie pour trouver le coupable.",
                shortTermEffects: { gold: -20, popularity: 10, army: 0 },
                longTermEffects: { gold: { amount: -5, duration: 2 }, popularity: { amount: 0, duration: 0 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Renforcer la sécurité et les mesures de protection autour de la cour.",
                shortTermEffects: { gold: -10, popularity: 5, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 3, duration: 3 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Faire preuve de clémence envers les proches du défunt pour apaiser la tension.",
                shortTermEffects: { gold: -5, popularity: 5, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 2, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Organiser des funérailles grandioses pour honorer la mémoire de la victime.",
                shortTermEffects: { gold: -15, popularity: 10, army: 0 },
                longTermEffects: { gold: { amount: -3, duration: 1 }, popularity: { amount: 1, duration: 1 }, army: { amount: 0, duration: 0 } }
            }
        ]
    },
    {
        text: "Une nouvelle route commerciale prometteuse est découverte. Que faites-vous ?",
        decisions: [
            { 
                text: "Investir dans l'aménagement de la nouvelle route pour booster le commerce.",
                shortTermEffects: { gold: -30, popularity: 15, army: 0 },
                longTermEffects: { gold: { amount: 10, duration: 3 }, popularity: { amount: 5, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Établir des relations commerciales avec les régions accessibles par la nouvelle route.",
                shortTermEffects: { gold: -20, popularity: 10, army: 0 },
                longTermEffects: { gold: { amount: 5, duration: 2 }, popularity: { amount: 3, duration: 3 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Faire appel à des marchands étrangers pour explorer les opportunités commerciales.",
                shortTermEffects: { gold: -10, popularity: 5, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 2, duration: 1 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Ignorer la nouvelle route et se concentrer sur les routes commerciales existantes.",
                shortTermEffects: { gold: 0, popularity: -10, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: -3, duration: 1 }, army: { amount: 0, duration: 0 } }
            }
        ]
    },
    {
        text: "Une mine riche en ressources précieuses est découverte sur votre territoire. Que faites-vous ?",
        decisions: [
            { 
                text: "Exploiter la mine pour bénéficier des ressources immédiatement.",
                shortTermEffects: { gold: 20, popularity: 10, army: 0 },
                longTermEffects: { gold: { amount: 5, duration: 2 }, popularity: { amount: 3, duration: 1 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Protéger la mine et planifier son exploitation à long terme.",
                shortTermEffects: { gold: -10, popularity: 5, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 2, duration: 3 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Allier les forces avec les mineurs locaux pour une exploitation conjointe de la mine.",
                shortTermEffects: { gold: -5, popularity: 5, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 2, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Ignorer la mine et laisser les ressources sous terre pour le moment.",
                shortTermEffects: { gold: 0, popularity: -10, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: -3, duration: 1 }, army: { amount: 0, duration: 0 } }
            }
        ]
    },
    {
        text: "Votre armée remporte une bataille décisive contre un ennemi puissant. Que faites-vous ?",
        decisions: [
            { 
                text: "Célébrer la victoire avec une parade militaire grandiose pour renforcer le moral.",
                shortTermEffects: { gold: -15, popularity: 10, army: 10 },
                longTermEffects: { gold: { amount: -3, duration: 1 }, popularity: { amount: 5, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Négocier des traités avantageux avec les territoires conquis pour renforcer votre influence.",
                shortTermEffects: { gold: -20, popularity: 15, army: 5 },
                longTermEffects: { gold: { amount: -5, duration: 2 }, popularity: { amount: 7, duration: 3 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Reconstruire les régions dévastées par la guerre pour consolider votre pouvoir.",
                shortTermEffects: { gold: -30, popularity: 10, army: 0 },
                longTermEffects: { gold: { amount: -7, duration: 1 }, popularity: { amount: 3, duration: 3 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Démobiliser une partie de l'armée pour économiser des ressources et maintenir la paix.",
                shortTermEffects: { gold: 10, popularity: -10, army: -10 },
                longTermEffects: { gold: { amount: 2, duration: 2 }, popularity: { amount: -5, duration: 2 }, army: { amount: 0, duration: 0 } }
            }
        ]
    },
    {
        text: "Votre armée subit une défaite humiliante contre un ennemi redoutable. Que faites-vous ?",
        decisions: [
            { 
                text: "Organiser une enquête pour comprendre les raisons de la défaite et éviter de futures défaites.",
                shortTermEffects: { gold: -20, popularity: 10, army: -10 },
                longTermEffects: { gold: { amount: -5, duration: 2 }, popularity: { amount: 3, duration: 3 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Réorganiser et entraîner l'armée pour améliorer sa performance sur le champ de bataille.",
                shortTermEffects: { gold: -30, popularity: 15, army: 5 },
                longTermEffects: { gold: { amount: -7, duration: 1 }, popularity: { amount: 5, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Négocier un cessez-le-feu temporaire pour stabiliser la situation militaire.",
                shortTermEffects: { gold: -10, popularity: 5, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 2, duration: 1 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Renforcer les alliances avec d'autres royaumes pour dissuader de futures attaques.",
                shortTermEffects: { gold: -15, popularity: 10, army: 0 },
                longTermEffects: { gold: { amount: -3, duration: 1 }, popularity: { amount: 3, duration: 3 }, army: { amount: 0, duration: 0 } }
            }
        ]
    },
    {
        text: "Une région frontalière demande votre aide pour se protéger contre des bandits. Que faites-vous ?",
        decisions: [
            { 
                text: "Envoyer des troupes pour sécuriser la région et combattre les bandits.",
                shortTermEffects: { gold: -20, popularity: 10, army: 10 },
                longTermEffects: { gold: { amount: -5, duration: 2 }, popularity: { amount: 5, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Négocier un accord de paix avec les bandits pour éviter un conflit ouvert.",
                shortTermEffects: { gold: -10, popularity: 5, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 3, duration: 1 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Former une milice locale pour défendre la région avec un soutien logistique.",
                shortTermEffects: { gold: -15, popularity: 5, army: 5 },
                longTermEffects: { gold: { amount: -3, duration: 1 }, popularity: { amount: 2, duration: 2 }, army: { amount: 0, duration: 0 } }
            }
        ]
    },
    {
        text: "Une nouvelle route maritime s'ouvre, ouvrant des voies commerciales vers de lointains marchés. Que faites-vous ?",
        decisions: [
            { 
                text: "Établir un port commercial pour exploiter cette nouvelle voie maritime.",
                shortTermEffects: { gold: -30, popularity: 15, army: 0 },
                longTermEffects: { gold: { amount: 10, duration: 3 }, popularity: { amount: 5, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Envoyer des explorateurs pour cartographier les nouvelles routes et évaluer les opportunités commerciales.",
                shortTermEffects: { gold: -20, popularity: 10, army: 0 },
                longTermEffects: { gold: { amount: 5, duration: 2 }, popularity: { amount: 3, duration: 3 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Établir des alliances maritimes avec les nations potentiellement intéressées par cette nouvelle voie.",
                shortTermEffects: { gold: -10, popularity: 5, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 2, duration: 1 }, army: { amount: 0, duration: 0 } }
            }
        ]
    },
];

const stats = { gold: "Or", popularity: "Popularité", army: "Armée" };

const goldElement = document.getElementById('gold');
const popularityElement = document.getElementById('popularity');
const armyElement = document.getElementById('army');
const longTermEffectsList = document.getElementById('long-term-effects-list');
const eventText = document.getElementById('event-text');
const decisionButtonsContainer = document.getElementById('decision-buttons');
const dynastyList = document.getElementById('dynasty-list');

function updateStats() {
    goldElement.textContent = `${gold}`;
    popularityElement.textContent = `${popularity}`;
    armyElement.textContent = `${army}`;

    displayLongTermEffects();
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
    addNewMemberToDynasty();
    showEvent(events[Math.floor(Math.random() * events.length)]);
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
    });
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

function addNewMemberToDynasty() {
    const newMember = `Génération ${dynasty.length + 1}`;
    dynasty.push(newMember);
    const li = document.createElement('li');
    li.textContent = newMember;
    dynastyList.appendChild(li);
}

document.addEventListener('DOMContentLoaded', () => {
    updateStats();
    showEvent(events[Math.floor(Math.random() * events.length)]);
    dynasty.forEach(member => {
        const li = document.createElement('li');
        li.textContent = member;
        dynastyList.appendChild(li);
    });
});
