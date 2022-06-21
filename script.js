let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons button");
let message = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;
let texto = document.querySelector('#texto-cor');

let player1 = 0;
let player2 = 0;

for(let i=0; i <buttons.length; i++){
    buttons[i].addEventListener("click", function (){

        secondPlayer = this.getAttribute("id");

        for(let j =0; j< buttons.length ; j++){
            buttons[j].style.display = 'none';
        }
    setTimeout(function(){
        let container = document.querySelector("#container");
        container.classList.remove("hide");
    },500)


    })
}

for(let i =0; i<boxes.length;i++){
     boxes[i].addEventListener("click", function () {
        let el = checkUp(player1,player2);
        
        if (this.childNodes.length == 0){

        let cloneEl = el.cloneNode(true);
        this.appendChild(cloneEl);
    
        if(player1 ==player2){
        player1++;
        if(secondPlayer == "ia-player"){
            computerPlayer();
            player2++;
        }
        } else{
            player2++;
        }
        CheckWin();

    } 
    });
}

function checkUp (player1, player2){
    if(player1 == player2){
        el = x;
    }else{
        el = o;
    }
     return el;
}

function CheckWin(){

    let b1 = document.querySelector('#box-1');
    let b2 = document.querySelector('#box-2');
    let b3 = document.querySelector('#box-3');
    let b4 = document.querySelector('#box-4');
    let b5 = document.querySelector('#box-5');
    let b6 = document.querySelector('#box-6');
    let b7 = document.querySelector('#box-7');
    let b8 = document.querySelector('#box-8');
    let b9 = document.querySelector('#box-9');

 
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){
        
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;
    
        if(b1Child == 'x' && b2Child=='x' && b3Child=='x'){
            declararWin('x');
        }   else if (b1Child == 'o' && b2Child=='o' && b3Child =='o') {
                declararWin('o');
        }}


    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
    
        if(b4Child == 'x' && b5Child=='x' && b6Child=='x'){
            declararWin('x');
        }   else if (b4Child == 'o' && b5Child=='o' && b6Child =='o') {
                declararWin('o');
        }}

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
    
        if(b7Child == 'x' && b8Child=='x' && b9Child=='x'){
            declararWin('x');
        }   else if (b7Child == 'o' && b8Child=='o' && b9Child =='o') {
                declararWin('o');
        }}
    
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){
        
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
    
        if(b1Child == 'x' && b4Child=='x' && b7Child=='x'){
            declararWin('x');
        }   else if (b1Child == 'o' && b4Child=='o' && b7Child =='o') {
                declararWin('o');
        }}
       
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){
        
            let b2Child = b2.childNodes[0].className;
            let b5Child = b5.childNodes[0].className;
            let b8Child = b8.childNodes[0].className;
        
        if(b2Child == 'x' && b5Child=='x' && b8Child=='x'){
                declararWin('x');
             } else if (b2Child == 'o' && b5Child=='o' && b8Child =='o') {
                declararWin('o');
            }}

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){
            let b3Child = b3.childNodes[0].className;
            let b6Child = b6.childNodes[0].className;
            let b9Child = b9.childNodes[0].className;
            
        if(b3Child == 'x' && b6Child=='x' && b9Child=='x'){
                declararWin('x');
            } else if (b3Child == 'o' && b6Child=='o' && b9Child =='o') {
                declararWin('o');
            }}
    
    
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
        
            let b1Child = b1.childNodes[0].className;
            let b5Child = b5.childNodes[0].className;
            let b9Child = b9.childNodes[0].className;
            
        if(b1Child == 'x' && b5Child=='x' && b9Child=='x'){
                declararWin('x');
            } else if (b1Child == 'o' && b5Child=='o' && b9Child =='o') {
                declararWin('o');
            }}
        
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){
        
            let b3Child = b3.childNodes[0].className;
            let b5Child = b5.childNodes[0].className;
            let b7Child = b7.childNodes[0].className;
                
        if(b3Child == 'x' && b5Child=='x' && b7Child=='x'){
                declararWin('x');
            } else if (b3Child == 'o' && b5Child=='o' && b7Child =='o') {
                declararWin('o');
            }}       


    let counter = 0;

    for (let i=0;i<boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            counter++
        }
    }
    if(counter == 9 ){
        declararWin('deu velha');
    }
}

function declararWin (win) {

    let scoreX = document.querySelector("#scoreboard");
    let scoreY = document.querySelector("#scoreboard2");
    let msg = '';

    if(win == 'x'){
        scoreX.textContent = parseInt(scoreX.textContent) + 1;
        msg ="Jogador 1 venceu!";
        texto.classList.remove('deuvelha');
        texto.classList.remove('win2');
        message.classList.remove("hide"); 
        texto.classList.add("win1");
        messageText.innerHTML = msg;
      
    } else if (win == 'o'){
        scoreY.textContent = parseInt(scoreY.textContent) + 1;
        msg = "Jogador 2 venceu!";
        texto.classList.remove('win1');
        texto.classList.remove('deuvelha');
        message.classList.remove("hide");
        texto.classList.add("win2");
        messageText.innerHTML = msg;
    } else{
        msg = 'Deu velha!';
        texto.classList.remove('win1');
        texto.classList.remove('win2');
        message.classList.remove("hide");
        texto.classList.add("deuvelha");
        messageText.innerHTML = msg;
    }

   
    setTimeout(function(){
        message.classList.add('hide');
    },3000)

    player1 = 0;
    player2 = 0;

    let boxesToRemove = document.querySelectorAll(".box div");

    for(let i = 0; i<boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
}}

function computerPlayer(){
    let cloneO = o.cloneNode(true);
    cont = 0;
    filled = 0;

    for(let i =0; i<boxes.length;i++){
        let random = Math.floor(Math.random() * 5);

        if(boxes[i].childNodes[0] == undefined){
            if(random <=1){
                boxes[i].appendChild(cloneO);
                cont++;
                break;
            }
        }else{
            filled++;
        }
    }
    if(cont == 0 && filled < 9){
        computerPlayer();
    }

}

let home = document.querySelector("#home");
home.addEventListener("click",function (){
    window.location.reload()
})
