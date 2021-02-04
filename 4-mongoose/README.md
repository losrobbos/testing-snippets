## Test Workflow terms

TDD = Test Driven Development (Test first)

TDD Process:  
- TEST first
- CODE (your app) AFTERWARDS!

WORKFLOW: RED, GREEN, REFACTOR


## TEST TYPES

### Unit Test

Tests typically just ONE function (in isolation)

###  INTEGRATION TEST
    
Tests typically a function which calls some OTHER function
=> so we test the INTEGRATION of these units

Example: CAR PEDAL PUSH

EXPECT CAR PEDAL TO GO DOWN => UNIT TEST => JUST TEST ONE (!) THING
EXECUTE THE BREAKS OF YOUR CAR
BREAKS STOP THE TIRES
=> CAR STOPS

### End-to-End (End-2-End)

They test WHOLE USER FLOWS (User stories):

Whole INTEGRATION OF FRONTEND + BACKEND
=> making a fetch call to some routes
=> writing data to database
=> check integrity of data
=> check correct DOM responses


