/// დაწერე ფუნქცია რომელიც დააბრუნებს მეორე ყველაზე დიდ ელემენტს

var  arr=[1,2,43,5];

var srt=arr.sort((a,b)=> b-a )[1];
console.log(srt);

/// მეორე ტასკი

let ul=document.getElementsByClassName("some-class");
document.body.children[0].children[0].style.color="red";
document.body.children[0].children[1].style.color="green";
document.body.children[0].children[2].style.color="black";
document.body.children[0].children[3].style.color="blue";
document.body.children[0].children[4].style.color="yellow";
document.body.children[0].children[5].style.color="gray";



//დაწერე ფუნქცია რომელიც დააბრუნებს სტრინგს ხმოვნების გარეშე

function volw(str){
    let newString="";
 for(let i=0; i<=str.length; i++){
     if(str[i]!=="a" && str[i]!=="e" && str[i]!=="i" && str[i]!=="o" && str [i]!=="u"){
    newString+=str[i];
     }
    
 }
return newString;

}
console.log(volw("john doe  "));

//დაითვალე ნეგატიური რიცხვები

//let array=[[4,3,2,-1], [3,2,1,-1], [1,1,-1,-2],[-1,-1,-2,-2]];


//რევერსული

//1)
let revers1=[123];
let num=revers1.toString().split('').reverse().join("")
console.log(num);
//2)
let revers2=[-321];
let rev=revers2.toString().split('').reverse().join('')
console.log(rev);

