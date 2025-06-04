// function sum(n){
//   let counterans = 0;
//   for( let i = 0 ;  i< n ;i++){
//       counterans += i;
//   }
//   return counterans;
// }

// function findSumTill100(num){
//  console.log(sum(10))
// }

// setTimeout(findSumTill100,1000)
// console.log("Hello world")

// //Anonymous Funtion 

//  const Greet = function( ){
//    console.log("Hello eys");
//  }

//  const fs = require('fs')
//  fs.readFile("a.txt","utf-8",function(err,data){
//   console.log(data)
//  })

 //Promices and the Async Await
// This is the Ugly Way of Doing it 
//   const fs = require('fs')
//   function ayushkumar(cd){
//  fs.readFile("a.txt","utf-8",function(err,data){
//   cd(data)
//  })
// }

// function onDone(data){
//   console.log(data)
// }

// ayushkumar(onDone)

// Right Way to Do it 

 const fs = require('fs')

  function ayushkumar(){
    return new Promise(function(resolve) {
       fs.readFile("a.txt","utf-8",function(err,data){
      resolve(data);
 })
    })

}

function onDone(data){
  console.log(data)
}

ayushkumar().then(onDone)

 