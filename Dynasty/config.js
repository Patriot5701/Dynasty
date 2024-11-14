export const config = {
    version : "0.2.1",
    //HotFix, Patch, Feature/extension, mise a jour
    patchs : [
        {
            type : 'Feature',
            version : '0.2.0',
            date : "07/08/2024",
            title : "Version mobile",
            content : [
                {
                    div : 'h3',
                    content : 'Nouveau design en version mobile'
                },
                {
                    div : 'p',
                    content : 'The Great Medieval Dynasty est maintenant disponible en version mobile et format portrait !'
                },
                {
                    div : 'p',
                    content : "Si en format paysage nous avons 3 vues pour 1 page, le format portrait contient 1 page par vue. Pour se déplacer de l'une à l'autre, il suffit de scroller vers le haut ou vers le bas."
                },
                {
                    div : 'p',
                    content : "Pour plus de cohérence, la vue principale précède la vue 'Famille Royale', contrairement à la méthode paysage, où la vue principale se trouve entre les deux autres."
                },
            ]
        },
        {
            type : 'Extension',
            version : "0.1.0",
            date : "01/08/2024",
            title : "Cour Royale",
            content : [
                {
                    div : 'h3',
                    content : 'Nouveau système de personnages et de compétences',
                },
                {
                    div : 'h4',
                    content : 'Personnages',
                },
                {
                    div : 'p',
                    content : 'Ajoutez des personnages avec des compétences spécifiques qui influencent le royaume :',
                },
                {
                    div : 'li',
                    content : "La Reine, permettant d'enfanter.",
                },
                {
                    div : 'li',
                    content : 'Les Conseillers, à des postes précis, vous aidant dans votre tâche.',
                },
                {
                    div : 'h4',
                    content : 'Compétences',
                },
                {
                    div : 'p',
                    content : 'Chaque personnage peut avoir des compétences qui influencent les décisions et les événements :',
                },
                {
                    div : 'li',
                    content : "Économie : Influence la collecte de l'or et les décisions économiques.",
                },
                {
                    div : 'li',
                    content : "Diplomatie : Influence les relations avec d'autres royaumes.",
                },
                {
                    div : 'li',
                    content : "Militaire : Influence la force de l'armée et les décisions militaires.",
                },
            ]
        },
    ]
}
