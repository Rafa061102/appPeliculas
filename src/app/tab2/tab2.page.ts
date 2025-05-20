import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../componentes/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone:false
})
export class Tab2Page {

  textoBuscar = '';
  buscando = false;
  peliculas: Pelicula[] = [];
  ideas: string[] = ['Spiderman', 'Avenger', 'El señor de los anillos', 'La vida es bella'];

  constructor( private moviesService: MoviesService,
               private modalCtrl: ModalController) { }

  buscar( event: CustomEvent ) {
    const valor: string = event.detail.value;

    if ( valor.length === 0 ) {
      this.buscando = false;
      this.peliculas = [];
      return;
    }

    // console.log(valor);
    this.buscando = true;

    this.moviesService.buscarPeliculas( valor )
        .subscribe( resp => {
          console.log( resp );
          this.peliculas = resp['results'];
          this.buscando = false;
        });
  }

  async detalle( id: string ) {

    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();

  }


  // Se agrego esta funcion para que con la lista si se pueda buscar 
  seleccionarIdea(idea: string) {
  this.textoBuscar = idea;

  // Creamos un objeto simulado para que buscar() lo procese igual que ionChange
  const eventoFalso = { detail: { value: idea } } as CustomEvent;
  this.buscar(eventoFalso);
}

// Esta funcion limpia la busqueda 
limpiarBusqueda() {
  this.textoBuscar = '';
  this.peliculas = [];
  this.buscando = false;
}



}
