const fs = require("mz/fs");
const compare = require('resemblejs').compare;

var cypress_img1 = fs.readFileSync('/home/miso4208/Desktop/Taller6/cypress/screenshots/paleta-inicial.png');
var cypress_img2 = fs.readFileSync('/home/miso4208/Desktop/Taller6/cypress/screenshots/paleta-final.png');
const options = {};
var output_img = '/home/miso4208/Desktop/Taller6/cypress/screenshots/output-diff.png';

    compare(cypress_img1, cypress_img2, options, function (err, data) {
    if (err) {
        console.log('An error!' + err)
    } else {
        console.log(data);
        fs.writeFile(output_img, data.getBuffer());
    }
});





