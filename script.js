//your JS code here. If required.
let student = {
	name: "Dev",
}

student.__proto__.getKeys = () => {
	return Object.keys(student)
}

console.log(student.getKeys())