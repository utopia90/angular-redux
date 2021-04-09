// El RootReducer es el Reducer que va a englobar todos los Reducers
// que apliquen a un Store

import { ActionReducerMap } from "@ngrx/store";
import { Action } from "../actions/action.interface";
import { AppStore } from "../config/appStore.interface";
import { messageReducer } from "./messageReducer";

// El Reducer devolverá un conjunto de:
// estado : reducer que lo controla
// Nos aseguramos de que se mapee correctamente la Interface del STORE y las ACTIONS
export const RootReducer: ActionReducerMap<AppStore, Action> = {
  // estado: reducer
  messageState: messageReducer
  // Aquí iríamos poniendo el resto de STATES y sus correspondientes REDUCERS
}
