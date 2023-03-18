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
    #genre;
    constructor(filmDetails, rating) {
        super(
            filmDetails.title,
            filmDetails.director,
            filmDetails.yearReleased,
            rating
        );
      this.budget = filmDetails.budget;
      this.#genre = filmDetails.genre;
    }
    
    get #movieGenre() { 
        return this.#genre;
    }
    getRating() {
      return `${this.rating} rating over 7.`;
    }
    getDetails() {
      return `${this.title} (${this.yearReleased}) directed by ${this.director}. Budget: $${this.budget} million. Genre: ${this.#movieGenre}. Rating: ${this.rating} rating over 7.`;
    }
  }
  
  class ComedyMovie extends movieRatingOver7{
    #genre;
    constructor(filmDetails, rating) {
        super(
            filmDetails.title,
            filmDetails.director,
            filmDetails.yearReleased,
            rating
        );
      this.budget = filmDetails.budget;
      this.#genre = filmDetails.genre;
    }
    
    get #movieGenre() { 
        return this.#genre;
    }
    getRating() {
      return `${this.rating} rating over 7.`;
    }
    getDetails() {
      return `${this.title} (${this.yearReleased}) directed by ${this.director}. Budget: $${this.budget} million. Genre: ${this.#movieGenre}. Rating: ${this.rating} rating over 7.`;
    }
  }
  
  class HorrorMovie extends Released{
    #genre;
    constructor(filmDetails) {
        super(
            filmDetails.title,
            filmDetails.director,
            filmDetails.yearReleased,
        );
        this.budget = filmDetails.budget;
        this.#genre = filmDetails.genre;
    }

    get #movieGenre() { 
        return this.#genre;
    }
    getTitle() {
        return this.title;
    }
    getDetails() {
      return `${this.title} (${this.yearReleased}) directed by ${this.director}. Budget: $${this.budget} million. Genre: ${this.#movieGenre}.`;
    }
  }
  
  class SciFiMovie extends Released{
    #genre
    constructor(filmDetails) {
        super(
        filmDetails.title,
        filmDetails.director,
        filmDetails.yearReleased,
        );
      this.budget = filmDetails.budget;
      this.#genre = filmDetails.genre;
    }
    get #movieGenre() { 
        return this.#genre;
    }
    getTitle() {
        return this.title;
    }
    getDetails() {
      return `${this.title} (${this.yearReleased}) directed by ${this.director}. Budget: $${this.budget} million. Genre: ${this.#movieGenre}.`;
    }
  }
let action = new ActionMovie({
    title: "Everything Everywhere All at Once",
    director: "Daniel Kwan",
    yearReleased: 2022,
    budget: 25,
    genre: "Action"
  }, 7.8);
let comedy = new ComedyMovie({
    title: "Triangle of Sadness",
    director: "Ruben Östlund",
    yearReleased: 2022,
    budget: 15,
    genre: "Comedy"
  }, 7);
let horror = new HorrorMovie({
    title: "The Amityville Horror",
    director: "Andrew Douglas",
    yearReleased: 2005,
    budget: 18,
    genre: "Horror"
  });
let sciFi = new SciFiMovie({
    title: "Space Samurai: Oasis",
    director: "Mark Maine",
    yearReleased: 2014,
    budget: 10,
    genre: "Sci-Fi"
  });
console.log(action.getDetails()); 
console.log(comedy.getDetails());
console.log(horror.getDetails());
console.log(sciFi.getDetails());
