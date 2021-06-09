import {createEntityStore} from "@datorama/akita";

export const CharacterStore = createEntityStore({}, {name:"CharacterStore", idKey:"name"});
