var moment = require('moment');

var date = new moment();
// date.add(1, 'year').subtract(9, 'months');
console.log(date.format('MMM Do YYYY h:mm:ss A'));

console.log(date.format('MMM Do YYYY h:mm A'));
