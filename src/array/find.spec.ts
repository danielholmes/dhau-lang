import { assert } from "chai";
import { findOnly } from "./find";

describe("find", () => {
  describe("findOnly", () => {
    it("should return only result when only one", () => {
      const result = findOnly([1], (i) => i === 1);

      assert.equal(result, 1);
    });
  });
});
