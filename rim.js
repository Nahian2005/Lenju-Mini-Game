


var ln1= parseInt(prompt("Welcome to this mini game! Here, you have to guess any numbers from 1 to 4 to get some hidden messages about lenju. There are 6 messages available. Same messages could be repeated. Don't guess any numbers above 4!"));

var ln2= Math.floor(Math.random()*6 ) +1;

if( ln1<2 && ln2<3){

    document.write("<h3>ASIF is a choda khaua guy, while lenju is a choda daua guy.<h3/>");
    function pa(){
    let ju= document.getElementById("p1")
    ju.innerHTML="Refresh the Page!"
    ju.style.float="right";
    ju.style.color="skyblue";
    }



}

else if( ln1<3 && ln2<2){

    
document.write("<h1> Lenju's soul mate asif chandu wants to take his gf. This irritates lenju badly. That's why he decided to f*** asif's gf tonight.<h1/>");
function pa(){
let ju= document.getElementById("p1")
    ju.innerHTML="Refresh the Page!"
    ju.style.float="right";
    ju.style.color="brown";
}
}

else if(ln1<4 && ln2<4 ){


    
document.write("<h2>Researchers found that lenju's has an incredible ability. HE CAN S*x WITH 10 girls in one night None STOPLY! </h2>");
function pa(){ 
let ju= document.getElementById("p1")
    ju.innerHTML="Refresh the Page!"
    ju.style.float="right";
    ju.style.color="yellow";
}
}

else if(ln1<5 && ln2<4 ){


    document.write("<h1>Lenju need a expensive condom.<h1/>");
    function pa(){
    let ju= document.getElementById("p1")
    ju.innerHTML="Refresh the Page!"
    ju.style.float="right";
    ju.style.color="green";
    }
}

else if(ln1==ln2){

document.write("<h3>Valo hoya ja lenju <h3/>");
function pa(){
let ju= document.getElementById("p1")
    ju.innerHTML="Refresh the Page!"
    ju.style.float="right";
    ju.style.color="blue";
}
}

else{

document.write("<h2>Raj vala kintu lenju Kala <h2/>");
function pa(){
let ju= document.getElementById("p1")
    ju.innerHTML="Refresh the Page!"
    ju.style.float="right";
    ju.style.color="red";
}
}

