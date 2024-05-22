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
    console.log("NFT " + (i + 1) + NFTlist[i].name+":");
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

 mintNFTS('cyan',4756983948,'20 may', 'string','John');
 mintNFTS('Baymaxx',98457238,'24 may', 'password','Hans');

 traverse(allNfts);
 totalNfts(allNfts);