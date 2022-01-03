import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { Acteur } from '../model/acteur.model';
import { FilmService } from '../services/film.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recherche-par-acteur',
  templateUrl: './recherche-par-acteur.component.html',
  styles: []
})
export class RechercheParActeurComponent implements OnInit {


  films : Film[]; 
  acteurs :Acteur[];
  idacteur: number;

  constructor(private filmService: FilmService,private authService : AuthService ) {
    this.films= [];
    this.films = filmService.listeFilms();
  }

  ngOnInit(): void {
    this.acteurs = this.filmService.listeActeurs();
   
  }

  onChange() {
   // console.log(this.IdActeur);
    this.films =  this.filmService.rechercherParActeur(this.idacteur);
   // console.log(this.films);
    }
    supprimerFilm(p: Film)
    {
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
  if (conf)
    this.filmService.supprimerFilm(p);
  
    }
}

 
   


