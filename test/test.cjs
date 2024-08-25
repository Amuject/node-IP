const IP = require('@wnynya/ip');

const ip = new IP('14.39.168.166/30');

console.log(ip);

console.log(ip.toString());

console.log(ip.to6().toString());

console.log(ip.getSubnet());

console.log(ip.isBogon(), ip.getBogon());

console.log(ip.getSubnetIPs());
