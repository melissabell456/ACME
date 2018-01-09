"use strict";

let dataFactory = require("./dataFactory");
let $ = require('jquery');
let formatData = require('./formatData');


// $("#submitDates").click( () => {
    console.log($("#startDate").val(), $("#endDate").val());
    let startDate = $("#startDate").val();
    let endDate = $("#endDate").val();
    dataFactory.getNasaData(startDate, endDate)
    .then( (data) => {
        let asteroidNames = formatData.formatData(data);
        for (let i=0; i<asteroidNames.length; i++){
            let rudePhrases = dataFactory.getRudeData(asteroidNames[i]);
            console.log("when");
        }
    });
// });
