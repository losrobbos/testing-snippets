const { sum, subtract } = require("./lib")

// TEST SUITE
// => collection of test cases that logically belong together

describe('testing calculator library', () => {

  // TEST CASE (= UNIT TEST)
  test('should sum up two numbers', () => {
    let result = sum(10, 5) // expect to get: 15
    expect(result).toBe(15)
  })
  
  test('should subtract two numbers', () => {
    let result = subtract(10, 5) // expect to get: 15
    expect(result).toBe(5)
  })

  test('should do wrong stuff', () => {
    expect(5).toBe(2)
  })
})


// CONCLUSION:
// Testing ASSURES STABILITY of already coded features
