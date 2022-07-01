// Write your solution in this file!
const employee = {
    name: "John Smith",
    address: "1234 Parkway Rd"
};

function updateEmployeeWithKeyAndValue(obj, key, value) {

    return {...obj, [key]: value};
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {

    obj[key] = value;
    return obj;
};

function deleteFromEmployeeByKey(obj, key) {
    const obj2 = {...obj};
    delete obj2[key];
    return obj2;
};

function destructivelyDeleteFromEmployeeByKey(obj, key) {

    delete obj[key];
    return obj;
}