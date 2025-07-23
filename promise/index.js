const { error } = require('console');

const fs =require('fs').promises;


const promise1=Promise.resolve('First result');
const promise2= new  Promise((resolve)=> setTimeout(() => resolve('secod Resullt',13000)));
const promise3=fs.readFile('my.txt','utf8');


Promise.all([promise1,promise2,promise3])
  .then(result => {
    console.log('result',result)
  })
  .catch(error => {
    console.error('Error in the one the promise',error);
    
  })

