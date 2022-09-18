const path = require('path');
const watermark = require('./tool/watermark');
const defaultWatermark = path.join(__dirname,'resource','watermark','acr.png')
let defaultInput = path.join(__dirname,'resource','testImage','test.jpeg')
let dstPath =  path.join(__dirname,'output','test2.png')
console.log(watermark)

const options = {
    'text': '雷恩租屋有限公司',
     'textSize': 8, //Should be between 1-8
    dstPath
};


watermark.addTextWatermark(defaultInput, options).then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        });
// watermark.addWatermark(defaultInput, defaultWatermark,options).then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     });