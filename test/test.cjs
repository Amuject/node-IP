const IP = require('@wnynya/ip');

const ip = new IP('127.30.1.254/30');

console.log(ip);

console.log(ip.toString());

console.log(ip.to6().toString());

console.log(ip.getSubnet());

console.log(ip.getBogon());

console.log(ip.getSubnetIPs());
