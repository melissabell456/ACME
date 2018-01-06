"use strict";

let $ = require('jquery');

module.exports.getNasaData = () => {
    return new Promise( (resolve, reject) => {
        $.ajax({
            // url: "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=anZnLkoPGrbCv21AqYmMkIEQyeGceLo0eJ6QcrbP"
            url: "../JSON/nasa.json"
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

module.exports.getRudeData = () => {
    return new Promise( (resolve, reject) => {
        $.ajax({
            url: " http://foaas.com/fucks"
        })
        .done( (data) => {
            // console.log(data);
            resolve(data);
        })
        .fail(error => {
            reject(error); 
            console.log("no data");
        });
    });
};