const express = require('express');
const request = require('request');
var shell = require('shelljs');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(5002, function () {
    console.log('Smart Site Will never die with me. Im your slave.');


});

function makRequest(){
    request.get('http://localhost:4000',  {timeout: 1500}, function (error, response, body) {
        console.log(error);
        if(error){
            console.log("Smart Site Died: I will respawn it haha... ");
            shell.exec('sudo sh ../gas-meter-backend/docker-reset.sh')
        }
        else{
            console.log("All good :)")
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
    }, 15000);
})();