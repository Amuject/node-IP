import IP from '@wnynya/ip';

const ip = new IP('127.30.1.254/30');

console.log(ip);

console.log(ip.toString());

console.log(ip.to6().toString());

console.log(ip.getSubnet());

console.log(ip.getBogon());

console.log(ip.getSubnetIPs());

const iip = new IP('127.0.0.1');

console.log(iip.toDemical()); // true
console.log(iip.isBogon()); // true

console.log(iip.in(new IP('127.0.0.1', '127.0.0.255'))); // true
console.log(iip.in(new IP('127.0.1.0/24'))); // false

console.log(new IP('127.0.1.0/24').getSubnet());
