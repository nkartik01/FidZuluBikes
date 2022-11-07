const request = require("request");

const base_url = "http://localhost:3031/";
const bikes_url = base_url + "bikes/all/Durham";

describe("First Node Test Server", function () {
  describe("GET /bikes/all/Durham", () => {
    it("returns status code 200", (done) => {
      request.get(bikes_url, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
    it("contains brand", (done) => {
      request.get(bikes_url, (error, response, body) => {
        expect(body).toBeTruthy();
        expect(body).toContain("brand");
        done();
      });
    });
  });

  // test for wrong path and expect 404
  describe("GET /bikeess", () => {
    // accessing wrong path
    it("returns status code 404", (done) => {
      request.get(base_url + "bikeess", (error, response, body) => {
        expect(response.statusCode).toBe(404);
        done();
      });
    });
  });

  // test for wrong path and expect 404
  describe("GET /hello", () => {
    // accessing wrong path
    it("returns status code 404", (done) => {
      request.get(base_url + "hello", (error, response, body) => {
        expect(response.statusCode).toBe(404);
        done();
      });
    });
  });
});
