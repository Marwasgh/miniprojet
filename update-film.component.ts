import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router  } from '@angular/router';
import { Acteur } from '../model/acteur.model';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styles: []
})
export class UpdateFilmComponent implements OnInit {
  currentFilm = new Film();
  acteurs : Acteur[];
updatedActeur : Acteur;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private filmService: FilmService) { }

  ngOnInit(): void {
this.acteurs = this.filmService.listeActeurs();
this.currentFilm = this.filmService.consulterFilm(this.activatedRoute.snapshot.params.id);
  }
  updateFilm()
  { 
  this.updatedActeur =this.filmService.consulterActeur(this.currentFilm.acteur.idAct);
  this.currentFilm.acteur = this.updatedActeur; 
  this.filmService.updateFilm(this.currentFilm);
  this.router.navigate(['films']);
  }
  
  
}
