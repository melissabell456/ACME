"use strict";

let $ = require('jquery');

module.exports.getNasaData = (startDate, endDate) => {
    return new Promise( (resolve, reject) => {
        $.ajax({
            url: "../JSON/nasa.json"
            // url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=anZnLkoPGrbCv21AqYmMkIEQyeGceLo0eJ6QcrbP`
            // url: "https://api.nasa.gov/neo/rest/v1/feed?start_date=`2015-09-07`&end_date=2015-09-08&api_key=anZnLkoPGrbCv21AqYmMkIEQyeGceLo0eJ6QcrbP"
        })
        .done( (data) => {
            resolve(data.near_earth_objects);
        })
        .fail(error => {
            reject(error); 
            console.log("no data");
        });
    });
};

module.exports.getRudeData = (asteroidName) => {
    console.log(asteroidName);
        return new Promise( (resolve, reject) => {
            $.ajax({
                url: `http://foaas.com/off/${asteroidName}/Everyone`
            })
            .done( (data) => {
                console.log(data);
                resolve(data);
            })
            .fail(error => {
                reject(error); 
                console.log("no data");
            });
        });
};