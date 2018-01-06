"use strict";

module.exports.formatData = (data) => {
    console.log('raw', data);
    // let currentDate = Object.keys(data);
    // // console.log('raw data - current date?', currentDate);
    // for (let i = 0; i<currentDate.length; i++) {
    //     console.log(currentDate[i]);
    // }
    for (let stats in data) {
        // console.log('wat is data', data);
        let currentDate = stats;
        // console.log(currentDate, "ourside loop");
        let allData = data[stats];
        for (let i=0; i<allData.length; i++) {
            console.log('wat is stats', currentDate);
            let asteroidName = allData[i].name;
            let hazard = allData[i].is_potentially_hazardous_asteroid;
            // let currentDate = allData;
            // currentDateAsteroids.push(allData[i].name);
        }
        } 
};