import {createReducer, on} from '@ngrx/store';
import {update} from './password.actions';

export const initialState: string[] = [];

const _passwordGeneratorReducer = createReducer(
  initialState,
  on(update, (state, {generatedPasswords}) => generatedPasswords)
);

export const passwordGeneratorReducer = _passwordGeneratorReducer;
