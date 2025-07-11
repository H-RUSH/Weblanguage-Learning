console.log('HELLOW');
console.log("I LIKE SOMETHING");
let myname="himadry";
let myclass="bsc 3rd year"
let attendence=true;
document.getElementById('name').textContent=`your name is ${myname}`;
document.getElementById("class").textContent=myclass;
document.getElementById("present").textContent=attendence;
let student1,student2,student3,student4;
student1=10;
student2=student1+1;
student3=student1*student2;
student4=student3/student1;
document.getElementById('id1').textContent=`the number of student ${student1}`;
document.getElementById('id2').textContent=`the number of student2 ${student2}`;
document.getElementById('id3').textContent=`the number of student3 ${student3}`;
document.getElementById('id4').textContent=`the number of student4 ${student4}`;
document.getElementById('matop').textContent=`MATH OP`;
student2+=5;
document.getElementById('math1').textContent=`the number of student 2 new= ${student2}`;
document.getElementById(`userinput`).textContent=`user input`;
let user;
document.getElementById("btn1").onclick=function()
{
   
   user=document.getElementById("username").value;
   console.log(user);
}
