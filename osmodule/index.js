const  os =require('os');

console.log(`OS Platfrom ${os.platform()}`);
console.log(`OS type ${os.type}`);
console.log(`os Release ${os.release}`);
console.log(`CPU acchitecture ${os.arch}`);


const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
console.log(`Memory: ${freeMemGB}GB free of ${totalMemGB}GB`);


const userinfo =os.userInfo();

console.log(`Current user ${userinfo.username}`);

const uptime = os.uptime();
console.log(`System Uptime: ${uptime} seconds`);

// Format uptime in a more readable way
const uptimeDays = Math.floor(uptime / (60 * 60 * 24));
const uptimeHours = Math.floor((uptime % (60 * 60 * 24)) / (60 * 60));
const uptimeMinutes = Math.floor((uptime % (60 * 60)) / 60);
const uptimeSeconds = Math.floor(uptime % 60);

console.log(`System has been running for: ${uptimeDays} days, ${uptimeHours} hours, ${uptimeMinutes} minutes, ${uptimeSeconds} seconds`);

const networkInterfaces = os.networkInterfaces();
console.log('Network Interfaces:');
console.log(JSON.stringify(networkInterfaces, null, 2));

// Iterate through network interfaces
Object.keys(networkInterfaces).forEach((interfaceName) => {
  console.log(`\nInterface: ${interfaceName}`);

  networkInterfaces[interfaceName].forEach((interface) => {
    console.log(` Address Family: ${interface.family}`);
    console.log(` IP Address: ${interface.address}`);
    console.log(` Netmask: ${interface.netmask}`);
    if (interface.mac) {
      console.log(` MAC Address: ${interface.mac}`);
    }
    console.log(` Internal: ${interface.internal ? 'Yes' : 'No'}`);
  });
});

// Function to get primary IPv4 address (non-internal)
function getPrimaryIPv4Address() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const interface of interfaces[name]) {
      // Skip internal and non-IPv4 addresses
      if (!interface.internal && interface.family === 'IPv4') {
        return interface.address;
      }
    }
  }
  return 'No IPv4 address found';
}

console.log(`\nPrimary IPv4 Address: ${getPrimaryIPv4Address()}`); 
