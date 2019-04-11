const expect = require("expect");
const utils = require("./utils");

describe("Utils", () => {

  describe("#add", () => {
    it("should add two numbers", () => {
      let res = utils.add(33, 11);
      expect(res).toBe(44).toBeA("number");
    })

    it("should async add two numbers", (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA("number");
        done();
      });
    });
  })
  
  describe("#square", () => {
    it("should square a number", () => {
      let res = utils.square(2);
      expect(res).toBe(4).toBeA("number");
    })
  
    it("should async square a number", (done) => {
      utils.asyncSquare(3, (square) => {
        expect(square).toBe(9).toBeA("number");
        done();
      })
    })
  })

  it("should verify first and last names are set", () => {
    let res = utils.setName({
      age: 25,
      location: "Philly"
      }, "Andrew Mead");

      expect(res).toInclude(
        {firstName: "Andrew",
        lastName: "Mead"}).toBeAn("object")
  })

  // it("should expect some values", () => {
  //   //toEqual is used to compare object "equality"
  //   expect({name: "Andrew"}).toEqual({name: "Andrew"});
  //   expect([2,3,4]).toInclude(4);
  //   expect([2,3,4]).toExclude(5);
  //   expect({
  //     name: "Andrew",
  //     age: 25,
  //     location: "Philly"
  //   }).toInclude({
  //     age: 25
  //   })
  // })
})
