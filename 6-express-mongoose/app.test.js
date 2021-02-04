const supertest = require("supertest")
const app = require("./app")
const postman = supertest(app)

describe('Test User API', () => {

  // clear user database and re-seed
  beforeAll(async () => {
    // seed users
    let res = await postman.get('/users/seed')
    expect(res.status).toBe(200)
    expect(res.body.users).toBeDefined()
    expect(res.body.users.length).toBe(2)
  })

  test('should call home route', async () => {
    let res = await postman.get('/')
    expect(res.status).toBe(200)
    // check returned message
  })

  test.only('should create a user', async () => {
    let userNew = { email: "rob@rob.com", password: "rob123" }

    let res = await postman.post('/users').send(userNew)

    expect(res.status).toBe(200)
    expect(res.body.user).toBeDefined()
    expect(res.body.user.email).toBe(userNew.email)
    expect(res.body.user.role).toBe("Standard")
  })

  test('should fail creating a user', async () => {
    let userNew = { name: "Rob", age: 37 }

    let res = await postman.post('/users').send(userNew)

    expect(res.status).toBe(400) // expect to receive error for sending wrong data
    expect(res.error).toBeDefined()
  })

  afterAll(async () => {
    // close MongoDB connection
    await postman.get('/db/close')
  })

})