const os = require('os');
console.log(os.arch());
console.log(((parseInt(os.freemem()) / 1024) / 1024) + ' GB');
console.log(os.cpus());
console.log(os.hostname());
console.log(os.userInfo());
console.log(os.uptime());
console.log(os.version());