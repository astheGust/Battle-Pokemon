function zaz(){
    let start = document.createElement("button")
    let textstart = document.createTextNode("START")
    let h1remove = (document.getElementById('titulopararemover'))
    let select = document.getElementById('selectpokemon')
    start.appendChild(textstart)
    start.id = "buttonstart"
    try { select.replaceChild(start, h1remove)} 
    catch {botaoativado()}
}
function botaoativado(pokemon) {
    if (pokemon === "combusken") {
        document.getElementById("pokemon1").style.filter = "contrast(1.5)"
        document.getElementById("pokemon2").style.filter = "contrast(1)"
        document.getElementById("pokemon3").style.filter = "contrast(1)"

        document.getElementById("pokemon1").style.border = "4px solid orange"
        document.getElementById("pokemon2").style.border = "2px solid black"
        document.getElementById("pokemon3").style.border = "2px solid black"

        document.getElementById("nomepokemon").innerHTML = "Combusken"
        document.getElementById("atk1").innerHTML = "Peck"
        document.getElementById("atk2").innerHTML = "Ember"
    }

    else if (pokemon === "mudkip") {
        document.getElementById("pokemon1").style.filter = "contrast(1)"
        document.getElementById("pokemon2").style.filter = "contrast(1.5)"
        document.getElementById("pokemon3").style.filter = "contrast(1)"

        document.getElementById("pokemon1").style.border = "2px solid black"
        document.getElementById("pokemon2").style.border = "4px solid cyan"
        document.getElementById("pokemon3").style.border = "2px solid black"

        document.getElementById("nomepokemon").innerHTML = "Mudkip"
        document.getElementById("atk1").innerHTML = "Tackle"
        document.getElementById("atk2").innerHTML = "Water Gun"
    }

    else if (pokemon === "treecko") {
        document.getElementById("pokemon1").style.filter = "contrast(1)"
        document.getElementById("pokemon2").style.filter = "contrast(1)"
        document.getElementById("pokemon3").style.filter = "contrast(1.5)"

        document.getElementById("pokemon1").style.border = "2px solid black"
        document.getElementById("pokemon2").style.border = "2px solid black"
        document.getElementById("pokemon3").style.border = "4px solid greenyellow"

        document.getElementById("nomepokemon").innerHTML = "Treecko"
        document.getElementById("atk1").innerHTML = "Pound"
        document.getElementById("atk2").innerHTML = "Absorb"
    }
}