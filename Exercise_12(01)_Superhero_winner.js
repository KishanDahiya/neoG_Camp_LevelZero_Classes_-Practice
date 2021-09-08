var superman={
  name:"Superman",
  power:"Flight",
  costumeColor:["blue","red"],
  strength:10000,
  stealth:0
}
var batman={
  name:"Batman",
  power:"Martial Arts",
  costumeColor:["black","yellow"],
  strength:100,
  stealth:100
}

console.log("Stealth of Superman is "+superman.stealth)
console.log("Stealth of Batman is "+batman.stealth)
var winner=((superman.stealth>batman.stealth)?"Superman":"Batman")
console.log("The winner is "+winner)
