let saveEl = document.getElementById("save-el")
let counterEl = document.getElementById("counter-el")


let count = 0 

function add(){
    count += 1
    counterEl.innerText = count    
}
function save(){
    saveEl.textContent += count +  " - "
    counterEl.innerText = 0
    count = 0
}

