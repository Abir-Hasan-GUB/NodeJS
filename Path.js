const path = require('path');
const myCurrentPath = __filename;
console.log(myCurrentPath)

console.log(__dirname)
console.log(path.basename(__dirname))
console.log(path.extname(myCurrentPath))
const format = {
    dir: 'local/Test',
    name: 'Test',
    ext: '.js'
}

console.log(path.format(format))
console.log(path.isAbsolute(myCurrentPath))
console.log(path.isAbsolute('./Math.js'))
console.log(path.parse(myCurrentPath))
console.log(path.join('abir','js','test.js'))
console.log(path.resolve('abir','js','test.js'))