// cls-comand to clear terminal
// console.log('Tomorrow is holiday');
// use different file name different constant name as well as different content

// const yt=require('fs');
// yt.writeFileSync('fri.txt','class is boring');

// var name="Yash";
// console.log(name);
// 'let' can also be used as var
// var age=20;
// var a=5;
// var b=10;
// console.log(age);

// created a funcn and passed 2 parameter and arguments
// Scope-it is the part of the program where is variable is declared use and modified
// function display(name,age)
// {
    // return 'my name is '+name+'\n'+'my age is '+age+'';
    // return 'sum of a and b is '+(a+b);
// }
// console.log(display(a,b));

//GLOBAL Scope

// var num=50;
// function print()
// {
    // local scope
//     var sum=num*10
//     console.log(sum)
// }

// console.log(num);
// print()


//LOCAL SCOPE
// in case of multiple variables in the same funcn with the same name , the latest updated value will be different 

// function calc()
// {
//     var num=50;
//     console.log(num);
//     var num=100;
//     console.log(num);
//     var sqr=num*num;
//     console.log(sqr);
// }

// calc();


// var student="Yash";
// var student="Yash Tripathi";
//     student="y.tripathi";
// console.log(student);

// using 'let' we cannot overwrite any variable'
// let student="Yash";
// let student="Yash Tripathi";
//     // student="y.tripathi";
// console.log(student);

// function varscope()
// {
//     var x=1;
//     if(true)
//     {
//         var x=2;
//         console.log(x);
//     }
//     console.log(x);
// }

// varscope();

// function varscope()
// {
//     let x=1;
//     if(true)
//     {
//         let x=2;
//         console.log(x);
//     }
//     console.log(x);
// }

// varscope();


// ARROW FUNCTION or 

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(5,7));

// const add= function sum(a,b){
//     return a+b;
// }
// console.log(add(5,7));

// ARROW M-1

// const add=(a,b)=>
// {
//     return a+b;
// }
// console.log(add(3,8));

// const mult=(a,b )=>
// {
//     return a*b
// }
// console.log(mult(5,7));

// ARROW M-2 without using 'return'

// const add=(a,b)=>a+b;
// console.log(add(5,9));

// const sum=a=>a+9;
// console.log(sum(9));

// const div=(a,b)=>a/b
// console.log(div(9,3));

const add=(a,b,c)=>a+b+c;
console.log(add(5,9));
