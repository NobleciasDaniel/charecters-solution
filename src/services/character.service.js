import {CharacterStore} from "../libs/stores/character.store";

export class CharacterServices {
    static getMock = () => {
        return {
            "name": "Harry Potter",
            "species": "human",
            "gender": "male",
            "house": "Gryffindor",
            "dateOfBirth": "31-07-1980",
            "yearOfBirth": 1980,
            "ancestry": "half-blood",
            "eyeColour": "green",
            "hairColour": "black",
            "wand": {
                "wood": "holly",
                "core": "phoenix feather",
                "length": 11
            },
            "patronus": "stag",
            "hogwartsStudent": true,
            "hogwartsStaff": false,
            "actor": "Daniel Radcliffe",
            "alive": true,
            "image": "http://hp-api.herokuapp.com/images/harry.jpg"
        }
    }

    static getCharacters() {
        CharacterStore.add(this.getMock());
    }
}
