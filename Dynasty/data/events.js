export const events = [
    {
        text: "Une famine frappe votre royaume. Que faites-vous ?",
        decisions: [
            { 
                text: "Augmenter les impôts pour financer l'importation de vivres.",
                orientation : "popularity",
                bonus : "economy",
                result : "Votre popularité vous permet d'apaiser la population et d'améliorer votre gestion économique",
                shortTermEffects: { gold: 20, popularity: -10, army: 0 },
                longTermEffects: { gold: { amount: 5, duration: 2 }, popularity: { amount: -3, duration: 1 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Distribuer des vivres aux nécessiteux malgré le coût élevé.",
                orientation : "economy",
                bonus : "popularity",
                result : "Votre gestion économique permet une distribution plus équitable et augmente votre popularité.",
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
                orientation : "diplomacy",
                bonus : "diplomacy",
                result : "Vous réussissez à négocier plus de vivres supplémentaires",
                shortTermEffects: { gold: -10, popularity: 5, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 3, duration: 3 }, army: { amount: 0, duration: 0 } }
            }
        ]
    },
    {
        text: "Une épidémie se propage dans le royaume. Que faites-vous ?",
        decisions: [
            { 
                text: "Mettre en quarantaine les villages infectés.",
                orientation: "diplomacy",
                bonus: "popularity",
                result: "Votre stratégie limite la propagation de la maladie et améliore la santé publique.",
                shortTermEffects: { gold: -15, popularity: -5, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 0, duration: 0 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Distribuer des remèdes et des soins gratuits.",
                orientation: "economy",
                bonus: "popularity",
                result: "Votre initiative améliore la santé des citoyens et augmente votre popularité.",
                shortTermEffects: { gold: -20, popularity: 10, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 5, duration: 2 }, army: { amount: 0, duration: 0 } }
            }
        ]
    },
    {
        text: "Une révolte éclate dans une province éloignée.",
        decisions: [
            { 
                text: "Envoyer l'armée pour réprimer la révolte.",
                orientation: "army",
                bonus: "popularity",
                result: "Votre capacité militaire impressionnante permet une répression rapide et réduit les pertes.",
                shortTermEffects: { gold: -20, popularity: -15, army: -10 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: -5, duration: 1 }, army: { amount: -3, duration: 2 } }
            },
            { 
                text: "Négocier avec les rebelles pour trouver un compromis.",
                orientation: "diplomacy",
                bonus: "economy",
                result: "Vos talents de négociateur permettent un compromis qui satisfait les deux parties et améliore l'économie.",
                shortTermEffects: { gold: -10, popularity: 5, army: 0 },
                longTermEffects: { gold: { amount: -5, duration: 1 }, popularity: { amount: 5, duration: 2 }, army: { amount: 0, duration: 0 } }
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
        text: "Un groupe de mercenaires propose ses services. Que faites-vous ?",
        decisions: [
            { 
                text: "Engager les mercenaires pour renforcer l'armée.",
                orientation: "military",
                bonus: "army",
                result: "L'engagement des mercenaires renforce vos capacités défensives.",
                shortTermEffects: { gold: -25, popularity: 0, army: 15 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 0, duration: 0 }, army: { amount: 10, duration: 2 } }
            },
            { 
                text: "Refuser l'offre et renforcer l'armée locale.",
                orientation: "economy",
                bonus: "army",
                result: "Votre stratégie de renforcement local améliore l'efficacité de l'armée.",
                shortTermEffects: { gold: -15, popularity: 5, army: 10 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 2, duration: 2 }, army: { amount: 5, duration: 2 } }
            }
        ]
    },
    {
        text: "Des bandits pillent les routes commerciales. Que faites-vous ?",
        decisions: [
            { 
                text: "Envoyer des troupes pour protéger les routes.",
                orientation: "army",
                bonus: "economy",
                result: "La protection accrue des routes commerciales stimule l'économie.",
                shortTermEffects: { gold: -10, popularity: 0, army: -5 },
                longTermEffects: { gold: { amount: 10, duration: 2 }, popularity: { amount: 0, duration: 0 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Négocier avec les chefs des bandits pour une trêve.",
                orientation: "diplomacy",
                bonus: "popularity",
                result: "Votre diplomatie réussie réduit les attaques et augmente votre popularité.",
                shortTermEffects: { gold: -5, popularity: 5, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 5, duration: 1 }, army: { amount: 0, duration: 0 } }
            }
        ]
    },
    {
        text: "Un mystérieux prophète prêche dans votre royaume, suscitant des troubles. Que faites-vous ?",
        decisions: [
            { 
                text: "Arrêter le prophète et interdire ses prêches.",
                orientation: "popularity",
                bonus: "diplomacy",
                result: "Votre autorité ferme rétablit l'ordre et stabilise le royaume.",
                shortTermEffects: { gold: -5, popularity: -10, army: 5 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 0, duration: 0 }, army: { amount: 5, duration: 1 } }
            },
            { 
                text: "Ecouter les prêches et tenter d'intégrer les idées du prophète.",
                orientation: "diplomacy",
                bonus: "popularity",
                result: "Votre ouverture d'esprit augmente votre popularité et apaise les troubles.",
                shortTermEffects: { gold: 0, popularity: 10, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 5, duration: 2 }, army: { amount: 0, duration: 0 } }
            }
        ]
    },
    {
        text: "Une mine d'or est découverte dans vos terres. Que faites-vous ?",
        decisions: [
            { 
                text: "Exploiter la mine immédiatement pour augmenter les richesses.",
                orientation: "economy",
                bonus: "economy",
                result: "Votre décision rapide augmente considérablement la richesse du royaume.",
                shortTermEffects: { gold: 50, popularity: 5, army: 0 },
                longTermEffects: { gold: { amount: 20, duration: 3 }, popularity: { amount: 5, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Protéger la mine et attendre un meilleur moment pour l'exploiter.",
                orientation: "military",
                bonus: "economy",
                result: "Votre stratégie de protection assure la sécurité de la mine pour une exploitation future.",
                shortTermEffects: { gold: 0, popularity: 0, army: 10 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 0, duration: 0 }, army: { amount: 5, duration: 2 } }
            }
        ]
    },
    {
        text: "Un érudit propose de construire une bibliothèque pour le royaume. Que faites-vous ?",
        decisions: [
            { 
                text: "Financer la construction de la bibliothèque.",
                orientation: "economy",
                bonus: "popularity",
                result: "Votre investissement dans la bibliothèque améliore l'éducation et la culture du royaume.",
                shortTermEffects: { gold: -20, popularity: 10, army: 0 },
                longTermEffects: { gold: { amount: -5, duration: 2 }, popularity: { amount: 10, duration: 3 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Refuser et investir dans l'armée à la place.",
                orientation: "military",
                bonus: "army",
                result: "Votre investissement dans l'armée renforce les défenses du royaume.",
                shortTermEffects: { gold: -20, popularity: -5, army: 15 },
                longTermEffects: { gold: { amount: -5, duration: 2 }, popularity: { amount: 0, duration: 0 }, army: { amount: 10, duration: 2 } }
            }
        ]
    },
    {
        text: "Une mystérieuse caravane arrive à votre château, offrant des marchandises exotiques.",
        decisions: [
            { 
                text: "Acheter les marchandises pour enrichir votre trésor.",
                orientation: "economy",
                bonus: "gold",
                result: "Votre investissement dans les marchandises exotiques enrichit le trésor royal.",
                shortTermEffects: { gold: -30, popularity: 10, army: 0 },
                longTermEffects: { gold: { amount: 15, duration: 2 }, popularity: { amount: 5, duration: 1 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Offrir l'hospitalité à la caravane et accepter une alliance commerciale.",
                orientation: "diplomacy",
                bonus: "popularity",
                result: "Votre hospitalité renforce les relations diplomatiques et augmente votre popularité.",
                shortTermEffects: { gold: -10, popularity: 20, army: 0 },
                longTermEffects: { gold: { amount: 5, duration: 3 }, popularity: { amount: 10, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Expulser la caravane pour éviter tout risque de trahison.",
                orientation: "military",
                bonus: "army",
                result: "Votre prudence renforce la sécurité du royaume et augmente la vigilance de l'armée.",
                shortTermEffects: { gold: 0, popularity: -5, army: 10 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: -2, duration: 1 }, army: { amount: 5, duration: 2 } }
            }
        ]
    },
    {
        text: "Des tensions éclatent entre deux factions nobles de votre royaume.",
        decisions: [
            { 
                text: "Intervenir directement et imposer votre autorité.",
                orientation: "diplomacy",
                bonus: "popularity",
                result: "Votre autorité ferme stabilise la situation et renforce la paix dans le royaume.",
                shortTermEffects: { gold: -10, popularity: -10, army: 10 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: -5, duration: 1 }, army: { amount: 10, duration: 2 } }
            },
            { 
                text: "Médiatiser entre les factions pour trouver une solution pacifique.",
                orientation: "diplomacy",
                bonus: "popularity",
                result: "Votre médiation réussie augmente votre popularité et favorise la réconciliation.",
                shortTermEffects: { gold: -5, popularity: 15, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 10, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Ignorer le conflit et laisser les factions se gérer elles-mêmes.",
                orientation: "popularity",
                bonus: "economy",
                result: "Votre non-intervention permet de concentrer les ressources sur l'économie.",
                shortTermEffects: { gold: 10, popularity: -5, army: -5 },
                longTermEffects: { gold: { amount: 10, duration: 2 }, popularity: { amount: 0, duration: 0 }, army: { amount: 0, duration: 0 } }
            }
        ]
    },
    {
        text: "Un mystérieux artefact magique est découvert dans une grotte proche.",
        decisions: [
            { 
                text: "Étudier l'artefact pour comprendre ses pouvoirs.",
                orientation: "diplomacy",
                bonus: "military",
                result: "Votre recherche approfondie augmente votre connaissance de la magie.",
                shortTermEffects: { gold: -15, popularity: 10, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 5, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Utiliser l'artefact pour améliorer les défenses du royaume.",
                orientation: "military",
                bonus: "army",
                result: "Votre utilisation stratégique de l'artefact renforce les défenses du royaume.",
                shortTermEffects: { gold: -20, popularity: 0, army: 15 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 0, duration: 0 }, army: { amount: 10, duration: 2 } }
            },
            { 
                text: "Vendre l'artefact à un royaume voisin pour financer vos projets.",
                orientation: "economy",
                bonus: "gold",
                result: "La vente de l'artefact enrichit considérablement le trésor royal.",
                shortTermEffects: { gold: 50, popularity: -5, army: 0 },
                longTermEffects: { gold: { amount: 20, duration: 2 }, popularity: { amount: 0, duration: 0 }, army: { amount: 0, duration: 0 } }
            }
        ]
    },
    {
        text: "Un dragon attaque les villages à la frontière de votre royaume.",
        decisions: [
            { 
                text: "Envoyer des chevaliers pour affronter le dragon.",
                orientation: "army",
                bonus: "popularity",
                result: "Votre décision courageuse renforce la réputation de bravoure de votre armée.",
                shortTermEffects: { gold: -30, popularity: 20, army: -10 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 10, duration: 2 }, army: { amount: -5, duration: 2 } }
            },
            { 
                text: "Négocier avec le dragon pour trouver une solution pacifique.",
                orientation: "diplomacy",
                bonus: "military",
                result: "Votre diplomatie intelligente trouve une solution qui satisfait toutes les parties.",
                shortTermEffects: { gold: -10, popularity: 15, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 10, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Évacuer les villages et renforcer les défenses ailleurs.",
                orientation: "military",
                bonus: "army",
                result: "Votre stratégie préventive améliore la défense globale du royaume.",
                shortTermEffects: { gold: -20, popularity: -5, army: 5 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 0, duration: 0 }, army: { amount: 5, duration: 2 } }
            }
        ]
    },
    {
        text: "Un savant propose de construire un observatoire pour étudier les étoiles.",
        decisions: [
            { 
                text: "Financer la construction de l'observatoire.",
                orientation: "gold",
                bonus: "popularity",
                result: "Votre investissement dans l'observatoire améliore l'éducation et la culture du royaume.",
                shortTermEffects: { gold: -25, popularity: 15, army: 0 },
                longTermEffects: { gold: { amount: -5, duration: 2 }, popularity: { amount: 10, duration: 3 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Utiliser les fonds pour renforcer les infrastructures militaires.",
                orientation: "army",
                bonus: "military",
                result: "Votre investissement dans les infrastructures militaires renforce les défenses du royaume.",
                shortTermEffects: { gold: -25, popularity: 5, army: 15 },
                longTermEffects: { gold: { amount: -5, duration: 2 }, popularity: { amount: 5, duration: 2 }, army: { amount: 10, duration: 2 } }
            },
            { 
                text: "Refuser et économiser les fonds pour des projets futurs.",
                orientation: "economy",
                bonus: "gold",
                result: "Votre prudence financière augmente les ressources disponibles pour l'avenir.",
                shortTermEffects: { gold: 0, popularity: -10, army: 0 },
                longTermEffects: { gold: { amount: 10, duration: 2 }, popularity: { amount: -5, duration: 1 }, army: { amount: 0, duration: 0 } }
            }
        ]
    },
    {
        text: "Un rival politique tente de saper votre autorité.",
        decisions: [
            { 
                text: "Réagir avec force et emprisonner le rival.",
                shortTermEffects: { gold: -10, popularity: -10, army: 10 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: -5, duration: 1 }, army: { amount: 10, duration: 2 } }
            },
            { 
                text: "Défier le rival en duel pour prouver votre supériorité.",
                orientation: "military",
                bonus: "popularity",
                result: "Votre bravoure dans le duel augmente votre popularité et prouve votre supériorité.",
                shortTermEffects: { gold: 0, popularity: 20, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 10, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Ignorer les provocations et concentrer les ressources sur le royaume.",
                orientation: "diplomacy",
                bonus: "economy",
                result: "Votre stratégie calme et concentrée renforce l'économie du royaume.",
                shortTermEffects: { gold: 10, popularity: -5, army: 0 },
                longTermEffects: { gold: { amount: 10, duration: 2 }, popularity: { amount: 0, duration: 0 }, army: { amount: 0, duration: 0 } }
            }
        ]
    },
    {
        text: "Une rumeur se répand qu'un complot se trame contre votre règne.",
        decisions: [
            { 
                text: "Enquêter discrètement sur les conspirateurs.",
                orientation: "gold",
                bonus: "popularity",
                result: "Votre enquête discrète permet de déjouer le complot et retourne la situation à votre avantage.",
                shortTermEffects: { gold: -10, popularity: 5, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 5, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Arrêter immédiatement tous les suspects.",
                result: "Votre autorité ferme met fin au complot et renforce la sécurité du royaume.",
                shortTermEffects: { gold: -5, popularity: -10, army: 10 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: -5, duration: 1 }, army: { amount: 10, duration: 2 } }
            },
            { 
                text: "Ignorer la rumeur pour éviter la panique.",
                orientation: "diplomacy",
                bonus: "diplomacy",
                result: "Votre calme face à la rumeur rassure vos sujets et évite la panique.",
                shortTermEffects: { gold: 0, popularity: 10, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 5, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Renforcer la garde autour de vous et de votre famille.",
                orientation: "military",
                bonus: "army",
                result: "Votre prudence renforce la sécurité personnelle et celle de votre famille.",
                shortTermEffects: { gold: -15, popularity: 0, army: 10 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 0, duration: 0 }, army: { amount: 10, duration: 2 } }
            }
        ]
    },
    {
        text: "Un tremblement de terre détruit plusieurs villages.",
        decisions: [
            { 
                text: "Envoyer des ressources pour aider les sinistrés.",
                orientation: "economy",
                bonus: "popularity",
                result: "Votre générosité accroît votre popularité et aide à la reconstruction.",
                shortTermEffects: { gold: -30, popularity: 20, army: 0 },
                longTermEffects: { gold: { amount: -10, duration: 2 }, popularity: { amount: 10, duration: 3 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Réquisitionner les villages voisins pour loger les sinistrés.",
                orientation: "diplomacy",
                bonus: "popularity",
                result: "Votre autorité stabilise rapidement la situation et améliore la gestion des sinistrés.",
                shortTermEffects: { gold: -20, popularity: -5, army: 0 },
                longTermEffects: { gold: { amount: -5, duration: 2 }, popularity: { amount: -5, duration: 1 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Organiser une collecte de fonds pour aider à la reconstruction.",
                orientation: "diplomacy",
                bonus: "economy",
                result: "Votre initiative diplomatique lève des fonds importants et renforce la solidarité.",
                shortTermEffects: { gold: 20, popularity: 10, army: 0 },
                longTermEffects: { gold: { amount: 10, duration: 3 }, popularity: { amount: 5, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Ignorer les dégâts et se concentrer sur la défense du royaume.",
                shortTermEffects: { gold: 0, popularity: -10, army: 10 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: -5, duration: 1 }, army: { amount: 10, duration: 2 } }
            }
        ]
    },
    {
        text: "Des marchands étrangers proposent un échange culturel et commercial.",
        decisions: [
            { 
                text: "Accepter l'échange pour enrichir la culture du royaume.",
                orientation: "economy",
                bonus: "popularity",
                result: "Votre ouverture culturelle améliore l'éducation et la connaissance du royaume.",
                shortTermEffects: { gold: -10, popularity: 15, army: 0 },
                longTermEffects: { gold: { amount: -5, duration: 2 }, popularity: { amount: 10, duration: 3 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Négocier un traité commercial avantageux.",
                orientation: "economy",
                bonus: "gold",
                result: "Votre traité commercial augmente la richesse du royaume.",
                shortTermEffects: { gold: 30, popularity: 10, army: 0 },
                longTermEffects: { gold: { amount: 15, duration: 3 }, popularity: { amount: 5, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Refuser l'échange pour protéger la culture locale.",
                shortTermEffects: { gold: 0, popularity: -5, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: -5, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Accueillir les marchands mais surveiller leurs activités.",
                shortTermEffects: { gold: -5, popularity: 0, army: 10 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 0, duration: 0 }, army: { amount: 10, duration: 2 } }
            }
        ]
    },
    {
        text: "Un héros légendaire arrive au royaume, offrant ses services.",
        decisions: [
            { 
                text: "Accepter son aide pour renforcer l'armée.",
                shortTermEffects: { gold: -20, popularity: 10, army: 20 },
                longTermEffects: { gold: { amount: -5, duration: 2 }, popularity: { amount: 5, duration: 2 }, army: { amount: 20, duration: 3 } }
            },
            { 
                text: "Lui confier une mission diplomatique pour établir de nouvelles alliances.",
                orientation: "diplomacy",
                bonus: "popularity",
                result: "Sa mission diplomatique renforce les alliances et augmente votre popularité.",
                shortTermEffects: { gold: -10, popularity: 20, army: 0 },
                longTermEffects: { gold: { amount: -5, duration: 2 }, popularity: { amount: 10, duration: 3 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Le charger de la protection des frontières.",
                shortTermEffects: { gold: -15, popularity: 5, army: 10 },
                longTermEffects: { gold: { amount: -5, duration: 2 }, popularity: { amount: 5, duration: 2 }, army: { amount: 15, duration: 2 } }
            },
            { 
                text: "Refuser son aide pour ne pas dépendre d'une seule personne.",
                shortTermEffects: { gold: 0, popularity: -10, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: -5, duration: 2 }, army: { amount: 0, duration: 0 } }
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
        text: "Une alliance étrangère propose un pacte commercial. Que faites-vous ?",
        decisions: [
            { 
                text: "Accepter le pacte et ouvrir de nouvelles routes commerciales.",
                orientation: "economy",
                bonus: "gold",
                result: "Votre acceptation du pacte commercial augmente la richesse du royaume.",
                shortTermEffects: { gold: 30, popularity: 5, army: 0 },
                longTermEffects: { gold: { amount: 10, duration: 3 }, popularity: { amount: 2, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Refuser le pacte pour protéger les artisans locaux.",
                orientation: "diplomacy",
                bonus: "popularity",
                result: "Votre décision de protéger les artisans locaux renforce leur loyauté envers vous.",
                shortTermEffects: { gold: -10, popularity: 10, army: 0 },
                longTermEffects: { gold: { amount: -5, duration: 1 }, popularity: { amount: 5, duration: 2 }, army: { amount: 0, duration: 0 } }
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
    //Recrutement de conseillers
    {
        text: "Un célèbre général propose ses services pour renforcer votre armée.",
        generate : ["male-firstname", "skills", "adult-age", "male-housename"],
        decisions: [
            { 
                text: "L'accepter comme chef des armées pour améliorer la défense du royaume.",
                orientation: "military",
                bonus: "army",
                result: "Le général renforce considérablement la défense de votre royaume.",
                special: {
                    type: 'council-military',
                    spouse: {
                        name: "X",
                        age: "Y",
                        genre : "male",
                        skills: { economy: 3, diplomacy: 3, military: 5 }
                    }
                },
                shortTermEffects: { gold: -25, popularity: 5, army: 20 },
                longTermEffects: { gold: { amount: -10, duration: 2 }, popularity: { amount: 5, duration: 2 }, army: { amount: 20, duration: 3 } }
            },
            { 
                text: "Refuser son aide pour promouvoir des talents locaux.",
                orientation: "military",
                bonus: "popularity",
                result: "Votre décision de promouvoir les talents locaux renforce la loyauté et l'unité du royaume.",
                shortTermEffects: { gold: 0, popularity: 20, army: 5 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: 10, duration: 3 }, army: { amount: 5, duration: 2 } }
            }
        ]
    },
    {
        text: "Un grand diplomate souhaite rejoindre votre cour pour améliorer les relations extérieures.",
        generate : ["male-firstname", "skills", "adult-age", "male-housename"],
        decisions: [
            { 
                text: "L'accepter comme conseiller diplomatique pour renforcer les alliances.",
                special: {
                    type: 'council-diplomacy',
                    spouse: {
                        name: "X",
                        age: "Y",
                        genre : "male",
                        skills: { economy: 3, diplomacy: 5, military: 3 }
                    }
                },
                shortTermEffects: { gold: -10, popularity: 20, army: 0 },
                longTermEffects: { gold: { amount: -5, duration: 2 }, popularity: { amount: 10, duration: 3 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Le charger des négociations commerciales.",
                orientation: "economy",
                bonus: "gold",
                result: "Les négociations commerciales du diplomate enrichissent le royaume.",
                special: {
                    type: 'council-economy',
                    spouse: {
                        name: "X",
                        age: "Y",
                        genre : "male",
                        skills: { economy: 5, diplomacy: 5, military: 3 }
                    }
                },
                shortTermEffects: { gold: 30, popularity: 15, army: 0 },
                longTermEffects: { gold: { amount: 15, duration: 3 }, popularity: { amount: 10, duration: 3 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Refuser son aide pour se concentrer sur les affaires intérieures.",
                shortTermEffects: { gold: 0, popularity: -10, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: -5, duration: 2 }, army: { amount: 0, duration: 0 } }
            }
        ]
    },
    {
        text: "Un riche marchand propose de devenir votre conseiller économique.",
        generate : ["male-firstname", "skills", "adult-age", "male-housename"],
        decisions: [
            { 
                text: "L'accepter comme conseiller économique pour booster l'économie.",
                orientation: "economy",
                bonus: "gold",
                result: "Le marchand augmente significativement la richesse de votre royaume.",
                special: {
                    type: 'council-economy',
                    spouse: {
                        name: "X",
                        age: "Y",
                        genre : "male",
                        skills: { economy: 5, diplomacy: 3, military: 3 }
                    }
                },
                shortTermEffects: { gold: 40, popularity: 10, army: 0 },
                longTermEffects: { gold: { amount: 20, duration: 3 }, popularity: { amount: 5, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Refuser son aide pour ne pas dépendre de la richesse extérieure.",
                shortTermEffects: { gold: 0, popularity: -5, army: 0 },
                longTermEffects: { gold: { amount: 0, duration: 0 }, popularity: { amount: -5, duration: 2 }, army: { amount: 0, duration: 0 } }
            }
        ]
    },
    {
        text: "Vous devez choisir un nouveau conseiller militaire parmi trois candidats.",
        generate : ["male-firstname", "male-housename"],
        decisions: [
            { 
                text: "Choisir le général expérimenté pour sa sagesse et son savoir-faire.",
                special: {
                    type: 'council-military',
                    spouse: {
                        name: "X",
                        age: 35,
                        genre : "male",
                        skills: { economy: 1, diplomacy: 4, military: 6 }
                    }
                },
                shortTermEffects: { gold: -20, popularity: 10, army: 20 },
                longTermEffects: { gold: { amount: -5, duration: 3 }, popularity: { amount: 5, duration: 3 }, army: { amount: 20, duration: 3 } }
            },
            { 
                text: "Choisir le jeune officier prometteur pour son dynamisme et ses nouvelles idées.",
                special: {
                    type: 'council-military',
                    spouse: {
                        name: "X",
                        age: 24,
                        genre : "male",
                        skills: { economy: 3, diplomacy: 2, military: 3 }
                    }
                },
                shortTermEffects: { gold: -15, popularity: 15, army: 15 },
                longTermEffects: { gold: { amount: -5, duration: 2 }, popularity: { amount: 10, duration: 3 }, army: { amount: 15, duration: 3 } }
            },
            { 
                text: "Choisir le vétéran loyal pour sa dévotion et son esprit de corps.",
                special: {
                    type: 'council-military',
                    spouse: {
                        name: "X",
                        age: 58,
                        genre : "male",
                        skills: { economy: 3, diplomacy: 5, military: 3 }
                    }
                },
                shortTermEffects: { gold: -10, popularity: 20, army: 10 },
                longTermEffects: { gold: { amount: -5, duration: 2 }, popularity: { amount: 10, duration: 3 }, army: { amount: 10, duration: 3 } }
            }
        ]
    },
    {
        text: "Vous devez choisir un nouveau conseiller économique parmi trois candidats.",
        generate : ["male-firstname", "male-housename"],
        decisions: [
            { 
                text: "Choisir le financier aguerri pour optimiser les revenus du royaume.",
                special: {
                    type: 'council-economy',
                    spouse: {
                        name: "X",
                        age: 45,
                        genre : "male",
                        skills: { economy: 5, diplomacy: 2, military: 1 }
                    }
                },
                shortTermEffects: { gold: 30, popularity: 10, army: 0 },
                longTermEffects: { gold: { amount: 15, duration: 3 }, popularity: { amount: 5, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Choisir l'entrepreneur innovant pour dynamiser le commerce.",
                special: {
                    type: 'council-economy',
                    spouse: {
                        name: "X",
                        age: 41,
                        genre : "male",
                        skills: { economy: 3, diplomacy: 3, military: 2 }
                    }
                },
                shortTermEffects: { gold: 20, popularity: 15, army: 0 },
                longTermEffects: { gold: { amount: 10, duration: 3 }, popularity: { amount: 10, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Choisir l'économiste social pour améliorer le bien-être de la population.",
                special: {
                    type: 'council-economy',
                    spouse: {
                        name: "X",
                        age: 48,
                        genre : "male",
                        skills: { economy: 2, diplomacy: 5, military: 1 }
                    }
                },
                shortTermEffects: { gold: 10, popularity: 20, army: 0 },
                longTermEffects: { gold: { amount: 5, duration: 2 }, popularity: { amount: 10, duration: 3 }, army: { amount: 0, duration: 0 } }
            }
        ]
    },
    {
        text: "Vous devez choisir un nouveau conseiller diplomatique parmi trois candidats.",
        generate : ["male-firstname", "male-housename"],
        decisions: [
            { 
                text: "Choisir l'ambassadeur chevronné pour ses réseaux internationaux.",
                special: {
                    type: 'council-diplomacy',
                    spouse: {
                        name: "X",
                        age: 36,
                        genre : "male",
                        skills: { economy: 3, diplomacy: 5, military: 2 }
                    }
                },
                shortTermEffects: { gold: -10, popularity: 20, army: 0 },
                longTermEffects: { gold: { amount: -5, duration: 2 }, popularity: { amount: 10, duration: 3 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Choisir le négociateur astucieux pour ses talents en négociation.",
                special: {
                    type: 'council-diplomacy',
                    spouse: {
                        name: "X",
                        age: 28,
                        genre : "male",
                        skills: { economy: 2, diplomacy: 6, military: 1 }
                    }
                },
                shortTermEffects: { gold: 30, popularity: 10, army: 0 },
                longTermEffects: { gold: { amount: 15, duration: 3 }, popularity: { amount: 5, duration: 2 }, army: { amount: 0, duration: 0 } }
            },
            { 
                text: "Choisir le pacificateur pour sa capacité à résoudre les conflits.",
                special: {
                    type: 'council-diplomacy',
                    spouse: {
                        name: "X",
                        age: 36,
                        genre : "male",
                        skills: { economy: 1, diplomacy: 4, military: 3 }
                    }
                },
                shortTermEffects: { gold: -5, popularity: 25, army: 0 },
                longTermEffects: { gold: { amount: -5, duration: 2 }, popularity: { amount: 10, duration: 3 }, army: { amount: 0, duration: 0 } }
            }
        ]
    },
    // Evenements de mariage
    {
        text: "Une princesse étrangère propose de vous épouser.",
        conditional : ["no-spouse", "is-male"],
        generate : ["female-firstname", "skills"],
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
        generate : ["female-firstname", "skills"],
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
        generate : ["male-firstname", "skills"],
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
        generate : ["male-firstname", "skills"],
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
        generate : ["male-child-firstname"],
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
        generate : ["female-child-firstname"],
        decisions: [
            {
                text: "Célébrer la naissance de X",
                shortTermEffects: [],
                longTermEffects: [],
                special: { type: 'childbirth', child: { name: "X", genre:"female", age: 0, skills: { economy: 0, diplomacy: 0, military: 0 } } }
            },
            {
                text: "Célébrer la naissance de X",
                shortTermEffects: [],
                longTermEffects: [],
                special: { type: 'childbirth', child: { name: "X", genre:"female", age: 0, skills: { economy: 0, diplomacy: 0, military: 0 } } }
            },
            {
                text: "Célébrer la naissance de X",
                shortTermEffects: [],
                longTermEffects: [],
                special: { type: 'childbirth', child: { name: "X", genre:"female", age: 0, skills: { economy: 0, diplomacy: 0, military: 0 } } }
            },
        ]
    },
    {
        text: "Vous n'avez aucun héritier... Voulez-vous adopter parmi les orphelins du Royaume?",
        conditional : ["no-child"],
        generate : ["male-child-firstname", "age"],
        decisions: [
            {
                text: "Adopter X, âgé de Y ans",
                shortTermEffects: [{ type: 'popularity', value: -5 }],
                longTermEffects: [],
                special: { type: 'adopt', child: { name: "X", genre:"male", age: 0, skills: { economy: 0, diplomacy: 0, military: 0 } } }
            },
            {
                text: "Adopter X, âgé de Y ans",
                shortTermEffects: [{ type: 'popularity', value: -5 }],
                longTermEffects: [],
                special: { type: 'adopt', child: { name: "X", genre:"male", age: 0, skills: { economy: 0, diplomacy: 0, military: 0 } } }
            },
            {
                text: "Adopter X, âgé de Y ans",
                shortTermEffects: [{ type: 'popularity', value: -5 }],
                longTermEffects: [],
                special: { type: 'adopt', child: { name: "X", genre:"male", age: 0, skills: { economy: 0, diplomacy: 0, military: 0 } } }
            },
            {
                text : "Refuser, ce serait créer des tensions inutiles",
                shortTermEffects: [],
                longTermEffects: [],
            }
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