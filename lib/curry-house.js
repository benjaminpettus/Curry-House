var curry = require('./curry');

function calculate (arg1) {
 return function(op){
    if (op === '+' || op === 'add'){
      return add(arg1)(0);
      // return curry(add, arg1)
    }

    if(op === '-' || op === 'subtract'){
      return function(arg2){
       return arg1 - arg2; 
      };
    }
    if(op === '*' || op === 'multiply'){
      return function(arg2){
        return arg1 * arg2;
      };
    }
    if(op === '/' || op === 'divide'){
      return function(arg2){
        return arg1 / arg2;
      };
    }
    if(op === '%' || op === 'modulo'){
      return function(arg2){
        return arg1 % arg2;
      };
    }
    if(op === '^' || op === 'power of'){
      return function(arg2){
        return Math.pow(arg1, arg2);
    };
  }

    
 };

}

function random (start) {
  
  return{
    to: function(end){
      return Math.floor(Math.random() * (start - end) + end);//exclusive
    },

    toInclude: function(end){
      return Math.floor(Math.random() * (start - end));//inclusive 
    }
  };
}

function concat(greeting, name){
  return greeting + name;
}

var prependGreeting = curry(concat, "Hello ");

//try to use curry like above concat function and write like
//function add(a, b, c){ 
//  return a + b + c; 
// }
//
function add (a) {
  return function(b){
    return function(c){
      return a + b + c;
    };
  };
  
}



var add4and5 = add(4)(5);

function calculator(operation){
  return function(op2, op1){

  };
}

var add5 = null;
var sub5 = null;
var multiply5 = null;
var divide5 = null;
var mod5 = null;
var pow3 = null;

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};