import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film.service';
import { ActivatedRoute,Router  } from '@angular/router';
import { Acteur } from '../model/acteur.model';
@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html'
})
export class AddFilmComponent implements OnInit {
  newFilm = new Film();
  msg:string;
  acteurs : Acteur[];
newIdAct : number;
newActeur : Acteur;
constructor(private filmService: FilmService,private activatedRoute: ActivatedRoute,
  private router :Router) { }

ngOnInit() {
  this.acteurs= this.filmService.listeActeurs();
}

addFilm(){
this.newActeur = this.filmService.consulterActeur(this.newIdAct);
this.newFilm.acteur = this.newActeur;
this.filmService.ajouterFilm(this.newFilm);
this.msg = "Film "+ this.newFilm.nom+" ajouté avec succès"
this.router.navigate(['films']);
}

    
}
