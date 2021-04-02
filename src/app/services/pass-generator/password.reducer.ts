import {createReducer, on} from '@ngrx/store';
import {update} from './password.actions';

export const initialState: string[] = [];

const createPasswordGeneratorReducer = createReducer(
  initialState,
  on(update, (state, {generatedPasswords}) => generatedPasswords)
);

export const passwordGeneratorReducer = createPasswordGeneratorReducer;
