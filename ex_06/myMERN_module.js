const fs = require('fs'); 
const express = require("express");
const app = express();
const port = 4242;
let path = require("path");

process.env.NODE_ENV= "development";

exports.create = function(name){
fs.appendFile(name, function (err) { 
    if (err) return console.log('Create '+ name +' :KO'); 
    console.log('Create '+ name +' :OK');
});
}

exports.read = function(name){
    const fs = require('fs'); 
    fs.readFile(name, 'utf8', function(err, data) {
        const content = data;
        if (err) return console.log('Read '+ name +' :KO'); 
        console.log(content); });
    }

exports.update = function(name, content){
fs.writeFile(name, content, function (err) { 
    if (err) return console.log('Update '+ name +' :KO'); 
    console.log('Update '+ name +' :OK');
});
}

exports.delete = function(name){
const fs = require('fs');
   fs.unlink(name,(err) => {   
    if (err) return console.log('Delete '+ name +' :KO');
    console.log('Delete '+ name +' :OK');
});
}