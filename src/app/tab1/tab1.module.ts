import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Swiper, SwiperModule } from 'swiper/types';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { PipesModule } from '../pipes/pipes.module';
import { ComponentesModule } from '../componentes/componentes.module';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    PipesModule,
    ComponentesModule

  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
