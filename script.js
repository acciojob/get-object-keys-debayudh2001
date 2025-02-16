//your JS code here. If required.
let student = {
	name: "Dev",
	age: 22,
	city: "Delhi"
}

student.__proto__.getKeys = () => {
	return Object.keys(student)
}

console.log(student.getKeys())