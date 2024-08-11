var box1 = document.querySelector(".box1")
var box2 = document.querySelector(".box2")
var box3 = document.querySelector(".box3")
var box4 = document.querySelector(".box4")
var box5 = document.querySelector(".box5")
var box6 = document.querySelector(".box6")
var box7 = document.querySelector(".box7")
var box8 = document.querySelector(".box8")
var box9 = document.querySelector(".box9")
 var res = document.querySelector(".result")
 var resBtn = document.querySelector(".resButton")
 var left = document.querySelector(".left")
 var right = document.querySelector(".right")

 resBtn.addEventListener("click",()=>{
    location.reload();
 })


 var num = 2;


 if(num == 2){
     left.style.backgroundColor = "red";
            right.style.backgroundColor = "#343434"; // Reset right
    }


var one = box1.addEventListener("click",()=>{
    if(num % 2 == 0){
        box1.innerHTML="X"
         left.style.backgroundColor = "#343434";
                right.style.backgroundColor = "red"; // Reset right
        }
        else{
            box1.innerHTML="O" 
             right.style.backgroundColor = "red";
                left.style.backgroundColor = "#343434";
        }
        num++
   
});

var two= box2.addEventListener("click",()=>{
    if(num % 2 == 0){
    box2.innerHTML="X";
    left.style.backgroundColor = "#343434";
                right.style.backgroundColor = "red"; // Reset right
    }
    else{
        box2.innerHTML="O" 
        right.style.backgroundColor = "#343434";
        left.style.backgroundColor = "red";
    }
    num++
});

  var three = box3.addEventListener("click",()=>{
    if(num % 2 == 0){
        box3.innerHTML="X";
        left.style.backgroundColor = "#343434";
                    right.style.backgroundColor = "red"; // Reset right
        }
        else{
            box3.innerHTML="O" 
            right.style.backgroundColor = "#343434";
            left.style.backgroundColor = "red";
        }
        num++
});

var four = box4.addEventListener("click",(raj)=>{
    if(num % 2 == 0){
        box4.innerHTML="X";
        left.style.backgroundColor = "#343434";
                    right.style.backgroundColor = "red"; // Reset right
        }
        else{
            box4.innerHTML="O" 
            right.style.backgroundColor = "#343434";
            left.style.backgroundColor = "red";
        }
        num++
});

var five= box5.addEventListener("click",()=>{
    if(num % 2 == 0){
        box5.innerHTML="X";
        left.style.backgroundColor = "#343434";
                    right.style.backgroundColor = "red"; // Reset right
        }
        else{
            box5.innerHTML="O" 
            right.style.backgroundColor = "#343434";
            left.style.backgroundColor = "red";
        }
        num++
});
  var six = box6.addEventListener("click",()=>{
    if(num % 2 == 0){
        box6.innerHTML="X";
        left.style.backgroundColor = "#343434";
                    right.style.backgroundColor = "red"; // Reset right
        }
        else{
            box6.innerHTML="O" 
            right.style.backgroundColor = "#343434";
            left.style.backgroundColor = "red";
        }
        num++
});

var seven = box7.addEventListener("click",(raj)=>{
    if(num % 2 == 0){
        box7.innerHTML="X";
        left.style.backgroundColor = "#343434";
                    right.style.backgroundColor = "red"; // Reset right
        }
        else{
            box7.innerHTML="O" 
            right.style.backgroundColor = "#343434";
            left.style.backgroundColor = "red";
        }
        num++
});

var eight= box8.addEventListener("click",()=>{
    if(num % 2 == 0){
        box8.innerHTML="X";
        left.style.backgroundColor = "#343434";
                    right.style.backgroundColor = "red"; // Reset right
        }
        else{
            box8.innerHTML="O" 
            right.style.backgroundColor = "#343434";
            left.style.backgroundColor = "red";
        }
        num++
});

  var nine = box9.addEventListener("click",()=>{
    if(num % 2 == 0){
        box9.innerHTML="X";
        left.style.backgroundColor = "#343434";
                    right.style.backgroundColor = "red"; // Reset right
        }
        else{
            box9.innerHTML="O" 
            right.style.backgroundColor = "#343434";
            left.style.backgroundColor = "red";
        }
        num++
});


res.addEventListener("click", () => {
    // rows

    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML) {
        res.innerHTML = box1.innerHTML + " is Winner";   
        box1.style.backgroundColor="#343434";
        box2.style.backgroundColor="#343434";
        box3.style.backgroundColor="#343434";
    } 
    else if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box5.innerHTML === box6.innerHTML) {
        res.innerHTML = box4.innerHTML + " is Winner";
        box4.style.backgroundColor="#343434";
        box5.style.backgroundColor="#343434";
        box6.style.backgroundColor="#343434";
     
    }
    else if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box8.innerHTML === box9.innerHTML) {
        res.innerHTML = box7.innerHTML + " is Winner";
        box7.style.backgroundColor="#343434";
        box8.style.backgroundColor="#343434";
        box9.style.backgroundColor="#343434";
    }

    // columns
    else if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box5.innerHTML === box8.innerHTML) {
        res.innerHTML = box2.innerHTML + " is Winner";
        box2.style.backgroundColor="#343434";
        box5.style.backgroundColor="#343434";
        box8.style.backgroundColor="#343434";        
    } 
    else if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box4.innerHTML === box7.innerHTML) {
        res.innerHTML = box1.innerHTML + " is Winner";
        box1.style.backgroundColor="#343434";
        box4.style.backgroundColor="#343434";
        box7.style.backgroundColor="#343434";

    }
    else if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box6.innerHTML === box9.innerHTML) {
        res.innerHTML = box3.innerHTML + " is Winner";
        box3.style.backgroundColor="#343434";
        box6.style.backgroundColor="#343434";
        box9.style.backgroundColor="#343434";
    }

    // cross
    else if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box5.innerHTML === box9.innerHTML) {
        res.innerHTML = box1.innerHTML + " is Winner";
        box1.style.backgroundColor="#343434";
        box5.style.backgroundColor="#343434";
        box9.style.backgroundColor="#343434";
    }
    else if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box5.innerHTML === box7.innerHTML) {
        res.innerHTML = box3.innerHTML + " is Winner";
        box3.style.backgroundColor="#343434";
        box5.style.backgroundColor="#343434";
        box7.style.backgroundColor="#343434";
    }
    else {
        res.innerHTML = "Loser";
        res.innerHTML = "Nobody Won! Try again!";

    }
});