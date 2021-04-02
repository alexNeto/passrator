import {createAction, props} from "@ngrx/store";

export const update = createAction('[Password Generator] update', props<{generatedPasswords: string[]}>());
