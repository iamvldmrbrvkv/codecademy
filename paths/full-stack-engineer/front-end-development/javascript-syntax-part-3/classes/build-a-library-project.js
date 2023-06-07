class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(newCheckout) {
      this._isCheckedOut = newCheckout;
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating() {
      let averageRating = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0) / this.ratings.length;
      return averageRating;
    }
  
    addRating(rating) {
      if (rating > 0 && rating < 6) {
        this.ratings.push(rating);
      } else {
        console.log('Rating between 1 and 5');
      }
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  }
  
  class CD extends Media {
    constructor(artist, title, songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
  
    get artist() {
      return this._artist;
    }
  
    get songs() {
      return this._songs;
    }
  
    shuffle() {
      let randomSongs = arr => arr.sort(() => Math.random() - 0.5);
      return randomSongs(this.songs);
    }
  
    addSong(song) {
      this.songs.push(song);
    }
  }
  
  class Catalog {
    constructor(books, movies, cds) {
      this._books = books;
      this._movies = movies;
      this._cds = cds;
    }
  
    get books() {
      return this._books;
    }
  
    get movies() {
      return this._movies;
    }
  
    get cds() {
      return this._cds;
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  historyOfEverything.getAverageRating();
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  const iDeny = new CD('Nina Karlsson', 'I Deny', ['Bored & Tired', 'I Deny', 'Winds of May', 'Follow The Dancers', 'Simple', 'Chocolate', 'Not Me', 'Princess of The Sheep', 'Sweetheart', 'Model']);
  iDeny.toggleCheckOutStatus();
  console.log(iDeny.isCheckedOut);
  iDeny.addRating(5);
  iDeny.addRating(5);
  iDeny.addRating(5);
  console.log(iDeny.getAverageRating());
  // console.log(iDeny.songs);
  iDeny.addSong('Bonus Track');
  // console.log(iDeny.songs);
  // iDeny.shuffle();
  // console.log(iDeny.shuffle());
  
  const anastasis = new CD('Dead Can Dance', 'Anastasis', ['Children Of The Sun', 'Anabasis', 'Agape', 'Amnesia', 'Kiko', 'Opium', 'Return Of The She-King', 'All In Good Time']);
  anastasis.addRating(2);
  anastasis.addRating(1);
  anastasis.addRating(4);
  console.log(anastasis.getAverageRating());
  
  const books = [historyOfEverything];
  const movies = [speed];
  const cds = [iDeny, anastasis];
  const catalog = new Catalog(books, movies, cds);
  console.log(catalog);
  console.log(catalog.cds[0].songs[1]);
  console.log(catalog.cds[1].getAverageRating());