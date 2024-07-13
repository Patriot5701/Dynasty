export const events = [
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
    // Evenements de mariage
    {
        text: "Une princesse étrangère propose de vous épouser.",
        conditional : ["no-spouse", "is-male"],
        generate : "female-firstname",
        decisions: [
            {
                text: "Accepter et épouser la princesse X",
                shortTermEffects: [],
                longTermEffects: [],
                special: {
                    type: 'marriage',
                    spouse: {
                        name: "X",
                        age: 18,
                        genre : "female",
                        skills: { economy: 7, diplomacy: 6, military: 5 }
                    }
                }
            },
            {
                text: "Refuser l'offre",
                shortTermEffects: [{ type: 'popularity', value: -10 }],
                longTermEffects: []
            }
        ]
    },
    {
        text: "Une noble locale souhaite se marier avec vous.",
        conditional : ["no-spouse", "is-male"],
        generate : "female-firstname",
        decisions: [
            {
                text: "Accepter et épouser la noble X",
                shortTermEffects: [],
                longTermEffects: [],
                special: {
                    type: 'marriage',
                    spouse: {
                        name: "X",
                        age: 20,
                        genre : "female",
                        skills: { economy: 5, diplomacy: 7, military: 6 }
                    }
                }
            },
            {
                text: "Refuser l'offre",
                shortTermEffects: [{ type: 'popularity', value: -5 }],
                longTermEffects: []
            }
        ]
    },
    {
        text: "Un prince étranger propose de vous épouser.",
        conditional : ["no-spouse", "is-female"],
        generate : "male-firstname",
        decisions: [
            {
                text: "Accepter et épouser le prince X",
                shortTermEffects: [],
                longTermEffects: [],
                special: {
                    type: 'marriage',
                    spouse: {
                        name: "X",
                        age: 18,
                        genre : "male",
                        skills: { economy: 7, diplomacy: 6, military: 5 }
                    }
                }
            },
            {
                text: "Refuser l'offre",
                shortTermEffects: [{ type: 'popularity', value: -10 }],
                longTermEffects: []
            }
        ]
    },
    {
        text: "Un noble local souhaite se marier avec vous.",
        conditional : ["no-spouse", "is-female"],
        generate : "male-firstname",
        decisions: [
            {
                text: "Accepter et épouser le noble X",
                shortTermEffects: [],
                longTermEffects: [],
                special: {
                    type: 'marriage',
                    spouse: {
                        name: "X",
                        age: 20,
                        genre : "male",
                        skills: { economy: 5, diplomacy: 7, military: 6 }
                    }
                }
            },
            {
                text: "Refuser l'offre",
                shortTermEffects: [{ type: 'popularity', value: -5 }],
                longTermEffects: []
            }
        ]
    },
    // Événement pour avoir un enfant
    {
        text: "Un héritier potentiel est né!",
        conditional : ["spouse"],
        generate : "male-child-firstname",
        decisions: [
            {
                text: "Célébrer la naissance de X",
                shortTermEffects: [],
                longTermEffects: [],
                special: { type: 'childbirth', child: { name: "X", genre:"male", age: 0, skills: { economy: 0, diplomacy: 0, military: 0 } } }
            },
            {
                text: "Célébrer la naissance de X",
                shortTermEffects: [],
                longTermEffects: [],
                special: { type: 'childbirth', child: { name: "X", genre:"male", age: 0, skills: { economy: 0, diplomacy: 0, military: 0 } } }
            },
            {
                text: "Célébrer la naissance de X",
                shortTermEffects: [],
                longTermEffects: [],
                special: { type: 'childbirth', child: { name: "X", genre:"male", age: 0, skills: { economy: 0, diplomacy: 0, military: 0 } } }
            },
        ]
    },
    {
        text: "Une fille est née!",
        conditional : ["spouse"],
        generate : "female-child-firstname",
        decisions: [
            {
                text: "Célébrer la naissance de X",
                shortTermEffects: [],
                longTermEffects: [],
                special: { type: 'childbirth', child: { name: "X", genre:"male", age: 0, skills: { economy: 0, diplomacy: 0, military: 0 } } }
            },
            {
                text: "Célébrer la naissance de X",
                shortTermEffects: [],
                longTermEffects: [],
                special: { type: 'childbirth', child: { name: "X", genre:"male", age: 0, skills: { economy: 0, diplomacy: 0, military: 0 } } }
            },
            {
                text: "Célébrer la naissance de X",
                shortTermEffects: [],
                longTermEffects: [],
                special: { type: 'childbirth', child: { name: "X", genre:"male", age: 0, skills: { economy: 0, diplomacy: 0, military: 0 } } }
            },
        ]
    },

    // Événement pour améliorer les compétences de l'enfant
    {
        text: "Votre enfant montre un intérêt pour l'économie.",
        conditional : ["child"],
        decisions: [
            {
                text: "Encourager cet intérêt",
                shortTermEffects: [],
                longTermEffects: [],
                special: { type: 'trainChild', skill: 'economy', value: 1 }
            }
        ]
    },
    {
        text: "Votre enfant montre un talent pour la diplomatie.",
        conditional : ["child"],
        decisions: [
            {
                text: "Encourager ce talent",
                shortTermEffects: [],
                longTermEffects: [],
                special: { type: 'trainChild', skill: 'diplomacy', value: 1 }
            }
        ]
    },
    {
        text: "Votre enfant montre une aptitude pour le militaire.",
        conditional : ["child"],
        decisions: [
            {
                text: "Encourager cette aptitude",
                shortTermEffects: [],
                longTermEffects: [],
                special: { type: 'trainChild', skill: 'military', value: 1 }
            }
        ]
    }
];