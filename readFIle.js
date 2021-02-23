const fs = require('fs');

fs.readFile('./writeFileTest.json', (err, data) => {
    if(err){
        return console.log(err);
    }
    else{
        const obj = JSON.parse(data);
        console.log(obj);
    }
})