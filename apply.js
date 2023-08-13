const person = {
	fullName : function(){
	return this.firstName  + " " + this.lastName;
	}
}

const person1 = {
	firstName : "Mary",
	lastName = : "Doe"
}


person.fullName.apply(prson1);

// The differnece between call() and apply()
// The differnce is: 
// The method takes arguments separateluy. 
// The apply() method takes arguments as an array 



// The apply method accepts arguments in an array:

person.fullName.apply(person1,["Telangana","India"]);
