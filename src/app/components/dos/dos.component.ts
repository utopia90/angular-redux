import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import CounterState from 'src/app/store/config/counterState.interface';
import MessageState from 'src/app/store/config/messageState.interface';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.sass']
})
export class DosComponent implements OnInit {

  mensaje: string = '';
  valor:boolean = false;
  contador:number=0;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    /**
     * Cargamos todos los datos que necesita el componente
     * - mensaje y valor
     */
    this.storeService.getState('messageState').subscribe((state: MessageState) => {
      this.mensaje = state.mensaje;
      this.valor = state.valor;
    });

    this.storeService.getState('counterState').subscribe((state: CounterState) => {
      this.contador = state.counter;
    });
  }

}
