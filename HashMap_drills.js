const HashMap = require("./index");

function main() {
  let lotr = new HashMap();
  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;

  const addItems = [
    { Hobbit: "Bilbo" },
    { Hobbit: "Frodo" },
    { Wizard: "Gandalf" },
    { Human: "Aragorn" },
    { Elf: "Legolas" },
    { Maiar: "The Necromancer" },
    { Maiar: "Sauron" },
    { RingBearer: "Gollum" },
    { LadyOfLight: "Galadriel" },
    { HalfElven: "Arwen" },
    { Ent: "Treebeard" },
  ];

  addItems.forEach((object) => {
    let type = Object.keys(object)[0];
    let name = object[type];
    lotr.set(type, name);
  });

  console.log(lotr);

  const Maiar = lotr.get("Maiar");
  const Hobbit = lotr.get("Hobbit");

  console.log(Maiar, Hobbit);
}

main();
