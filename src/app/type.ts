// déclarer les classes de movies et genres  //

export class Movie {
    title!: string;
    overview!: string;
    poster_path!: string;
    id!: number;
    adult!: boolean;
    genre_ids!: number[];
    original_language!: string;
    original_title!: string;
    popularity!: number;
    release_date!: string;
    video!: boolean;
    vote_average!: number;
    vote_count!: number;
    backdrop_path!: string;  
    genres!: Genre[];
    comments!: Comment[];
  }

  export class Genre {
      id!: number;
      name!: string;
  }


export class Comment{​​​
id!: number;
movie_id!: number;
text!: string;
rating!: number;
date!: string;
}​​​
