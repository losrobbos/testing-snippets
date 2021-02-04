const { getFruitData, getFruitDataDelayedSuccess, getFruitDataDelayedFail } = require("./data-lib")

describe('sweet fruit testing suite', () => {

  test('should get fruit data delayed success', async () => {
    let fruits = await getFruitDataDelayedSuccess() // waits for resolve() function of the Promise to finish
    expect(fruits.length).toBe(3)
  })

  // TEST error scenarios
  // if error happens like expected => this is a SUCCESS test
  test('should get fruit data delayed fail', async () => {

    try {
      let fruits = await getFruitDataDelayedFail() // waits for resolve() function of the Promise to finish
    }
    // catch handles reject case of Promise
    catch(err) {
      expect(err).toEqual({
        error: "Fruits not available...",
        code: 404
      })
    }

  })

  test('should get fruit data', async () => {

    let fruits = await getFruitData()
    expect(fruits.length).toBe(3)

    // this is doing the same as above just with normal .then() handler
    // getFruitData()
    // .then(arrFruits => {
    //   console.log(arrFruits)
    //   expect(arrFruits.length).toBe(3)
    // })

  })

})