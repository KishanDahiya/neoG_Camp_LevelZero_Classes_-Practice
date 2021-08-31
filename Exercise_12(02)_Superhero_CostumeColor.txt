var superman={
  name:"Superman",
  power:"Flight",
  costumeColor:["blue","red"],
  strength:10000,
  stealth:50
}
var batman={
  name:"Batman",
  power:"Martial Arts",
  costumeColor:["black","yellow"],
  strength:500,
  stealth:100
}
var robin={
  name:"Robin",
  power:"sweet talker",
  costumeColor:["blue","red"],
  strength:10,
  stealth:100
}
var raven={
  name:"Raven",
  power:"Magic",
  costumeColor:["blue","black"],
  strength:1000,
  stealth:1000000
}

var superheros=[superman,batman,robin,raven]

for(var i=0;i<superheros.length;i++){
  var currentHero=superheros[i];
  console.log("\nThe costume colors of "+currentHero.name+" is "+currentHero.costumeColor+".");
}