import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMDB } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { RespuestaCredits } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { Genre } from '../interfaces/interfaces';
import { RespuestaGeneros } from '../interfaces/interfaces';

const URL    = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

    private popularesPage = 0;
    generos: Genre[] = [];

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query: string) {
  query = URL + query;
  query += `&api_key=${ apiKey }&language=es&include_image_language=es`;
  console.log('URL final TMDB:', query); //  imprime la URL aquí
  return this.http.get<T>(query);
}


  getPopulares() {

    this.popularesPage++;

    const query = `/discover/movie?sort_by=popularity.desc&page=${ this.popularesPage }`;

    return this.ejecutarQuery<RespuestaMDB>(query);

  }


  getPeliculaDetalle( id: string ) {
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${ id }?a=1`);
  }

  getActoresPelicula( id: string ) {
    return this.ejecutarQuery<RespuestaCredits>(`/movie/${ id }/credits?a=1`);
  }

  getFeature() {

    const hoy = new Date();
    const ultimoDia = new Date( hoy.getFullYear(), hoy.getMonth() + 1, 0 ).getDate();
    const mes = hoy.getMonth() + 1;

    let mesString;

    if ( mes < 10 ) {
      mesString = '0' + mes;
    } else {
      mesString = mes;
    }


    const inicio = `${ hoy.getFullYear() }-${ mesString }-01`;
    const fin    = `${ hoy.getFullYear() }-${ mesString }-${ ultimoDia }`;


    // tslint:disable-next-line:max-line-length
    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${ inicio }&primary_release_date.lte=${ fin }`);
  }

  


  // TAB 2 
  /*En RespuestasMDB es el conjunto de todas las peliculas */
 buscarPeliculas(texto: string): Observable<RespuestaMDB> {
  return this.ejecutarQuery<RespuestaMDB>(`/search/movie?query=${texto}`);
}

/*
Asi estaba originalmente
buscarPeliculas( texto: string ) {
    return this.ejecutarQuery(`/search/movie?query=${ texto }`);
  } */


  // movies.service.ts
cargarGeneros(): Promise<Genre[]> {
  return new Promise(resolve => {
    this.ejecutarQuery<RespuestaGeneros>(`/genre/movie/list?a=1`)
      .subscribe(resp => {
        this.generos = resp.genres;
        resolve(this.generos);
      });
  });
}



}


