const { log } = require('console');
const fs = require('fs');

try {
  // Read file synchronously
  const data = fs.readFileSync('my.txt', 'utf8');
  console.log('File content:', data);
} catch (err) {
  console.error('Error reading file:', err);
} 


//creating and writing file 

async function wirteFile() {
    try {
        
        await fs.watchFile('my.txt','Hello node erite file','utf8');


        const data={name :'Rs',age:'8493849'};

        await fs.readFile('data.josn',JSON.stringify(data,null,2),'utf8');



        console.log('Files created succesfully');
        

    } catch (error) {
        console.log('Error writing files');
        
    }
}


wirteFile();