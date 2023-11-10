//Imposta celle e colonne
let totaleCelle = 76;
let colonne = 10;
//----------------------|

let numeriEstratti = []
let inizio = 0;

let divTombolone = document.querySelector('#tombolone')
let divBottoni = document.querySelector('#pulsantiera')
creazioneTabella()
creazionePulsanteEstrazione()




function creazioneTabella() {
    let tombolone = document.createElement('table');
    let righe = Math.ceil(totaleCelle / colonne)
    let celleCreate = 0

    for (let i = 0; i < righe; i++) {
        let riga = document.createElement('tr');
        for (let j = 0; j < colonne; j++) {
        if (celleCreate >= totaleCelle) {
            break;
        }
        let cella = document.createElement('td');
        cella.style.border = '1px solid black';
        cella.textContent = celleCreate + 1;
        cella.id = celleCreate + 1; 

        riga.appendChild(cella);
        celleCreate++;
    }

    tombolone.appendChild(riga);
    divTombolone.appendChild(tombolone);
    } 
}

function creazionePulsanteEstrazione() {
    let bottoneEstrazione = document.createElement('button')
    bottoneEstrazione.innerText = "Estrai Numero"
    divBottoni.appendChild(bottoneEstrazione)
    //console.dir(bottoneEstrazione)
    bottoneEstrazione.addEventListener('click', () => {
        clickPulsanteEstrazione();
        playMusic(); // Aggiungi qui la chiamata alla funzione playMusic
    });
}

function playMusic() {
    var musica = document.getElementById('musicaSottofondo');
    musica.play();
}


function clickPulsanteEstrazione() {
    if(inizio === 0){
        console.log(inizio)
        document.addEventListener('DOMContentLoaded', (event) => {
            var musica = document.getElementById('musicaSottofondo');
            musica.play();
        });
        inizio += 1;
    }
    while (true) {
        let numeroRandom = Math.floor(Math.random() * 76) + 1;
        if (!numeriEstratti.includes(numeroRandom)) {
            numeriEstratti.push(numeroRandom);
            console.log(numeroRandom)
            let cellaDaSelezionare = document.getElementById(numeroRandom)
            cellaDaSelezionare.style.backgroundColor = 'orange'; 
            // console.log(cellaDaSelezionare)
            break;
        }
    }
}