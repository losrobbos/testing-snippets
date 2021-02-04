const supertest = require("supertest") // library for simulating API calls
const app = require("./app")
const postman = supertest(app) // connect supertest with API and startup API

describe('test this API....', () => {

  test('call the home route...', async () => {
    let res = await postman.get('/')
    expect(res.status).toBe(200)
  })

  test('make post call to home route...', async () => {
    let postData = { name: "Rob", age: 37 }
    let res = await postman.post('/')
      .send(postData) // this sends data as BODY

    expect(res.status).toBe(200)
    expect(res.body).toEqual(postData)
  })

})