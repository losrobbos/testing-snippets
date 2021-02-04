const { sum } = require("./lib")

let result = sum(5, 10)

if( result == 15 ) {
  console.log("Test Summing works")
}
else {
  console.error("Test Summing failed")
}
