"use strict";

module.exports.formatData = (data) => {
    console.log('raw', data);
    for (let date in data) {
        let impactDate = date;
        let asteroidsOnDay = data[date];
        let asteroidList = [];
        for (let i=0; i<3; i++) {
            // console.log("should be object of indiv asteroids", asteroidsOnDay[i]);
            let asteroidName = asteroidsOnDay[i].name;
            console.log(asteroidName);
            asteroidList.push(asteroidName);
        }
        console.log(asteroidList);
        return asteroidList;
    }
};