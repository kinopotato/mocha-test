const request = require("supertest");
const expect = require("expect");

const app = require("./server").app;

//make a describe block called server
//create describe blocks for root and user URL

describe("server", () => {

  describe("#root", () => {
    it("should return 'hello world' response", (done)=> {
      request(app)
        .get("/")
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: "page not found"
          })
        })
        .end(done);
    })
  })

  describe("#users", () => {
    it("should include MY user; name and age", (done) => {
      request(app)
        .get("/users")
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: "Kino Potato",
            age: 28
          });
        })
        .end(done);
    })
  })
})

