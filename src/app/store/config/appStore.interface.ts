// Creamos una interface que servirá como blueprint de el STORE de la aplicación
// Es decir, los STATES que comprondrán el STORE y sus tipos

import CounterState from "./counterState.interface";
import MessageState from "./messageState.interface";

export interface AppStore {
  messageState: MessageState;
  counterState:CounterState;
  // Aquí añadiríamos el resto de STATES que vinieran más adelante
}
