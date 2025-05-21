import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';



@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
  standalone:false
})
export class DetalleComponent implements OnInit {
  @Input() id!: string; 

  pelicula: PeliculaDetalle = {};
  actores: Cast[] = [];
  oculto = 150;
  estrella = 'star-outline';

  constructor( private moviesService: MoviesService,
               private modalCtrl: ModalController,
               private dataLocal: DataLocalService 
               ) { } 
  ngOnInit() {
     console.log('ID', this.id );


    this.moviesService.getPeliculaDetalle( this.id )
        .subscribe( resp => {
          console.log( resp );
          this.pelicula = resp;
        });

    this.moviesService.getActoresPelicula( this.id )
        .subscribe( resp => {
          console.log( resp );
          this.actores = resp.cast;
        });

  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  async favorito() {
  const existe = await this.dataLocal.guardarPelicula(this.pelicula);
  this.estrella = (existe) ? 'star' : 'star-outline';
}

}
