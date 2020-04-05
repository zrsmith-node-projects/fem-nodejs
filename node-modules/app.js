const nameFunction = require("./lib.js");
const lib2 = require("./lib2.js");
const { action, userIds, value } = require("./lib2.js");

nameFunction();

// lib2.action();
// console.log("userIds ", lib2.userIds);
// console.log("value ", lib2.value);

// using destructured line 3
action();
console.log("userIds ", userIds);
console.log("value ", value);
