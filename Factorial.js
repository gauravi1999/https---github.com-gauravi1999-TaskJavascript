function display(num,callback) {
  var a = callback(num);
      console.log("Factorial is",a);
    }
    
    function factorial(x) {
  if (x < 0) {
           console.log("no. should be positive");}
      else if (x == 0) {
          return (1);}
      else {
  var result;
        result = x * factorial(x - 1);
  return (result);
      }
    }
      display(6, factorial);