
const ajouter = document.getElementById("ajouter")
const notes = document.getElementById("notes")

ajouter.addEventListener("click" , function(){
    const liste = document.createElement("li")
    notes.appendChild(liste)
    // console.log(liste)
    // notes.prepend(liste)
    let x =0
    liste.textContent = "Note n" + x
    liste.classList = "p-2 bg-yellow-100 rounded"


})