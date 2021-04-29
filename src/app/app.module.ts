import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// NGRX (REDUX)
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppComponent } from './app.component';
import { RootReducer } from './store/reducers/rootReducer';
import { UnoComponent } from './components/uno/uno.component';
import { DosComponent } from './components/dos/dos.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    DosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Añadimos los módulos para trabajar con NGRX (Redux)
    // * 1. Configuramos el STORE con el Root Reducer
    // Esto creará un STORE compuesto de todos lo STATES
    // y con los Initial States de cada Reducer
    StoreModule.forRoot(RootReducer, {}),
    // * 2. Configuramos la herramienta para analizar el STORE de la aplicación
    // desde el navegador
    StoreDevtoolsModule.instrument(
      {
        maxAge: 10, // Especificamos el número de acciones que se persisten en el tiempo
      }
    ),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
