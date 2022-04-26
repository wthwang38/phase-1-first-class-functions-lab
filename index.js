// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = () => drivers.slice(0,2);

const returnLastTwoDrivers = () => drivers.slice(2);

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers];

const createFareMultiplier = (multiplying) => function(fare){
return multiplying*fare;
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, whoTopick){
    return whoTopick();
}