/* Esercizio
-Definire un array di oggetti; ogni oggetto rappresenta un film o serie tv, che è caratterizzato da: title, year, genre, rating, type(movie o tv), seasons(solo per serie tv).
-Creare una classe Movie che contenga le informazioni sopra indicate.
-Creare una classe TvSeries che estenda la classe Movie e ne aggiunta la proprietà seasons.
-Entrambe le classi dovranno avere un metodo toString() che ritorni una stringa con i dati del film, tipo:
-Jaws è un film di genere Drama.E’ stato rilasciato nel 1975 ed ha un voto di 8
-Breaking Bad è una serie tv di genere Drama.La prima stagione è stata rilasciato nel 2008 ed in totale sono state prodotte 5 stagioni.Ha un voto di 9.5
-Tramite la funzione.map(), creare un nuovo array dove per ogni elemento dell’array di oggetti viene creata un istanza della classe Movie o TvSerie in base al type e salvata nel nuovo array.
-Creiamo una funzione che restituisca la media dei voti di tutti i film per un determinato genere.Prevedere un argomento per la lista dei film ed uno per il genere.
-Creiamo una funzione che restituisca la lista di tutti i generi dei film, senza che questi si ripetano.
Creiamo una funzione che filtri i film in base ad un genere passato come argomento e ne ritorni un array con all’interno il risultato della funzione toString() di ogni film.
Eseguire tutto il codice da terminale tramite NodeJs e stampiamo nel terminale il risultato delle varie funzioni.
    BONUS:
Rendere le proprietà delle classi private e creare dei setter e dei getter per potervi accedere.
Creare una classe Cart dove poter salvare i film che si intende noleggiare.Tramite delle funzioni, poter aggiungere o togliere dei film dal carrello.Creare poi una funzione che stampi il costo totale dei film da noleggiare, dove per ogni film occorre specificare un prezzo fisso di 3.99 */

const moviesAndTvs = [
    {
        title: "Il Padrino",
        year: 1972,
        genre: "Crime",
        rating: 9.2,
        type: "movie"
    },
    {
        title: "Breaking Bad",
        year: 2008,
        genre: "Crime",
        rating: 9.5,
        type: "tv",
        seasons: 5
    },
    {
        title: "Inception",
        year: 2010,
        genre: "Science Fiction",
        rating: 8.8,
        type: "movie"
    },
    {
        title: "Game of Thrones",
        year: 2011,
        genre: "Fantasy",
        rating: 9.3,
        type: "tv",
        seasons: 8
    },
    {
        title: "Forrest Gump",
        year: 1994,
        genre: "Drama",
        rating: 8.8,
        type: "movie"
    },
    {
        title: "Stranger Things",
        year: 2016,
        genre: "Science Fiction",
        rating: 8.7,
        type: "tv",
        seasons: 4
    },
    {
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        rating: 9.3,
        type: "movie"
    },
    {
        title: "Friends",
        year: 1994,
        genre: "Comedy",
        rating: 8.5,
        type: "tv",
        seasons: 10
    }
];


// CLASSI --------------------------------------------------------

class Movie {
    title;
    year;
    genre;
    rating;
    type;

    constructor(title, year, genre, rating, type) {

        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
    }

    // Funzione per mostrare una stringa
    toString() {
        const { title, type, genre, year, rating, seasons } = this;
        return `${title} è una ${type === 'movie' ? 'film' : 'serie TV'} di genere ${genre}. È stato rilasciato nel ${year} ed ha un voto di ${rating} ${type === 'movie' ? ' ' : `e ha ${ seasons }} stagioni.`}`;
    }
}



class TvSeries extends Movie {
    seasons;

    constructor(title, year, genre, rating, type,seasons) {
        super(title, year, genre, rating, type);
        this.seasons = seasons;
    }

    
}

// FUNZIONI --------------------------------------------------------

// Nuovo Array
const typesArray = moviesAndTvs.map((e) => {
    if (e.type === 'movie') {
        return new Movie(e.title, e.year, e.genre, e.rating, e.type);
    } else if (e.type === 'tv') {
        return new TvSeries(e.title, e.year, e.genre, e.rating, e.type, e.seasons);
    }
});

// Calcola Media del rating
function VoteAverage(typesArray, genre) {

    const genreSpecific = typesArray.filter(movie => movie.genre === genre);

    if (genreSpecific.length === 0) {
        return 0;
    }

    
    const sum = genreSpecific.reduce((genre, film) => genre + film.rating, 0);
    const average = sum / genreSpecific.length;

    return average;
}
// Simulazione del cerca
const search = "Crime";

// Invocazione delle funzione VoteAverage nella variabile average
const averageTot = VoteAverage(typesArray, search);


// Funzione che restituisca la lista di tutti i generi dei film, senza che questi si ripetano
function uniqueGenres(typesArray) {
    const uniqueArray = [];

    typesArray.forEach(film => {
        if (!uniqueArray.includes(film.genre)) {
            uniqueArray.push(film.genre);
        }
    });

    return uniqueArray;
}

const uniqueGenresList = uniqueGenres(typesArray);



// ISTANZE --------------------------------------------------------

const drive = new Movie("Drive", 2011, "Thriller", 8, "movie");
const peaky = new TvSeries("Peaky Blinders", 2013, "Thriller", 8, "tv", 6);


// LOG --------------------------------------------------------

console.log(drive.toString());
console.log(peaky.toString());
console.log(typesArray);
console.log(`La media dei voti per il genere "${search}" è ${averageTot}`);
console.log(uniqueGenresList);


