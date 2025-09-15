console.log(`hellow world`);

document.getElementById('welcome').textContent=`hellow world`;


document.getElementById('constTxt').textContent='this is constant';
// here we r doing radios of the circle so we gonna make a box and use pi as constand 
 const  PI = 3.1416;
 let radios;
 let area;
 document.getElementById(`submit`).onclick=function(){
    radios=document.getElementById(`radious`).value;
    console.log(radios , typeof(radios))
   radios=Number(radios);
   console.log(radios,typeof(radios));
    
  
 }

 let c_number = 0;
 let count = document.getElementById(`count`);
 let incriment =document.getElementById(`count1`);
 let reset =document.getElementById(`count2`);
 let decrimentt =document.getElementById(`count3`);
 count.textContent=c_number;
 incriment.onclick=function(){
  c_number++;
  count.textContent= c_number;
 }
 decrimentt.onclick=function(){
  c_number--;
  count.textContent= c_number;
 }
 reset.onclick=function(){
  c_number=0;
  count.textContent= c_number;
 }



let random = document.getElementById(`random-b`);
let randomresult = document.getElementById(`ran-generator`)
let min_random = 1;
let max_random =10;
let generated_number;
random.onclick=function(){
  generated_number=Math.floor(Math.random()*max_random+1);
  document.getElementById(`ran-generator`).textContent = generated_number;
}


let ifinput=document.getElementById(`if-input`);
const if_password="ab123";
const if_submit=document.getElementById(`if_submit`);
if_submit.onclick=function(){
let catchpas=ifinput.value;
 if(catchpas==if_password){
  document.getElementById(`if_result`).textContent= "you are  welcome here "
 }
 else{
  document.getElementById(`if_result`).textContent= "you are nnnot welcome here "

 }
}




