import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ImagenPipe } from '../pipes/imagen.pipe';




@NgModule({
//  entryComponents:[DetalleComponent],
  declarations: [
    SlideshowBackdropComponent,
    SlideshowParesComponent,
    SlideshowPosterComponent,
    DetalleComponent,

  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowParesComponent,
    SlideshowPosterComponent,
    DetalleComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
  //  MoviesService

  ]
})
export class ComponentesModule { }
