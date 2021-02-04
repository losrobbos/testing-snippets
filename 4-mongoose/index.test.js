const mongoose = require("mongoose")
const { deleteOne } = require("./Fruit")
const Fruit = require("./Fruit")

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/TEST_fruits_db"

// beforeAll can also be used OUTSIDE a testsuite
// => this will now run before all test suites in this file
// => this is ideal for setting up connections
beforeAll( async (done) => {
    try {
      await mongoose.connect(MONGODB_URI, { 
        useNewUrlParser: true, useUnifiedTopology: true, 
        serverSelectionTimeoutMS: 3000, // will catch wrong server URLs
        connectTimeoutMS: 3000, // will catch unresponsive servers
      })
      console.log("DB connection established")
      done()
    }
    catch(err) {
      console.log("DB connection failed")
      process.exit(1) // exit JEST when we cannot connect to DB
        // due to a bug of jest, calling done(err) inside of beforeAll does not work!
        // the following tests would still (!) get executed. 
        // So we need to "harshly" stop the jest script with process.exit at this point
    }
  })

// SET OF TESTS (= TEST SUITE)
describe('test this fruits thing', () => {

  // beforeAll: runs before ANY test is executed in a suite! 
  // -> ideal for seeding up some suite specific test data 
  //    that we will work with in our tests
  beforeAll( async (done) => {

    // purge fruits => start clean
    await Fruit.deleteMany()

    try {
      // seed in some fruits
      await  Fruit.create([
            { name: "Cherry", color: "red" },
            { name: "Lemon", color: "yellow" }
      ])
      console.log("Created fruits")
      done() // setup finished => can start running tests
    }
    catch(err) {
      console.log("ERROR on seeding")
      done(err) // something failed during seeding => abort whole testsuite!
    }
  })

  // close the mongodb connection after ALL tests have been finished
  afterAll(() => {
    mongoose.connection.close()
  })

  // the line below would run code before EACH test
  // beforeEach()

  it('should create a fruit', async () => {
    let fruitNew = await Fruit.create({ name: "Banana" })
    expect(fruitNew._id).toBeDefined()
  })

  it('should fail creating a fruit', async () => {
    try {
      // this should fail because it violates the schema rules
      let fruitNew = await Fruit.create({ title: "Blueberry" })
    }
    catch(err) {
      expect(err.message).toContain("validation failed")
      // expect(err.message).toBe("Fruit validation failed: name: Path `name` is required.")
    }
  })

  it('should update a fruit', async () => {
    
    // find
    let fruit = await Fruit.findOne({ name: "Cherry" })
    expect(fruit).toBeDefined()
    expect(fruit.color).toBe("red")

    // update
    fruit.color = "darkred"
    fruit = await fruit.save()
    expect(fruit.color).toBe("darkred")
  })  


})