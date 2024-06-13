// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract SchoolGradingSystem{
   uint public marksofsub;

   function marksnumber(uint c)public{
    require(c<100,"The marks that is entered is above the maximum marks range");
    marksofsub=c;
   }
         

   function enteringmarks() public view{
    assert(marksofsub>35);
   }
   
   function gradingmarks()public view returns (bool,string memory ){
    if(marksofsub>35){
        if(marksofsub>90){
            return(true,"Grade -A");
        }
        else if(marksofsub>80){
            return(true,"Grade-B");
        }
        else if(marksofsub>70){
            return (true,"Grade-C");
        }
        else{
            return(true,"Grade-D");
        }
    }
    else{
        revert("The person has failed and scored less than 35 masrks");
    }
   }
}
