// Creamos una interface que servirá como blueprint de el STORE de la aplicación
// Es decir, los STATES que comprondrán el STORE y sus tipos

import MessageState from "./messageState.interface";

export interface AppStore {
  messageState: MessageState;
  // Aquí añadiríamos el resto de STATES que vinieran más adelante
}
