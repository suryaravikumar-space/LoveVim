const person = {
  firstName: "Surya",
  lastName: "chan",
  display: function () {
    return this.firstName + " " + this.lastName;
  },
};

// let dis = person.display();
//console.log(dis)

// with bind method we can preserve the this referece

let displaying = person.display.bind(person);
console.log(person.displaying)
let pereonCallBack = setTimeout(displaying, 3000);
console.log(pereonCallBack);
