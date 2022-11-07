const request = require("request");

const base_url = "http://localhost:3031/";
const bikes_url = base_url + "bikes/all/Raleigh";

describe("First Node Test Server", () => {
  describe("GET /bikes/all/Raleigh", () => {
    it("returns All Bikes with Raleigh Prices contains 95.202 ", (done) => {
      request.get(bikes_url, (error, response, body) => {
        expect(body).toBeTruthy();
        expect(body).toContain("95.202");
        done();
      });
    });
    // when searching for unknow location return 404
    it("returns 404", (done) => {
      request.get(base_url + "bikes/all/US-NYC", (error, response, body) => {
        expect(response.statusCode).toBe(404);
        done();
      });
    });
  });
  describe("GET /team", () => {
    it("returns BackEnd Bikes", function (done) {
      request.get(base_url + "bikes/team", (error, response, body) => {
        expect(body).toBeTruthy();
        expect(body).toContain("BackEnd Bikes");
        done();
      });
    });
  });
});
