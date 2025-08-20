let a=10;
a+=10
console.log(a);
let username;
document.getElementById(`username`).onclick=function(){
    //here we will connect all that we want to be done by this i mean all everything
   username=document.getElementById(`user`).value;
   document.getElementById(`dipto`).textContent=`hi ${username}`;
}
