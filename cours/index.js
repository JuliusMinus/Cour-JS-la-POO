const obj = {
  // index:value
  pseudo: "Julius",
  ville: "levallois",
  admin: false,

  direBonjour: function () {
    // console.log("Bonjour je suis" + this.pseudo);
  },

  //direBonjour() {
  // console.log("Bonjour je suis " + this.pseudo);
  //},
};

// ajouter

obj.age = 42;
obj["admin"] = true;

//supprimer

delete obj.ville;

// Modifier

obj.pseudo = "JM";

// Checker si propriété existe

//console.log("pseudo" in obj);
//console.log("ville" in obj);

// Parcourir l'objet

for (const key in obj) {
  //console.log(key + " : " + obj[key]);
}

//console.log(obj.direBonjour());

// Obtenir les clés

const keys = Object.keys(obj);
// console.log(keys);

//Obtenir les valeurs

const values = Object.values(obj);
// console.log(values);

const nestedArray = Object.entries(obj);
// console.log(nestedArray);

const obj2 = {
  taille: "1m80",
  poids: "80kg",
};

// fusionner Object

const fusion = Object.assign({}, obj, obj2);
// console.log(fusion);

// Empecher les modifs

// const newObj = Object.freeze(obj);

const newObj = Object.seal(obj);
newObj.pseudo = "test";
newObj.adresse = "42 av du code";

// console.log(newObj);

//-------------------------------------------

// Construire des  Objects

// fonction Constructeur

function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;

  this.getCity = function () {
    // console.log(this.pseudo + " habite à " + this.ville);
  };
}

const user1 = new User("JM", "Paris");
const user2 = new User("Denis", "Nantes");

// console.log(user2.getCity());

// Factory functions

function User3(pseudo, ville) {
  return {
    pseudo,
    ville,
  };
}
const user4 = User3("fs", "aix");
// console.log(user4);

// ---------- Class----------------

class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }

  // méthodes

  sayMyName = function () {
    console.log("bonjour je suis " + this.pseudo);
  };
}

const user5 = new Utilisateur("samia", "lyon");
Utilisateur.prototype.sayCity = function () {
  console.log("je suis à" + this.ville);
};

Object.assign(Utilisateur.prototype, {
  method1() {
    //ma méthode
  },
  method2() {
    //ma méthode
  },
});

//console.log(user5);



// ----------------l'héritage----------------------

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }

  saysomething(text) {
    console.log(this.name + " dit : " + text);
  }
}

class Dog extends Animal {
  run() {
    console.log("le chien court");
  }
}

class Cat extends Animal {
  hunt() {
    console.log("j'aime les oiseaux");
  }
}

const milou = new Dog("milou", 9)
console.log(milou);

const sioux = new Cat
console.log(sioux);
