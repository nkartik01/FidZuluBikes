let request = require("request");
let bikes = require("../modules/bikes");

describe("Unit tests on bikes module", () => {
  describe("load all bikes", () => {
    //positive test to load all bikes
    it("have two elements", () => {
      let results = bikes.list();
      expect(results.length).toBe(4);
    });
  });
  describe("load by location", () => {
    //positive test to load bike by US-NC
    it("with location as Durham", () => {
      let results = bikes.query_by_location("Durham");
      expect(results[0].price).toBe(81.9504);
    });

    //negative test to load bike by wrong location
    it("with location aleigh", () => {
      let results = bikes.query_by_location("aleigh");
      expect(results).toBeNull();
    });
  });
});
