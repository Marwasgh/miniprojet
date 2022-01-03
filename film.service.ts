import { Injectable } from '@angular/core';
import { Film } from '../model/film.model';
import { Observable, of } from 'rxjs';
import { Acteur } from '../model/acteur.model';
@Injectable({
  providedIn: 'root'
})
export class FilmService {
  films : Film[]; 
  filmsRecherche : Film[];
  film = new Film();

  acteur = new Acteur();

  acteurs : Acteur[];
  constructor() {
    this.acteurs = [ {idAct : 1, nomAct : "Sidhart Malhotra"},{idAct : 2, nomAct : "Shradha Kapoor"},{idAct : 3, nomAct : "Varun Dhawan"}]; 
    this.films = [
      {idFilm : 1 ,nom : "Ek villain",  genre : "romantique", dateSortie: new Date("06/27/2014"), acteur:{idAct : 1, nomAct : "Sidhart Malhotra"}},
      {idFilm : 2 ,nom : "Student of the year", genre : "comedie romantique", dateSortie: new Date("10/19/2012"), acteur:{idAct : 1, nomAct : "Sidhart Malhotra"}},
      {idFilm : 3 ,nom : "men tera hero", genre : "action",dateSortie: new Date("10/02/2019"), acteur:{idAct : 3, nomAct : "Varun Dhawan"}},
      {idFilm : 4 ,nom : "Aashiqi 2",  genre : "aventure",dateSortie: new Date("07/01/2016"), acteur:{idAct : 2, nomAct : "Shradha Kapoor"}}
    
    ];
   }

   listeFilms():Film[] {
    return this.films;
  }
  ajouterFilm( fil:Film){
    this.films.push(fil);
    }
    
    supprimerFilm( fil: Film){
      const index = this.films.indexOf(fil, 0);
      if (index > -1) {
      this.films.splice(index, 1);
      }
    }      
    consulterFilm(id:number): Film{
      this.film = this.films.find(p => p.idFilm == id);
      return this.film;
      }
      trierFilms(){
        this.films = this.films.sort((n1,n2) => {
        if (n1.idFilm > n2.idFilm) {
        return 1;
        }
        if (n1.idFilm < n2.idFilm) {
        return -1;
        }
        return 0;
        });
        }
        
      updateFilm(p:Film)
      {
      // console.log(p);
      this.supprimerFilm(p);
      this.ajouterFilm(p);
     this.trierFilms();

      }
     
      listeActeurs():Acteur[] {
        return this.acteurs;
        }
        consulterActeur(id:number): Acteur{ 
        this.acteur= this.acteurs.find(act=> act.idAct == id);
        return this.acteur;
        }
        
         
        rechercherParActeur(idAct: number): Film[]{
        this.filmsRecherche = [];
        this.films.forEach((cur, index) => {
        if(idAct == cur.acteur.idAct) {
        console.log("cur "+cur);
        this.filmsRecherche.push(cur);
        }
      });
      return this.filmsRecherche; }
        
}
