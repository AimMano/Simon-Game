let gameseq=[];
let userseq=[];

let started=false;
let level=0;
//storing color of btns;
let btns=["red","yellow","green","purple"];
//access h2
let h2=document.querySelector("h2");
//started game
document.addEventListener("keypress", function(){
    if(started==false){
console.log("started");
        started=true;

        levelUP();
    }
});
//flash button
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
btn.classList.remove("flash");
},250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
btn.classList.remove("userflash");
},250);
}

function levelUP(){
userseq=[];
level++;
h2.innerText=`level ${level}`;

let randomidx=Math.floor(Math.random()*3);
console.log(randomidx);
let randColor=btns[randomidx];
let randbtn=document.querySelector(`.${randColor}`);
gameseq.push(randColor);
console.log(gameseq);
gameFlash(randbtn);
}

//check ans color
function checkAns(idx){
if(userseq[idx]==gameseq[idx]){
    if(userseq.length==gameseq.length){
        levelUP();
    }
}

else{
    h2.innerHTML=`Game Over!  your score was <b>${level}</b> <br> Press any key to start`;
    // setTimeout(function (){
    //     document.querySelector("body").style.backgroundColor="red";
    // },150);
     reset();
}

}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}

function btnPress() {
let Btn=this;
userFlash(Btn);

//colorfind
userColor=Btn.getAttribute("id");

userseq.push(userColor);

checkAns(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}
