const employee = {
  name: "karen",
  streetAddress: "123"
}
const newEmployee = {}

// let object = {
//   a: 2,
//   b: 3,
// };
// let copy = object;
// object.a = 5;




function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = {...employee};
    newEmployee[key] = value;
    console.log(employee, newEmployee)
    return newEmployee;
  }
  


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {
  const newEmployee = {...employee};
  
  delete newEmployee.name;
  return newEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
  
  delete employee.name;
  return employee;
}

