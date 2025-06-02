let ans = 0;
for(let i = 1 ;i <= 10;i++){
  
   ans = ans+i
  
}
console.log(ans)

const Newarray = ["ayush","aman","avi"];
console.log(Newarray[0]);

function sum(a,b){
  let result = a+b;
   return result
}
function dispalythedata(data){
  return "The value by the Callback is"+data;

}

const callbackvalue = dispalythedata(sum(1,5))
console.log(callbackvalue)

var value = sum(1,3);
console.error(value)


var objectsArrayTest = [{
  Person:"AYush",
  Age : 22,
  value : "This is my Moto"

},

{
  Person:"Avi",
  Age: 21,
  value:"He is a good player"
},
{
Person:"Aman",
Age:21,
value:"He has got the Job he is Looking for it"
}
]

for( var i = 0; i <objectsArrayTest.length ; i++ ){
  if(objectsArrayTest[i]["Age"]==21){
    console.log(objectsArrayTest[i]["Person"])
   
  }
}


function indexofthevalue(str, target ){
  console.log(str.indexOf(target))
}
Name = "Ayush is a good boy"
const Anss = indexofthevalue(Name,"a")

const listt = [1,2,3,4,5,6]

function printval(num){
  console.log(num);
}

listt.forEach(printval)


// Now lets Talk About the class and the objects in the javascript

class Person{
  constructor(name,age){
    this.name = name,
    this.age = age
  }
  //static methods can be called without instanshianting the values with it 
  static OnlyPersonUsed() {
      console.log("This is the static value for it")
  }

  greet(){
    return `My name is  ${this.name} and age is ${this.age}`
  }
}
const person1 = new Person("Ayush",12)
const ans = person1.greet();
console.log(ans)
// here is the log of the Persons
Person.OnlyPersonUsed()

class Student extends Person{
  constructor(name,age,Course){
super(name,age)
this.Course= Course
  }


  
}



// DATE FUNTIONS JUST HAVE TO MUG UP AND SEE THE WORKING OF THEM AND THAT  IT 





