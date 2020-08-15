describe("exercise_1_suite", function() {
  describe("myObj", function() {
      it("Please create a variable that contains an empty object called `myObj`.", function() {
          expect(myObj).is.a('object');
      });
      it("Please give the object myObj a property called 'aProperty' that is a string.", function() {
          expect(myObj).to.include.keys('aProperty');
          expect(myObj.aProperty).is.a('string');
      });
      it("Please give the object myObj a property called 'anotherProperty' that is a number.", function() {
          expect(myObj).to.include.keys('anotherProperty');
          expect(myObj.anotherProperty).is.a('number');
      });
  });
});

describe("exercise_2_suite", function() {
  describe("operationOnTwoNumbers", function() {
      it("operationOnTwoNumbers exists and is a function", function() {
          expect(operationOnTwoNumbers).is.a('function');
      });
      it("operationOnTwoNumbers((x,y) => x + y) should return a function", function() {
          expect(operationOnTwoNumbers((x, y) => x + y)).is.a('function');
      });
      it("operationOnTwoNumbers((x,y) => x * y)(2) should return a function", function() {
          expect(operationOnTwoNumbers((x, y) => x * y)(2)).is.a('function');
      });
      it("operationOnTwoNumbers((x,y) => x + y)(number1)(number2) should be equal to number1 + number2", function() {
          for (let i = 0; i < 100; i++) {
              const a = Math.floor(Math.random() * 100);
              const b = Math.floor(Math.random() * 100);
              expect(operationOnTwoNumbers((x, y) => x + y)(a)(b)).to.equal(a + b);
          }
      });
  });
});

describe("exercise_3_suite", function() {
  describe("callEach(array)", function() {
      it("Please create a function `callEach` that takes an array as an argument.", function() {
          expect(callEach).is.a('function');
      });
      it("Passing an array into `callEach` will call each function in the array once.", function() {
          const repeatTest = new Array(10).fill(0);
          repeatTest.forEach(_ => {
              // Setup spy functions
              let spies = [];
              for (let i = 0; i < (Math.floor(Math.random() * 10 + 1)); i++) {
                  spies = [...spies, sinon.spy()];
              }
              // Run callEach function
              callEach(spies);
              // Check each spy was called exactly once.
              spies.forEach(spy => {
                  expect(spy.calledOnce).is.true;
              });
          });
      });
  });
});


describe("exercise_4_suite", function() {
  describe("Add Number To List", function() {
      it("addN is a function", function() {
          expect(addN).is.a('function');
      });
      it("addN should not modify the original array", function() {
          let arr = [1,2,3,4,5,6,7,8,9,10];
          let arr2 = [1,2,3,4,5,6,7,8,9,10];
          addN(5, arr);
          expect(arr.map((k, i) => k == arr2[i]).every(x => x)).to.equal(true);

      });

      it("addN should add N to array", function() {
          let arr = [1,2,3,4,5,6,7,8,9,10];
          let arr2 = [1,2,3,4,5,6,7,8,9,10];
          expect(addN(5, arr).map((k, i) => k == arr2[i] + 5).every(x => x)).to.equal(true);
      });

  });

  describe("Get even numbers from list", function() {
      it("getEvens is a function", function() {
          expect(getEvens).is.a('function');
      });
      it("getEvents should not modify the original array", function() {
        let arr = [1,2,3,4,5,6,7,8,9,10];
        let arr2 = [1,2,3,4,5,6,7,8,9,10];
          getEvens(arr)
          expect(arr.map((k, i) => k == arr2[i]).every(x => x)).to.equal(true);
      });
      it("getEvens should only contain even numbers", function() {
        let arr = [1,2,3,4,5,6,7,8,9,10];
        expect(getEvens(arr).every(x => x % 2 == 0)).to.equal(true);
      });

  });
  describe("Multiply a List", function() {
      it("multiplyArray is a function", function() {
          expect(multiplyArray).is.a('function');
      });
      it("multiplyArray should not modify array", function() {
          let arr = [1,2,3,4,5,6,7,8,9,10];
          let arr2 = [1,2,3,4,5,6,7,8,9,10];
          multiplyArray(arr)
          expect(arr.map((k, i) => k == arr2[i]).every(x => x)).to.equal(true);
      });
      it("multiplyArray should take product of list correctly", function() {
          let total = 1;
          let arr = [0,1,2,3,4,5,6,7,8,9,10];

          let total2 = multiplyArray(arr)
          arr.shift()
          for (let i in arr) {
              total *= arr[i];
          }
          expect(total2).to.equal(total);
      });

  });
});

describe("exercise_5_suite", function() {
  describe("Range Function", function() {
      it("range is a function", function() {
          expect(range).is.a('function');
      });
      it("range(0) creates an empty array", function() {
          expect(range(0).length).to.equal(0);
      });
      it("Range should create a list from 0 to n-1", function() {
          const l = range(10)
          expect(l.every((num, i) => i === num)).to.equal(true)
      });
  });
});



describe("exercise_6_suite", function() {
  describe("Euler Problem 1 - Using Fluent Interface", function() {
      it("Euler1 is a function", function() {
          expect(Euler1).is.a('function');
      });
      it("Euler1 should correctly calculate solution", function() {
          expect(Euler1()).to.equal(233168);
      });
  });
});


describe("exercise_7_suite", function() {
  describe("Infinite Series Calculator", function() {
      it("infinite_series_calculator is a function", function() {
          expect(infinite_series_calculator).is.a('function');
      });
      it("infinite_series_calculator can sum numbers", function() {
        expect(infinite_series_calculator(100, x=>x, x=>true, operationOnTwoNumbers((x, y) => x + y))).to.equal(4950)
      });
})});

describe("exercise_8_suite", function() {
    describe("Calculating Pi", function() {
      it ("calculatePiTerm is a function", function() {
        expect(calculatePiTerm).is.a('function');
      });
      it ("calculatePiTerm calculates the term correctly", function() {
        expect(calculatePiTerm(3)).to.equal(36/35);
      });
      it ("skipZero is a function", function() {
        expect(skipZero).is.a('function');
      });
      it ("skipZero returns true for non zero terms", function() {
        expect(skipZero(100)).to.equal(true);
      });
      it ("skipZero returns false for zero terms", function() {
            expect(skipZero(0)).to.equal(false);
      });
      it ("productAccumulate is a function", function() {
        expect(productAccumulate).is.a('function');
      });
      it ("productAccumulate calculates the term correctly", function() {
        expect(productAccumulate(3)(4)).to.equal(12);
      });
      it("Expect 'pi' to be close to value", function() {
          expect(calculatePi()).to.closeTo(Math.PI, 0.01);
      });
  });
});

describe("exercise_9_suite", function() {
    describe("Calculate e", function() {
      it ("factorial is a function", function() {
        expect(factorial).is.a('function');
      });
      it ("factorial calculates the factorial correctly", function() {
        expect(factorial(10)).to.equal(3628800);
      });
      it ("calculateETerm is a function", function() {
        expect(calculateETerm).is.a('function');
      });
      it ("calculateETerm calculates the term correctly", function() {
        expect(calculateETerm(2)).to.equal(1/40);
      });
      it ("alwaysTrue is a function", function() {
        expect(alwaysTrue).is.a('function');
      });
      it ("alwaysTrue returns true for non zero terms", function() {
        expect(alwaysTrue(100)).to.equal(true);
      });
      it ("alwaysTrue returns true for zero terms", function() {
            expect(alwaysTrue(0)).to.equal(true);
      });
      it ("sumAccumulate is a function", function() {
        expect(sumAccumulate).is.a('function');
      });
      it ("sumAccumulate calculates the term correctly", function() {
        expect(sumAccumulate(3)(4)).to.equal(7);
      });
      it("Expect 'e' to be close to value", function() {
          expect(calculateE()).to.closeTo(Math.exp(1), 0.01);
      });
  });
});


describe("exercise_10_suite", function() {
    describe("Infinite Series Calculator", function() {
      it ("sin is a function", function() {
        expect(sin).is.a('function');
      });

      it ("sin(pi/2) to be close to value", function() {
        expect(sin(Math.PI/2)).to.closeTo(1, 0.01)
      });
      it ("sin(1) to be close to value", function() {
        expect(sin(1)).to.closeTo(Math.sin(1), 0.01)
      });
    })
});