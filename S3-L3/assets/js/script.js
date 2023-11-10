let inizioTask = document.querySelector('#tasks')


//Seconda cosa fatta
let newTask = (testo) =>{
    let newDiv = document.createElement('div')
    let task = document.createElement('p')
    let bottone = document.createElement('button')
    let icona = document.createElement('i');
    icona.className = 'fa-solid fa-ban'; 
    bottone.appendChild(icona);
    bottone.setAttribute('aria-label', 'Elimina Task');
    newDiv.className = 'taskSingolo'; 
    task.innerText = testo
    // task.style.textAlign = 'center'
    // console.log(testo)
    inizioTask.appendChild(newDiv)
    newDiv.appendChild(task)
    newDiv.appendChild(bottone)
    
    task.addEventListener('click', () => {
        task.style.textDecoration = 'line-through'
        task.style.color = 'red'
    })
    bottone.addEventListener('click', () => {
        newDiv.remove()
        hideYourTask()
    })
}

//Prima cosa fatta
let tableForm = document.querySelector('#tableForm');
tableForm.addEventListener('click', (evt) => {
    // console.log(evt.target)
    // let tr = evt.target.parentNode.parentNode;
    // tr.style.color = 'red';
    if(evt.target.className === 'fa-solid fa-plus') {
        let getText = document.querySelector('#inputTesto').value.trim();
        console.dir(getText)
        if(getText.length > 2) {
            newTask(getText)
            hideYourTask()
            document.querySelector('#inputTesto').value = ''
        } else {
            console.log('inserisci un testo maggiore di 2 char')
            let alertText = document.createElement('span')
            alertText.innerText = 'Inserire un testo maggiore di 2 caratteri!'
            inizioTask.appendChild(alertText)
            setTimeout(() => {
                inizioTask.removeChild(alertText);
            }, 2000)
        }
    } 
})



//Terza cosa fatta
let hideYourTask = () => {
    let taskVuoto = document.querySelectorAll('#tasks p')
    if(taskVuoto.length < 1) {
        document.querySelector('#tasks h2').style.display = 'none'
    } else {
        document.querySelector('#tasks h2').style.display = 'unset'
 
    }
} 

hideYourTask()