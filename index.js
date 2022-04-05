//closures:

// function outer(){
//     var num = 5;
//     function inner(){
//         console.log(num);

//     }
//     inner()
// }
// outer()

// function outer(){
//     var num=10;
//     function inner(){
//         console.log(num);
//     }
//     // num = 7;
//    return inner;
// }
// outer()() //this will get the result function inside function.
//or:
// var result = outer()
// result()

//closure:closure is a function buldled to gether with its lexical environment.

//    function extraOuter(){
//        var  a = 6;
//        return  function outer(){
//            var b = 5;
//        return function inner(){
//            console.log(a,b);
//        }
//     }
// }
// extraOuter();
// extraOuter()();
// extraOuter()()();//this means iam running the rd function.
//or:
// let result = extraOuter()
// result();

function makeCounter(){
    let count = 0;
    return function(){
        return count++;
    }
}
let counter = makeCounter()
// counter();
// counter();//this will not work.
// console.log(counter());// result 0
// console.log(counter());// result 1


// function makeCounter(){
//     let count = 0
//     return function(){
//         return count++
//     }
// }
// let counter1 = makeCounter()
// let counter2 = makeCounter()

// console.log(counter1());//0
// console.log(counter1());//1
// console.log(counter1());//2

//every function take seperate return :
// console.log(counter2());//0

//setTimeout():it consist of 2 arguements i.e:(callbackfunction,delay);

// function cb(){
//     console.log("hi this is sainath")
// }
// setTimeout(cb,3000);
//or:
// setTimeout(function (){
//     console.log("hi everyone");
// },3000)

// setTimeout(function (){
//     console.log("good evening");
// },3000)
// console.log("print after");

// function fun(){
//     var a = 10;
//     setTimeout(function (){
//         console.log(a);
//     },3000)
// console.log("inside fun");
// }
// fun()

// setTimeout(function (){
//     console.log(1);
// },1000)    

// function loopTime(){
//     for(let i=1; i<=5; i++){ //"let" is blockscope settimeout callback function accesses new variable.all these variables have differences. 
//         setTimeout(function (){
//             console.log(i);
//         },i*2000)//this is for everytime i will be diplayed after 2 secs. 
//     }
//     console.log("inside loop");
// }
// loopTime()

// function loopTime(){
//     for(var i=1; i<=5; i++){   //var  is not blockscope cb function so it will give result 6 gives 5 times.
//         setTimeout(function (){
//             console.log(i);
//         },2000)
//     }
//     console.log("inside loop");
// }
// loopTime()


//without using let we can create a block scope:using function 

// function loopTime(){
//     for(var i = 1 ; i<=5; i++){
//         function close(a){
//             setTimeout(function(){
//                 console.log(a);
//             },a*1000)
//         }
//         close(i)
//     }
//     console.log("inside looptime");
// }
// loopTime()














