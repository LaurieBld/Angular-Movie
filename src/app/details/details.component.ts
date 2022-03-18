import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../type';
import { PostMoviesService } from '../post-movies.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() movie!: Movie;
  loloForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private postMoviesService: PostMoviesService,
    private FormBuilder: FormBuilder
    ) {
      this.loloForm = this.FormBuilder.group({text: "", rating: ""});
    }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postMoviesService.getMovieDetails(id)
      .subscribe(movie => {
        this.movie = movie;
      });
  }  

  addComment() {
    this.postMoviesService.postCommentaire(this.movie.id, this.loloForm.value)
      .subscribe({
        next: (newComment: Comment) => {
          this.postMoviesService.getMovieDetails(this.movie.id).subscribe({
            next: (movie: Movie) => {
              this.movie = movie;
            }
            }
          )
            }
            })
            }}