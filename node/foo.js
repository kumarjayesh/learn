var circle = require('./circle.js');
console.log( 'The area of a circle of radius '+process.argv[2]+' is '
           + circle.area(+process.argv[2]));
