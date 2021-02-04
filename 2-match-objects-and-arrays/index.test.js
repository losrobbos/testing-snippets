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
    // expect(5).toBe(2)
  })

  test('should compare objects', () => {
    
    // these objects have IDENTICAL content. The order of keys does not matter
    let obj1 = { name: "Pedro", age: 27 }
    let obj2 = { age: 27, name: "Pedro" }

    expect(obj1).toEqual(obj2) // this will work
  })

  test('should compare arrays', () => {
    
    let arr1 = [ "Raquel", "Pedro" ]
    let arr2 = [ "Raquel", "Pedro" ]

    // these arrays below are NOT equal ! the order matters in arrays!
    // let arr1 = [ "Raquel", "Pedro" ]
    // let arr2 = [ "Pedro", "Raquel" ]

    expect(arr1).toEqual(arr2)
  })

})


// CONCLUSION:
// Testing ASSURES STABILITY of already coded features
