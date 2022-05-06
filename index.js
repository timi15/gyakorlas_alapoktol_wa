// bootstrap


const nev = document.getElementById("nev");
const no = document.getElementById("no");
const ferfi = document.getElementById("ferfi");
const gomb = document.getElementById("koszon");
const ide = document.getElementById("ide");


gomb.addEventListener("click", koszones);

function koszones() {
    if (ferfi.checked) {
        ide.innerHTML = "Szia Uram " + nev.value;
    }

    else {
        ide.innerHTML = "Szia Hölgyem " + nev.value;
    }
}


const ber = document.getElementById("ber");
const netto = document.getElementById("netto");
const p = document.getElementById("p");


netto.addEventListener("click", nettoszam)

function nettoszam() {

    const brutto= (Number ) (ber.value);

    const szja = (Number)(ber.value)*  0.18;
    const egyeb = (Number)(ber.value)* 0.10;

    

    p.innerHTML= "netto: "+ (brutto-(szja+egyeb)) +" SZJA: " +szja + " Egyéb: "+ egyeb;

}

//

const tip = document.getElementById("tip");
const gomb_eredmeny= document.getElementById("eredmeny");
const megoldas= document.getElementById("megoldas");
const rszam= document.getElementById("random");

gomb_eredmeny.addEventListener("click", general)

function general(){
    let randomszam = Math.floor(Math.random()*2);

    rszam.innerHTML=randomszam;
    
    if(randomszam== 0 && tip.value== "Fej"){
        megoldas.innerHTML= "Nyert"
    }

    else if (randomszam==1 && tip.value=="Írás"){
        megoldas.innerHTML= "Nyert"
    }
    else{
        megoldas.innerHTML="Nem nyert"
    }
} 





    

    


