var myNFTs = [];  
function mintNFT(name, eyeColor, shirtColor, bling) {
  var newNFT = {
    name: name,        
    eyeColor: eyeColor,  
    shirtColor: shirtColor, 
    bling: bling         };
  myNFTs.push(newNFT); }
function listNFTs() {
   for (var i = 0; i < myNFTs.length; i++) {
    console.log("NFT #" + (i + 1) + " details:");
    console.log("Name is: " + myNFTs[i].name);
    console.log("Eye color is: " + myNFTs[i].eyeColor);
    console.log("Shirt color is: " + myNFTs[i].shirtColor);
    console.log("Bling is: " + myNFTs[i].bling);
    console.log("--------------------");
  }}
function getTotalSupply() {
  return myNFTs.length; }
mintNFT("Jet", "Blur", "White", "Knife");
mintNFT("Raze", "Blue", "Black", "BoomBot");
mintNFT("Neon", "Green", "Red", "Launcher");
listNFTs();
console.log(getTotalSupply() + " NFTs Minted Successfully!");
