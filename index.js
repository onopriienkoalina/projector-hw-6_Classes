class Released {
    constructor(title,director,yearReleased) {
        this.title = title;
        this.director = director;
        this.yearReleased = yearReleased;
    }
    release() {
        console.log(`
            Title: ${ this.title }
            By: ${ this.director }
            ${ this.yearReleased }
        `);
    }
}
class movieRatingOver7 extends Released {
    constructor(title, director, yearReleased, rating) {
        super(title, director, yearReleased);
        this.rating = rating;
    }
    mark() {
        console.log(`
        Rating: ${ this.rating }
        `);
    }
}
class ActionMovie extends movieRatingOver7{
    constructor(filmDetails, rating) {
        super(
            filmDetails.title,
            filmDetails.director,
            filmDetails.yearReleased,
            rating
        );
      this.budget = filmDetails.budget;
      this.setGenre(filmDetails.genre);
    }
    
    setGenre(genre) {
     let _genre = genre;
     this.getMovieGenre = function() {
        return _genre;
     }
     this.genre = _genre;
    }
    getMovieGenre() {
        return this.getMovieGenre();
    }
    getRating() {
      return `${this.rating} rating over 7.`;
    }
    getDetails() {
      return `${this.title} (${this.yearReleased}) directed by ${this.director}. Budget: $${this.budget} million. Genre: ${this.getMovieGenre()}. Rating: ${this.rating} rating over 7.`;
    }
  }
  
  class ComedyMovie extends movieRatingOver7{
    constructor(filmDetails, rating) {
        super(
            filmDetails.title,
            filmDetails.director,
            filmDetails.yearReleased,
            rating
        );
      this.budget = filmDetails.budget;
      this.setGenre(filmDetails.genre);
    }
    
    setGenre(genre) {
        let _genre = genre;
        this.getMovieGenre = function() {
           return _genre;
        }
        this.genre = _genre;
       }

    getMovieGenre() {
        return this.getMovieGenre();
    }
    getRating() {
      return `${this.rating} rating over 7.`;
    }
    getDetails() {
      return `${this.title} (${this.yearReleased}) directed by ${this.director}. Budget: $${this.budget} million. Genre: ${this.getMovieGenre()}. Rating: ${this.rating} rating over 7.`;
    }
  }
  
  class HorrorMovie extends Released{
    constructor(filmDetails) {
        super(
            filmDetails.title,
            filmDetails.director,
            filmDetails.yearReleased,
        );
        this.budget = filmDetails.budget;
        this.setGenre(filmDetails.genre);
    }

    setGenre(genre) {
        let _genre = genre;
        this.getMovieGenre = function() {
           return _genre;
        }

        this.genre = _genre;
       }

    getTitle() {
        return this.title;
    }
    getMovieGenre() {
      return this.getMovieGenre();
    }
    getDetails() {
      return `${this.title} (${this.yearReleased}) directed by ${this.director}. Budget: $${this.budget} million. Genre: ${this.getMovieGenre()}.`;
    }
  }
  
  class SciFiMovie extends Released{
    constructor(filmDetails) {
        super(
        filmDetails.title,
        filmDetails.director,
        filmDetails.yearReleased,
        );
      this.budget = filmDetails.budget;
      this.setGenre(filmDetails.genre);
    }

    setGenre(genre) {
        let _genre = genre;
        this.getMovieGenre = function() {
           return _genre;
        }
        this.genre = _genre;
       }

    getTitle() {
        return this.title;
    }
    getMovieGenre() {
        return this.getMovieGenre();
    }
    getDetails() {
      return `${this.title} (${this.yearReleased}) directed by ${this.director}. Budget: $${this.budget} million. Genre: ${this.getMovieGenre()}.`;
    }
  }
let action = new ActionMovie({
    title: "Everything Everywhere All at Once",
    director: "Daniel Kwan",
    yearReleased: 2022,
    budget: 25,
  }, 7.8);
let comedy = new ComedyMovie({
    title: "Triangle of Sadness",
    director: "Ruben Östlund",
    yearReleased: 2022,
    budget: 15,
  }, 7);
let horror = new HorrorMovie({
    title: "The Amityville Horror",
    director: "Andrew Douglas",
    yearReleased: 2005,
    budget: 18,
  });
let sciFi = new SciFiMovie({
    title: "Space Samurai: Oasis",
    director: "Mark Maine",
    yearReleased: 2014,
    budget: 10,
  });
action.setGenre(`action`);
console.log(action.getDetails()); 
comedy.setGenre(`comedy`);
console.log(comedy.getDetails());
horror.setGenre(`horror`);
console.log(horror.getDetails());
sciFi.setGenre(`SciFi`);
console.log(sciFi.getDetails());
