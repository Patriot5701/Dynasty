import { firstnames, houses } from "../data/names.js"

export const Adapter = {
    findName : function(sex, culture){
        switch (sex) {
            case "male":
                switch (culture) {
                    case "got":
                        return firstnames.male.got[Math.floor(Math.random() * firstnames.male.got.length)]
                    default:
                        return firstnames.male.got[Math.floor(Math.random() * firstnames.male.got.length)]
                }
            case "female":
                switch (culture) {
                    case "got":
                        return firstnames.female.got[Math.floor(Math.random() * firstnames.female.got.length)]
                    default:
                        return firstnames.female.got[Math.floor(Math.random() * firstnames.female.got.length)]
                }    
            default:
                return firstnames.male.got[Math.floor(Math.random() * firstnames.male.got.length)]
        }
        
    },
    findHouse : function(){
        return houses[Math.floor(Math.random() * houses.length)]
    }
}