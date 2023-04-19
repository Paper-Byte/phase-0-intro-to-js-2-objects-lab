// Write your solution in this file!
const employee ={
    name : '',
    address : '',
}

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    const newEmployee = {...employee}
    newEmployee[key] = value;
    return newEmployee;
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;
}

const deleteFromEmployeeByKey = (employee, key) => {
    const deleteKey = {...employee}
    delete deleteKey[key];
    return deleteKey;
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
}