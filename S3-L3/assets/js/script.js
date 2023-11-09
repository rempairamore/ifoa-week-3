// let bottoneInvia = document.querySelector('table')
// bottoneInvia.addEventListener('click', function(e) {
//     e.preventDefault()

//     let form = document.tab[0];
//     console.log(form[0].value)
//     console.log(form[1].value)
//     console.log(form[2].checkValidity())

// })
let inizioTask = document.querySelector('#tasks h2')
let tasksCreati = document.querySelectorAll('.tasks p')



let newTask = (testo) =>{
    let newDiv = document.createElement('div')
    let task = document.createElement('p')
    let bottone = document.createElement('button')
    bottone.innerText = 'Elimina Task'
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
    })
}



let tableForm = document.querySelector('#tableForm');
tableForm.addEventListener('click', (evt) => {
    console.log(evt.target)
    // let tr = evt.target.parentNode.parentNode;
    // tr.style.color = 'red';
    if(evt.target.innerText === 'INVIA') {
        // console.log("ciao invia");
        let getText = document.querySelector('#inputTesto').value;
        // console.log(getText)
        newTask(getText)
    } 
})

