//Imposta celle e colonne
let totaleCelle = 76;
let colonne = 10;
//----------------------|

let numeriEstratti = []
let inizio = 0;
let primaCompera = 0;
let numeroCartelleTotali; 
let richiesta = 0;

let divTombolone = document.querySelector('#tombolone')
let divBottoni = document.querySelector('#pulsantiera')
let divPartenope = document.querySelector('#partenope')
creazioneTabella()
creazionePulsanteEstrazione()
// creazionePartenope()



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
        cella.classList = ('numero-' + (celleCreate + 1))
        riga.appendChild(cella);
        celleCreate++;
    }

    tombolone.appendChild(riga);
    divTombolone.appendChild(tombolone);
    } 
}

function creazionePulsanteEstrazione() {
    let bottoneEstrazione = document.createElement('button')
    bottoneEstrazione.innerText = "Inizia a Giocare"
    bottoneEstrazione.id = 'bottoneEstrazione'
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
        if(numeroCartelleTotali == undefined){
            console.log('minore di 1')
            console.log('numero cartelle totali ' + numeroCartelleTotali)
            let pulsantiera = document.querySelector('#pulsantiera')
            let domandaCartelle = document.createElement('p')
            let bottoneSi = document.createElement('button')
            let bottoneNo = document.createElement('button')
            domandaCartelle.innerText = 'Vuoi Comprare delle Cartelle?'
            domandaCartelle.classList = 'p-modificato'
            bottoneSi.innerText = 'SI'
            bottoneSi.classList = 'bottone-modificato'
            bottoneNo.innerText = 'NO'
            bottoneNo.classList = 'bottone-modificato'
            pulsantiera.appendChild(domandaCartelle)
            pulsantiera.appendChild(bottoneSi)
            pulsantiera.appendChild(bottoneNo)
            let bottoneDaNascondere = document.getElementById('bottoneEstrazione')
            bottoneDaNascondere.style.display = 'none'

            bottoneSi.addEventListener('click', () => {
                if(primaCompera == 0) {
                    domandaCartelle.remove()
                    bottoneSi.remove()
                    bottoneNo.remove()
                    //Vecchia soluzione
                    //let inputUtente = prompt("Numero cartelle da akkattare?");
                    let testoInput = document.createElement('h2')
                    let inputUtente = document.createElement('input')
                    let bottoneSchede = document.createElement('button')
                    testoInput.innerText = 'Inserisci numero cartelle da akkattare: '
                    testoInput.classList = 'p-modificato'
                    bottoneSchede.innerText = 'Compra'
                    pulsantiera.appendChild(testoInput)
                    pulsantiera.appendChild(inputUtente)
                    pulsantiera.appendChild(bottoneSchede)
                    bottoneSchede.addEventListener('click', () => {
                        let valoreInput = inputUtente.value
                        if (valoreInput !== null) {
                            numeroCartelleTotali = valoreInput;
                            testoInput.remove()
                            inputUtente.remove()
                            bottoneSchede.remove()
                            primaCompera++
                            creazioneCartelleUtente()
                            cambioNomeBottone()
                        }

                    })
                }
            })
            bottoneNo.addEventListener('click', () => {
                primaCompera++
                domandaCartelle.remove()
                bottoneSi.remove()
                bottoneNo.remove()
                cambioNomeBottone()
                bottoneDaNascondere.style.display = 'unset'
 

            })

        }
    }
    while (true) {
        if(richiesta == 0){
            richiesta++
            break;
        }
        let numeroRandom = Math.floor(Math.random() * 76) + 1;
        if (!numeriEstratti.includes(numeroRandom)) {
            numeriEstratti.push(numeroRandom);
            console.log(numeroRandom)
            let cellaDaSelezionare = document.querySelectorAll('.numero-'+ numeroRandom)
            cellaDaSelezionare.forEach(function(cella) {
                cella.style.backgroundColor = 'orange';
            });
            break;
        }
    }
}

// function creazionePartenope() {
//     let immaginePartenope = document.createElement('img');
//     immaginePartenope.src = 'assets/img/partenope.png';
//     divPartenope.appendChild(immaginePartenope)

//     immaginePartenope.addEventListener('click', () => {
//         if(primaCompera == 0) {
//             let inputUtente = prompt("Numero cartelle da akkattare?");
//             if (inputUtente !== null) {
//                 numeroCartelleTotali = inputUtente;
//                 primaCompera++
//                 immaginePartenope.style.display = 'none';
//                 console.log(numeroCartelleTotali);
//                 creazioneCartelleUtente()
//             }
//         } else {
//             alert("Gioca con quelle che hai, o refresha la pagina!")
//         }
//     })
// }


function creazioneCartelleUtente() {
    let numeroCartelle = parseInt(numeroCartelleTotali);

    if (!isNaN(numeroCartelle)) {
        let contenitoreSchedine = document.getElementById('schedineutente');

        for (let i = 0; i < numeroCartelle; i++) {
            let titoloSchedina = document.createElement('h3');
            titoloSchedina.textContent = "Schedina " + (i + 1);
            contenitoreSchedine.appendChild(titoloSchedina);

            let schedina = document.createElement('table');
            schedina.style.display = 'inline-block'

            let numeriEstratti = [];

            while (numeriEstratti.length < 24) {
                let numeroRandom = Math.floor(Math.random() * 76) + 1;
                if (!numeriEstratti.includes(numeroRandom)) {
                    numeriEstratti.push(numeroRandom);
                }
            }

            
            let cellePerRiga = 8;
            for (let rigaIndex = 0; rigaIndex < 3; rigaIndex++) { 
                let riga = document.createElement('tr');
                for (let cellaIndex = 0; cellaIndex < cellePerRiga; cellaIndex++) {
                    let indiceNumero = rigaIndex * cellePerRiga + cellaIndex;
                    if (indiceNumero < numeriEstratti.length) {
                        let cella = document.createElement('td');
                        cella.textContent = numeriEstratti[indiceNumero];
                        cella.classList = ("numero-" + numeriEstratti[indiceNumero]);
                        riga.appendChild(cella);
                    }
                }
                schedina.appendChild(riga);
            }

            contenitoreSchedine.appendChild(schedina);
            let bottoneDaNascondere = document.getElementById('bottoneEstrazione')
            bottoneDaNascondere.style.display = 'unset'
        }
    } else {
        console.log("Numero di cartelle non valido");
    }
}


function cambioNomeBottone () {
    document.getElementById('bottoneEstrazione').innerText = 'Estrai Numero'
    document.getElementById('bottoneEstrazione').classList = 'ultimocambiocolore'
}