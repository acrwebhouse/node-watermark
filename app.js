const path = require('path');
const watermark = require('./tool/watermark');
const defaultWatermark = path.join(__dirname,'resource','watermark','acr.png')
let defaultInput = path.join(__dirname,'resource','testImage','test.jpeg')
let dstPath =  path.join(__dirname,'output','test.png')
console.log(watermark)

const options = {
    'opacity': 0.6, //Should be less than one
    dstPath
};

watermark.addWatermark(defaultInput, defaultWatermark,options).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });