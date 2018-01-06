"use strict";

let dataFactory = require("./dataFactory");
let $ = require('jquery');
let formatData = require('./formatData');

dataFactory.getNasaData()
.then( (data) => {
    formatData.formatData(data);
    let rudePhrases = dataFactory.getRudeData();
});
