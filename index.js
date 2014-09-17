var path = require('path'),
    fs = require('fs'),
    baseDirectory = path.dirname(module.parent.filename),
    files = fs.readdirSync(baseDirectory),
    result = {};

for(var i = 0; i < files.length; i++) {
    var file = files[i],
        fullPath = path.join(baseDirectory, file);

    if(
        file.toLowerCase() !== 'index.js' &&
        ~file.indexOf('.') &&
        fs.statSync(fullPath).isFile()
        ){
        result[path.basename(file, path.extname(file))] = require(fullPath);
    }
}

module.exports = result;