import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';


import { Tab2PageRoutingModule } from './tab2-routing.module';
import { PipesModule } from '../pipes/pipes.module';
import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    PipesModule,
    ComponentesModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
