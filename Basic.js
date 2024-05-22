const a =6.0222; 
let b=3.141;
let c = a/b;
console.log(c);
console.log(a);


Math.floor(5 / 2) 

/*Note: The remainder operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but does not work properly with negative numbers.*/ 
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
console.log(sampleStr);


let myStr = "Bob";
myStr[0] = "J";
console.log(myStr);/*This doesnt work as In JavaScript, String values are immutable, which means that they cannot be altered once created. 
  but bellow one work*/ 
  myStr = "Job";
  console.log(myStr)

  /*Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.
  
  3 ===  3  // true
3 === '3' // false


The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
*/

/*case values are tested with strict equality (===)*/
let num =10;
switch (num) {
    case 10:
      console.log("hello");
      break;
    case 8:
       console.log("hello");
      break;

    default:
    console.log("pikachu");
      break;
  }



  function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
      : (a > b) ? "a is greater" 
      : "b is greater";
  }

 console.log( findGreaterOrEqual(10,15));
 

 function baymax(number1 , age){
  console.log("hello hi there"+number1+" "+ age);
  return age+3;
  console.log("byebye this will not execute")
 }
 baymax(25,57);
 const ui=baymax(25,57);
 console.log(ui);

 /*Variables that are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const. 
 
 push -insert at the beginning
 pop-remove from last
 shift-remove element from beginning
 unshift -add element in beginning
 
 parseInt() function parses a string and returns an integer
 
If the first character in the string can't be converted into a number, then it returns NaN.*/
 const bc=parseInt("007");




 //PROJECT Minting NFTS ,traversing there properties and getting the total number 

 const allNfts=[];

 function mintNFTS(name, transaction_id ,date ,datatype,lastowner){

  const NFT={
    'name':name,
    'transaction_id':transaction_id,
    'date':date,
    'datatype':datatype,
    'lastowner':lastowner

  }
  allNfts.push(NFT);
  console.log("Successfully Minted "+ name + " NFT last owned by "+ lastowner);
 }


 //traversing through its properities

 function traverse(NFTlist) {
  for (let i = 0; i < NFTlist.length; i++) {
    console.log("NFT " + (i + 1) +" "+ NFTlist[i].name);
    for (let property in NFTlist[i]) {
      if (NFTlist[i].hasOwnProperty(property)) {
        console.log(property + ": " + NFTlist[i][property]);
      }
    }
    console.log("");
  }
 }
 //total NFTS
 function totalNfts(NFTList){
console.log("total number of NFTS minted is "+ NFTList.length)
 }
 console.log("");

 mintNFTS('cyan',4756983948,'20 may', 'string','John');
 mintNFTS('Baymaxx',98457238,'24 may', 'password','Hans');

 traverse(allNfts);
 totalNfts(allNfts);
