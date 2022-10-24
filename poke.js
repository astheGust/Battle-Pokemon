
function botaoativado(pokemon) {
    let start = document.createElement("button")
    let textstart = document.createTextNode("START")
    let h1remove = (document.getElementById('tituloremover'))
    let select = document.getElementById('selectpokemon')
    document.getElementById("atktipo").innerHTML = ""
    document.getElementById('atkimg').style.display = "none"
    document.getElementById("dano").style.display = "none"
    document.getElementById("box2").style.display = "block"
    document.getElementById("box1").style.borderRadius = "30px 30px 0px 0px"
    start.appendChild(textstart)
    start.id = "buttonstart"
    try { select.replaceChild(start, h1remove)} 
    catch {this}
    if (pokemon === "torchic") {
        document.getElementById("pokemon1").style.filter = "contrast(1.5)"
        document.getElementById("pokemon2").style.filter = "contrast(1)"
        document.getElementById("pokemon3").style.filter = "contrast(1)"

        document.getElementById("pokemon1").style.border = "4px solid orange"
        document.getElementById("pokemon2").style.border = "2px solid black"
        document.getElementById("pokemon3").style.border = "2px solid black"

        document.getElementById("nomepokemon").innerHTML = "Torchic"
        document.getElementById("atk1").innerHTML = "Peck"
        document.getElementById("atk2").innerHTML = "Ember"

        document.getElementById("box2").style.backgroundImage = "url(imgs/bkglaranja.jpg)"
        document.getElementById("pokemontipoimg").src = 'imgs/elementofogo.jpg'
        document.getElementById("imgpokemon").src = "imgs/torchic.gif"

        document.getElementById("nomepokemon").className = "whitecolor"
        document.getElementById("pokemontipo").className = "whitecolor"
        document.getElementById("dano").className = "whitecolor"
        document.getElementById("atks").className = "whitecolor"
        document.getElementById("atktipo").className = "blackcolor"
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

        document.getElementById("box2").style.backgroundImage = "url(imgs/bkgazul.jpg)"
        document.getElementById("pokemontipoimg").src = 'imgs/elementoagua.jpg'
        document.getElementById("imgpokemon").src = "imgs/mudkip.gif"

        document.getElementById("nomepokemon").className = "blackcolor"
        document.getElementById("pokemontipo").className = "blackcolor"
        document.getElementById("dano").className = "blackcolor"
        document.getElementById("atks").className = "blackcolor"
        document.getElementById("atktipo").className = "whitecolor"
        }

    else{
        document.getElementById("pokemon1").style.filter = "contrast(1)"
        document.getElementById("pokemon2").style.filter = "contrast(1)"
        document.getElementById("pokemon3").style.filter = "contrast(1.5)"

        document.getElementById("pokemon1").style.border = "2px solid black"
        document.getElementById("pokemon2").style.border = "2px solid black"
        document.getElementById("pokemon3").style.border = "4px solid greenyellow"

        document.getElementById("nomepokemon").innerHTML = "Treecko"
        document.getElementById("atk1").innerHTML = "Pound"
        document.getElementById("atk2").innerHTML = "Absorb"

        document.getElementById("box2").style.backgroundImage = "url(imgs/bkgverdeescuro.jpg)"
        document.getElementById("pokemontipoimg").src = 'imgs/elementograma.jpg'
        document.getElementById("imgpokemon").src = "imgs/treecko.gif"

        document.getElementById("nomepokemon").className = "blackcolor"
        document.getElementById("pokemontipo").className = "blackcolor"
        document.getElementById("dano").className = "blackcolor"
        document.getElementById("atks").className = "blackcolor"
        document.getElementById("atktipo").className = "blackcolor"
    }
}
    function atksN1(){
        let atk1 = document.getElementById("atk1").innerHTML
        document.getElementById("dano").style.display= "inline-block"
        document.getElementById("atkimg").style.display = "inline-block"
        if(atk1 === "Peck"){
            document.getElementById("atktipo").innerHTML = "Ataque Tipo: Voador"
            document.getElementById('atkimg').src = "imgs/emblemavoador.jpg"
            document.getElementById("danovisor").innerHTML = "10"
            }
        else if(atk1 === "Tackle"){           
            document.getElementById("atktipo").innerHTML = "Ataque Tipo: Normal"
            document.getElementById('atkimg').src = "imgs/emblemanormal.jpg"
            document.getElementById("danovisor").innerHTML = "10"
            }
        else{
            document.getElementById("atktipo").innerHTML = "Ataque Tipo: Normal"
            document.getElementById('atkimg').src = "imgs/emblemanormal.jpg"
            document.getElementById("danovisor").innerHTML = "10"
            }
        }
    function atksN2(){
        let atk2 = document.getElementById("atk2").innerHTML
        document.getElementById("dano").style.display= "inline-block"
        document.getElementById("atkimg").style.display = "inline-block"
        switch(atk2){
            case"Ember":
            document.getElementById("atktipo").innerHTML = "Ataque Tipo: Fogo";
            document.getElementById("atkimg").src = "imgs/emblemafogo.jpg";
            document.getElementById("danovisor").innerHTML = "20";
        break
            case"Water Gun":
            document.getElementById("atktipo").innerHTML = "Ataque Tipo: Água";
            document.getElementById("atkimg").src = "imgs/emblemaagua.jpg"
            document.getElementById("danovisor").innerHTML = "20";
        break
            case"Absorb":
            document.getElementById("atktipo").innerHTML = "Ataque Tipo: Grama";
            document.getElementById("atkimg").src = "imgs/emblemagrama.jpg";
            document.getElementById("danovisor").innerHTML = "20";
        break
            }
        }


