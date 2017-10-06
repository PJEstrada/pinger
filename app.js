const express = require('express');
const request = require('request');
var shell = require('shelljs');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(5002, function () {
    console.log('Example app listening on port 5002!');


});

function makRequest(){
    request('127.0.0.1:4000', function (error, response, body) {
        if(error){
            console.log("Smart Site Died: I will respawn it haha... ");
            shell.exec('./ docker-reset.sh')
        }
        else{

        }
    });
}

(function() {
    var c = 0;
    var timeout = setInterval(function() {
        makRequest();
        c++;
        if (c > 2) {
            clearInterval(timeout);
        }
    }, 10000);
})();