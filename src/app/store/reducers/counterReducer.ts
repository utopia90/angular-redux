import { Action } from "../actions/action.interface";
import { ACTION_INCREASE_COUNTER} from "../actions/actions.types";
import CounterState from "../config/counterState.interface";

// Estado inicial paraounter el Reducer
// Sirve para que cuando se inicie la aplicación,
// El Store tenga unos datos iniciales
// Usamos la Interface para el Estado
const initialState: CounterState = {
  counter: 0
}


// Creamos una función pura que será el reducer
export function counterReducer(state = initialState, action: Action): CounterState {
  switch (action.type) {
    case ACTION_INCREASE_COUNTER:
      return {
        ...state, // Replicamos el estado inicial (... te devuelve todos los elementos de state)
        counter: action.payload //
      }
  }

  // En caso de que no entre en por estos tipos de mensajes, tenemos que
  // devolver el estado sin tocarlo
  return state;
}
