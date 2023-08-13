const person2={
	firstName:"jhon",
	lastName:"Doe",
}

const person1={
	firstName:"Mary",
	lastName:"Doe",
}


const person = {
	fullName:function(city, country){
		return this.firstName  + " " + this.lastName +", "+city+"," + country;
	}
}

const fname = person.fullName.call(person1,"Telangan", "India");
console.log(fname);






















//const fName= person.fullName();
//console.log(fName);
