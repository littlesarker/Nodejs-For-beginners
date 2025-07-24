const fs=require('fs').promises;

async function read() {
    try {
        const data=await fs.readFile('my.txt','utf8');
        console.log(data);
        
    } catch (error) {
        console.error('Error reading file',error);
        
    }
}

read();