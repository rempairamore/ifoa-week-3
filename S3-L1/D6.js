/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

let es1func = function (stringa1, stringa2) {
  return (stringa1.slice(0, 2) + stringa2.slice(-3)).toUpperCase()
}
// console.log(es1func('ciao', 'mondo')) 

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
let es2func = () => {
  let returnArray = []
  for(let i = 0; i != 10; i++) {
    let randomico = Math.floor(Math.random() * 101);
    returnArray.push(randomico)
  }
  return returnArray
}
// console.log(es2func())


/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

let arrayNumerico = [ 96, 38, 28, 79, 84, 61, 67, 100, 88, 32 ]
let es3filtrato = arrayNumerico.filter(elemento => elemento % 2 === 0)
// console.log(es3filtrato)





/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

// let es4total = 0;

// arrayNumerico.forEach(
//   function(val) {
//     es4total += val
//   }
// )
// console.log(es4total)

//Fatta con il prof

let sommaTuttoes5 = function (arrayDaSommare) {
  let somma = 0;
  arrayDaSommare.forEach(elemento => somma += elemento)
  return somma;
}
// console.log(sommaTuttoes5(arrayNumerico))




/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

// let es5tot = arrayNumerico.reduce((acc, value) => acc + value);
// console.log(es5tot)

//Fatta con prof
const es5reduce = (arraySoloNum) => {
  return arraySoloNum.reduce((accumulatore, elemento) => accumulatore += elemento, 0); //lo zero e' il valore iniziale dell'accumulatore
}

// console.log(es5reduce([3, 5, 11, 44]))



/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array
  con tutti i valori del precedente incrementati di n
*/
// let n = 13;
// let es6new = arrayNumerico.map(num => num + n)
// console.log(es6new)

const addN = (arr, n) => arr.map(ele => ele + n)
// console.log(addN([11,22,33], 5))



/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente 
  le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

let es7string = ["EPICODE", "is", "great"]
let es7new = (arrayStringhe) => arrayStringhe.map(val => val.length)
// console.log(es7new(es7string))


/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

let es8total = []

let es8dispari = () => {
  for(let i = 0; i < 100; i++) {
    if(i % 2 !== 0) {
      es8total.push(i)
    }
  }
  console.log(es8total)
}
// es8dispari()




/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e 
scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

// let olderMovie = new Date().getFullYear();
// let es9film;
// movies.forEach(val => { if(val.Year < olderMovie) { olderMovie = val.Year; es9film = val.Title} })
// console.log(es9film)

//Fatta con prof

// let oldestFinder = (arr) => {
//   let oldest = arr[0]
//   arr.forEach(film => {
//     if(film.Year < oldest.Year) {
//       oldest = film

//   }
// return oldest;
// })
// }

// console.log(oldestFinder(movies))

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

let movieCounter = () => {
  let counter = 0;
  movies.forEach(val => {
    if(val.Type == 'movie') {
      counter++;
    };
  })
  return counter;
}
// console.log(movieCounter())




/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

let onlyTitoli = movies.map(value => value.Title);
// console.log(onlyTitoli)



/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

// let onlyMillemila = movies.filter(value => value.Year >= 2000);
// console.log(onlyMillemila)

//Fatta con il prof
function filmMillennio (arr) {
  return arr.filter(value => value.Year >= 2000)
}
// console.log(filmMillennio(movies))


/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

let calcoloYears = (arr) => {
  return arr.reduce((acc, val) => acc + +val.Year, 0)
}

// console.log(calcoloYears(movies))

// console.log(calcoloYears)




/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (
    la funzione riceve un imdbID come parametro).
*/

let searchMovies = function (arr, id) {
  return arr.find(film => film.imdbID === id)
}

// console.log(searchMovies(movies, 'tt2395427'))

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno
   fornito come parametro.
*/

let searchYearIndex = function (arr, year) {
  return arr.findIndex(film => film.Year === year)
}

console.log(searchYearIndex(movies, '2019'))