/*Index*/
const pokemons = [
    {nome:"Torchic",atk1:"Peck",atk2:"Ember",danoatk1:12,danoatk2:22},
    {nome:"Mudkip",atk1:"Tackle",atk2:"Water Gun",danoatk1:10,danoatk2:20},
    {nome:"Treecko",atk1:"Pound",atk2:"Absorb",danoatk1:8,danoatk2:18},
    {nome:"Poochyena",atk1:"Tackle",atk2:"Bite",danoatk1:13,danoatk2:19}
];
let jsonTorchic = JSON.stringify(pokemons[0])
let jsonMudkip = JSON.stringify(pokemons[1])
let jsonTreecko = JSON.stringify(pokemons[2])
let jsonPoochyena = JSON.stringify(pokemons[3])
let meuPokemon = JSON.parse(localStorage.getItem("pokemon"))
let pokemonInimigo = JSON.parse(localStorage.getItem("pokemonInimigo"))
/*FunçõesCallback*/
torchic = () => {
  localStorage.setItem("pokemon",jsonTorchic)
  document.getElementById("pokemon1").style.filter = "contrast(1.5)"
  document.getElementById("pokemon2").style.filter = "contrast(1)"
  document.getElementById("pokemon3").style.filter = "contrast(1)"

  document.getElementById("pokemon1").style.border = "4px solid orange"
  document.getElementById("pokemon2").style.border = "2px solid black"
  document.getElementById("pokemon3").style.border = "2px solid black"

  document.getElementById("nomepokemon").innerHTML = pokemons[0].nome
  document.getElementById("atk1").innerHTML = pokemons[0].atk1
  document.getElementById("atk2").innerHTML = pokemons[0].atk2

  document.getElementById("box2").style.backgroundImage = "url(imgs/bkglaranja.jpg)"
  document.getElementById("pokemontipoimg").src = 'imgs/elementofogo.jpg'
  document.getElementById("imgpokemon").src = "imgs/torchic.gif"

  document.getElementById("nomepokemon").className = "whitecolor"
  document.getElementById("pokemontipo").className = "whitecolor"
  document.getElementById("dano").className = "whitecolor"
  document.getElementById("atks").className = "whitecolor"
  document.getElementById("atktipo").className = "blackcolor"
};
mudkip = () => {
  localStorage.setItem("pokemon",jsonMudkip)
  document.getElementById("pokemon1").style.filter = "contrast(1)"
  document.getElementById("pokemon2").style.filter = "contrast(1.5)"
  document.getElementById("pokemon3").style.filter = "contrast(1)"

  document.getElementById("pokemon1").style.border = "2px solid black"
  document.getElementById("pokemon2").style.border = "4px solid cyan"
  document.getElementById("pokemon3").style.border = "2px solid black"

  document.getElementById("nomepokemon").innerHTML = pokemons[1].nome
  document.getElementById("atk1").innerHTML = pokemons[1].atk1
  document.getElementById("atk2").innerHTML = pokemons[1].atk2

  document.getElementById("box2").style.backgroundImage = "url(imgs/bkgazul.jpg)"
  document.getElementById("pokemontipoimg").src = 'imgs/elementoagua.jpg'
  document.getElementById("imgpokemon").src = "imgs/mudkip.gif"

  document.getElementById("nomepokemon").className = "blackcolor"
  document.getElementById("pokemontipo").className = "blackcolor"
  document.getElementById("dano").className = "blackcolor"
  document.getElementById("atks").className = "blackcolor"
  document.getElementById("atktipo").className = "whitecolor"    
};
treecko = () => {
  localStorage.setItem("pokemon",jsonTreecko)
  document.getElementById("pokemon1").style.filter = "contrast(1)"
  document.getElementById("pokemon2").style.filter = "contrast(1)"
  document.getElementById("pokemon3").style.filter = "contrast(1.5)"

  document.getElementById("pokemon1").style.border = "2px solid black"
  document.getElementById("pokemon2").style.border = "2px solid black"
  document.getElementById("pokemon3").style.border = "4px solid greenyellow"

  document.getElementById("nomepokemon").innerHTML = pokemons[2].nome
  document.getElementById("atk1").innerHTML = pokemons[2].atk1
  document.getElementById("atk2").innerHTML = pokemons[2].atk2

  document.getElementById("box2").style.backgroundImage = "url(imgs/bkgverdeescuro.jpg)"
  document.getElementById("pokemontipoimg").src = 'imgs/elementograma.jpg'
  document.getElementById("imgpokemon").src = "imgs/treecko.gif"

  document.getElementById("nomepokemon").className = "blackcolor"
  document.getElementById("pokemontipo").className = "blackcolor"
  document.getElementById("dano").className = "blackcolor"
  document.getElementById("atks").className = "blackcolor"
  document.getElementById("atktipo").className = "blackcolor"  
};
padronizar = () =>{
    document.getElementById("atktipo").innerHTML = ""
    document.getElementById('atkimg').style.display = "none"
    document.getElementById("dano").style.display = "none"
    document.getElementById("box2").style.display = "block"
    document.getElementById("box1").style.borderRadius = "30px 30px 0px 0px"
  };  
function botaoativado(pokemon) {
    let h1remove = document.getElementById('tituloremover')
    let select = document.getElementById('selectPokemon')
    let start = document.createElement("a")
    let btn = document.createElement("button")
    let link = document.createAttribute("href")
    let textstart = document.createTextNode("START")
    link.value="battle.html"
    btn.appendChild(start)
    start.appendChild(textstart)
    start.setAttributeNode(link)
    btn.id = "buttonstart"
    padronizar()
  try {select.replaceChild(btn, h1remove)} 
  catch {this}
  if (pokemon == "torchic") {
  torchic()
  }

  else if(pokemon == "mudkip") {
  mudkip()
  }

  else{
  treecko()
  }
};
function atksN1(){
  let atk1 = document.getElementById("atk1").innerHTML
  document.getElementById("dano").style.display= "inline-block"
  document.getElementById("atkimg").style.display = "inline-block"
  if(atk1 === "Peck"){
  document.getElementById("atktipo").innerHTML = "Ataque Tipo: Voador"
  document.getElementById('atkimg').src = "imgs/emblemavoador.jpg"
  document.getElementById("danovisor").innerHTML = pokemons[0].danoatk1
  }
  else if(atk1 === "Tackle"){           
  document.getElementById("atktipo").innerHTML = "Ataque Tipo: Normal"
  document.getElementById('atkimg').src = "imgs/emblemanormal.jpg"
  document.getElementById("danovisor").innerHTML = pokemons[1].danoatk1
  }
  else{
  document.getElementById("atktipo").innerHTML = "Ataque Tipo: Normal"
  document.getElementById('atkimg').src = "imgs/emblemanormal.jpg"
  document.getElementById("danovisor").innerHTML = pokemons[2].danoatk1
  }
};
function atksN2(){
  let atk2 = document.getElementById("atk2").innerHTML
  document.getElementById("dano").style.display= "inline-block"
  document.getElementById("atkimg").style.display = "inline-block"
  switch(atk2){
    case"Ember":
    document.getElementById("atktipo").innerHTML = "Ataque Tipo: Fogo";
    document.getElementById("atkimg").src = "imgs/emblemafogo.jpg";
    document.getElementById("danovisor").innerHTML = pokemons[0].danoatk2;
    break
    case"Water Gun":
    document.getElementById("atktipo").innerHTML = "Ataque Tipo: Água";
    document.getElementById("atkimg").src = "imgs/emblemaagua.jpg"
    document.getElementById("danovisor").innerHTML = pokemons[1].danoatk2;
    break
    case"Absorb":
    document.getElementById("atktipo").innerHTML = "Ataque Tipo: Grama";
    document.getElementById("atkimg").src = "imgs/emblemagrama.jpg";
    document.getElementById("danovisor").innerHTML = pokemons[2].danoatk2;
    break
    }
};
/*Batalha*/
let barraVida = document.getElementById("barradvida")
let barraVida2 = document.getElementById("barradvida2")
let visorVida = document.getElementById("visorvida")
let visorVida2 = document.getElementById("visorvida2")
let vida1aria = barraVida.ariaValueNow
let vida2aria = barraVida2.ariaValueNow
let tituloPkm = document.getElementById("titulopkmB1")
let pkmImg1 = document.getElementById("pkmimgB1")
let pkmImg2 = document.getElementById("pkmimgB2")
let pkmAtk1 = document.getElementById("pkatk1") 
let pkmAtk2 = document.getElementById("pkatk2")

function batalhaDinamica(){
  localStorage.setItem("pokemonInimigo",jsonPoochyena)
  if(localStorage.getItem("pokemon") == jsonTorchic){
   pkmImg1.src = "imgs/torchic.gif"
   tituloPkm.innerHTML = pokemons[0].nome
   pkmAtk1.innerHTML = pokemons[0].atk1
   pkmAtk2.innerHTML =  pokemons[0].atk2
  }
  else if(localStorage.getItem("pokemon") == jsonMudkip){
    pkmImg1.src = "imgs/mudkip.gif"
    tituloPkm.innerHTML = pokemons[1].nome
    pkmAtk1.innerHTML = pokemons[1].atk1
    pkmAtk2.innerHTML =  pokemons[1].atk2
   }
   else{
    pkmImg1.src = "imgs/treecko.gif"
    tituloPkm.innerHTML = pokemons[2].nome
    pkmAtk1.innerHTML = pokemons[2].atk1
    pkmAtk2.innerHTML =  pokemons[2].atk2
   }
  document.getElementById("logestatico").innerHTML = `Você encontrou um ${pokemonInimigo.nome} no meio da floresta`
};
function dsVida(){
  if(pkmAtk1.innerHTML == pokemons[0].atk1){
    return vida2aria = vida2aria - pokemons[0].danoatk1
  } 
  else if(pkmAtk1.innerHTML == pokemons[0].atk1){
    return vida2aria = vida2aria - pokemons[1].danoatk1
  } 
  else{
    return vida2aria = vida2aria - pokemons[2].danoatk1
  }
};
function dsVida2(){
  if(pkmAtk2.innerHTML == pokemons[0].atk2){
    return vida2aria = vida2aria - pokemons[0].danoatk2
    } 
  else if(pkmAtk2.innerHTML == pokemons[0].atk2){
    return vida2aria = vida2aria - pokemons[1].danoatk2
    } 
  else{
    return vida2aria = vida2aria - pokemons[2].danoatk2
    }
};

function descontarVida(){
  espera()
  log("meuPokemonAtk1")
  let opaciInt = setInterval(spriteOpacity,400)
  setTimeout(()=>{clearInterval(opaciInt)},1500)
  setTimeout(()=>{
    barraVida2.style.height = dsVida()+"%"
    visorVida2.innerHTML = vida2aria},1500)
  setTimeout(contraAtk,2000)
};
function descontarVida2(){
  espera()
  log("meuPokemonAtk2")
  let opaciInt = setInterval(spriteOpacity,400)
  setTimeout(()=>{clearInterval(opaciInt)},1500)
  setTimeout(()=>{
    barraVida2.style.height = dsVida2()+"%"
    visorVida2.innerHTML = vida2aria},1500)
  setTimeout(contraAtk,2000)
};

function espera(){
  pkmAtk1.disabled = true
  pkmAtk2.disabled= true
  setTimeout(()=>{
    pkmAtk1.disabled = false
    pkmAtk2.disabled = false
  },4000)
};

function spriteOpacity(){
    pkmImg2.style.filter="opacity(0.6)"
    setTimeout(() => {pkmImg2.style.filter="opacity(1)"}, 200)
};
function spriteOpacity2(){
  pkmImg1.style.filter="opacity(0.6)"
  setTimeout(() => {pkmImg1.style.filter="opacity(1)"}, 200)
};
function decisaoAtkInimigo(){
  d = new Date
  if(d.getMilliseconds() % 2){
    return "Tackle"
  }
  else{
    return "Bite"
  }
};

function contraAtk(atk){
  log("pokemonInimigo")
  if(decisaoAtkInimigo() == "Tackle"){
    document.getElementById("poochatk1").innerHTML = pokemonInimigo.atk1
    let opaciInt2 = setInterval(spriteOpacity2,400)
    setTimeout(()=>{clearInterval(opaciInt2)},1500)
    vida1aria = vida1aria - pokemons[3].danoatk1
    setTimeout(()=>{
      barraVida.style.height = vida1aria + "%"
      visorVida.innerHTML = vida1aria},1500)
    }
  else{
    document.getElementById("poochatk2").innerHTML = pokemonInimigo.atk2
    let opaciInt2 = setInterval(spriteOpacity2,400)
    setTimeout(()=>{clearInterval(opaciInt2)},1500)
    vida1aria = vida1aria - pokemons[3].danoatk2
    setTimeout(()=>{
      barraVida.style.height = vida1aria + "%"
      visorVida.innerHTML = vida1aria},1500)
    };
};

function log(atk){
  let logEstatico = document.getElementById("logcombate")
  let paragrafo = document.createElement("p")
  paragrafo.id = "logAtks"

  switch(atk){ 
   case "meuPokemonAtk1":
    paragrafo.textContent =
    `${meuPokemon.nome} utilizou ${meuPokemon.atk1} em ${pokemonInimigo.nome} conseguindo ferir em ${meuPokemon.danoatk1} pontos de vida`
    logEstatico.appendChild(paragrafo)
   break
   case "meuPokemonAtk2":
    paragrafo.textContent = `${meuPokemon.nome} utilizou ${meuPokemon.atk2} em ${pokemonInimigo.nome} conseguindo ferir em ${meuPokemon.danoatk2} pontos de vida`
    logEstatico.appendChild(paragrafo)
   break
   case "pokemonInimigo":
    paragrafo.textContent = `${pokemonInimigo.nome} contra ataca com ${decisaoAtkInimigo()}`
    logEstatico.appendChild(paragrafo)
    break
  }
  document.getElementById("logcombate").scrollBy(0,1000)
};