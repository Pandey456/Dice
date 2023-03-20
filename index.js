
var x = Math.random();
var y= x*5;
var randomNumber1=Math.ceil(y);
var m = Math.random();
var n=m*5;
var randomNumber2=Math.ceil(n);
var lnk1="/Dicee Challenge - Starting Files/images/dice"+randomNumber1+".png";
var lnk2="/Dicee Challenge - Starting Files/images/dice"+randomNumber2+".png";
document.getElementsByClassName("img1")[0].setAttribute("src",lnk1);
document.getElementsByClassName("img2")[0].setAttribute("src",lnk2);
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Won ⛳";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 won ⛳";

}
else if(randomNumber1 = randomNumber2){
    document.querySelector("h1").innerHTML="Draw !";
}
/*var lnk="/Dicee Challenge - Starting Files/images/dice"+a+".png";
document.getElementsByClassName("img1")[0].setAttribute("src",lnk);*/