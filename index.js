// index.js

//  import the crypto module
const { randomBytes }=require("crypto");


//  get a commands using process.argv

const process = require("process");
const allArgv = process.argv;
const argv = allArgv.splice(2);

const arr1 = +argv[1];
const arr2 = +argv[2];
const operation = argv[0];

// complete the  function



switch (operation) {
  case "add": console.log(arr1+arr2); break;
  case "sub": console.log(arr1-arr2); break;
  case "mult": console.log(arr1*arr2);break;
  case "divide":console.log(arr1/arr2);break;
  case "sin": console.log(Math.sin(arr1));break;
  case "cos": console.log(Math.cos(arr1));break;
  case "tan": console.log(Math.tan(arr1));break;
  case "random": 
  randomBytes(arr1,(err, buf) => {
      if (err) {
        // Prints error
        console.log("should return message if no length is given for random");
        return;
      }
      console.log(buf.toString('hex'));
      return 
  });
break;
  default:
    console.log("Invalid operation");
}
