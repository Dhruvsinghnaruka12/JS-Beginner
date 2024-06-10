// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract Project{
        uint public total_supply;
   function trials(uint b) public {
        require(b<=125,"The value given is more than the required maxmium value ");
          total_supply=b;
    }

    function addition()public {
        assert(total_supply<100);
        total_supply+=90;
    }

    function decr()public view returns(uint256 a){
        if(total_supply>=125){
            revert("Overflow ");
        }
        else{
            return(total_supply);
        }
    }
}