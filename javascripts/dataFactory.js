"use strict";

let $ = require('jquery');

module.exports.getNasaData = (startDate, endDate) => {
    return new Promise( (resolve, reject) => {
        $.ajax({
            url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=anZnLkoPGrbCv21AqYmMkIEQyeGceLo0eJ6QcrbP`
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
                url: `http://foaas.com/yoda/${asteroidName}/Everyone`,
                'Accept': 'application/json'
            })
            .done( (data) => {
                $("#response").append(data);
                resolve(data);
            })
            .fail(error => {
                reject(error); 
                console.log("no data");
            });
        });
};