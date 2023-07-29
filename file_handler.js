const {promisify} = require("util");
const {readFile, writeFile} = require("fs");
const part = require("path");
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

// Utility functions for file system operations
const FileSystem = {
    async saveXMLFile(fileName, xmlData) {
        let url = part.join(`${fileName}`);
        await writeFileAsync(url, xmlData);
    },

    async readXMLFile(fileName) {
        let url = part.join(`${fileName}`);
        return await readFileAsync(url, 'utf8');
    },

    async clearXMLFile(fileName) {
        let url = part.join(`${fileName}`);
        await writeFileAsync(url, '');
    }
};


// (async () => {
//     console.log('Working')
//     await FileSystem.clearXMLFile('student1')
// })();
module.exports = {
    FileSystem
}