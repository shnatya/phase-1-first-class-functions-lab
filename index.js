// Code your solution in this file!
const list = ["Bob", "Sonya", "Kate", "Zoey", "Emily"];

//Declare a variable with const that is assigned an anonymous function.
//The assigned function should accept an array of drivers as an argument and return the first two drivers
//in the array.
const returnFirstTwoDrivers = function(l){
    return (l.slice(0,2));
}
//the same function but defined as an arrow function
//const returnFirstTwoDrivers = l => l.slice(0, 2);
//returnFirstTwoDrivers(list);


const returnLastTwoDrivers = function(l){
        return (l.slice(-2));
}


//This is an array containing two elements: the two functions that we previously defined
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


//This is a function that takes in one argument, an integer, and returns a function that will multiply a fare.
//If createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as
// an argument and quadruples the fare.
//*******first method with arrow function:
//const createFareMultiplier = (intNumber) => function(fare) {return fare * intNumber};
/*const createFareMultiplier = function(intNumber){
    return function(fare) {
        return fare * intNumber;
    }
}*/
//****second method with func declaration:
function createFareMultiplier(intNumber) {
    return function(fare) {
        return fare * intNumber;
    }
}


//fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it.
//Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as 
//its lone argument and doubles it.
const fareDoubler = createFareMultiplier(2);
//fareDoubler(f);


const fareTripler = createFareMultiplier(3);

//selectDifferentDrivers() — This function takes two arguments, an array of drivers and 
//either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. 
//Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or
//the last two drivers.

function selectDifferentDrivers(l, driversFunction){
    return driversFunction(l);
}

//selectDifferentDrivers(list, returnFirstTwoDrivers);