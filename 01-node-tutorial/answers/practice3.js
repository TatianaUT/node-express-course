const {writeFile} = require('fs').promises;
const os = require('os');
const sentence = require('./practice2');

const makeFile = async()=>{
    try {
        await writeFile('./content/practice2.txt', sentence);
        await writeFile('./content/practice2.txt', 
        os.userInfo().username, {flag: 'a'});
        console.log('finished writing');    
    } catch(err) {
        console.log(err.message)
    }       
} 
makeFile()

console.log('I got here');
