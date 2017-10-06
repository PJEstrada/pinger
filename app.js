const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(5002, function () {
    console.log('Example app listening on port 5002!');


})

function makRequest(){
    request('127.0.0.1:4000', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
}

(function() {
    var c = 0;
    var timeout = setInterval(function() {
        //do thing
        c++;
        if (c > 2) {
            clearInterval(timeout);
        }
    }, 10000);
})();