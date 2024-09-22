// Write your solution in this file!
let employee = {name:"Eslieh", streetAddress:"Buruburu Road"};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const new_employee = {...employee}
    delete new_employee[key];
    return new_employee;

}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}