// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;


contract Etheereum_proof{
    string public token_name="DOGECOIN";
    string public token_abbr=" DOGE";
    uint public total_supply;

  
  mapping (address => uint) public accountbalances ;


function mint(address _sampleaddress,uint value )public {
    total_supply+=value;
    accountbalances[_sampleaddress]+=value;
}

function burn(address _sampleaddress,uint value )public {
    if(accountbalances[_sampleaddress]>value){
    total_supply-=value;
    accountbalances[_sampleaddress]-=value;
    }
}
}