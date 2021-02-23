const fs = require('fs');
const data = {
    name: 'Abir Hasan',
    email: 'abir@gmail.com',
    address: {
        city: 'Dhaka',
        country: 'BD'
    }
}

const stringifyData = JSON.stringify(data);

fs.writeFile('writeFileTest.json', stringifyData, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("Data Write Successfully !");
    }
})