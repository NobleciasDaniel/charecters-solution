import {createEntityQuery} from "@datorama/akita";
import {CharacterStore} from "../stores/character.store";

export const CharacterQuery = createEntityQuery(CharacterStore);
