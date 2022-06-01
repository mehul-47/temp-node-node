const os = require('os')
const user = os.userInfo()
// info about cuurent user
console.log(user);

// method returns the system uptime in second
console.log(`The system Uptime is ${os.uptime()}seconds`);
const currentOs ={
    name:os.type(),
    relase:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOs);