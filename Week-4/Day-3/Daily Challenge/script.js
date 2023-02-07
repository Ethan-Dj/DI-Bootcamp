const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];


// // Part 1
// let car = inventory.find(element => element.car_make == "Honda");

// console.log(car)

// // Part 2
  
function sortCarInve(carInventory){
    carInventory.sort((a,b) => b.car_year - a.car_year)
    console.log(carInventory)
}

sortCarInve(inventory)