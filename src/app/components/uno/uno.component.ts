import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { ACTION_CAMBIO_MENSAJE, ACTION_CAMBIO_VALOR } from 'src/app/store/actions/actions.types';
import MessageState from 'src/app/store/config/messageState.interface';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.sass']
})
export class UnoComponent implements OnInit {

  // Variables locales
  nuevoMensaje = '';
  valor = false;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    // Cuando cargamos el componente vamos a obtener el estado y sus valores
    this.storeService.getState('messageState').subscribe((state: MessageState) => {
      this.nuevoMensaje = state.mensaje;
      this.valor = state.valor;
    });
  }

  /**
   * Método para cambiar el mensaje en el STORE
   */
  cambiarMensaje() {
    console.log('Vamos a cambiar el mensaje en el MessageState');
    this.storeService.updateState({
      type: ACTION_CAMBIO_MENSAJE,
      payload: this.nuevoMensaje
    })
  }

  /**
   * Método para cambiar el valor en el STORE
   */
   cambiarValor() {
    console.log('Vamos a cambiar el valor en el MessageState');
    this.storeService.updateState({
      type: ACTION_CAMBIO_VALOR,
      payload: !this.valor
    })
  }

}
