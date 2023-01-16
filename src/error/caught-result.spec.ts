import { assert } from "chai";
import { caughtResultToString } from "./caught-result";

describe("caughtResult", () => {
  describe("caughtResultToString", () => {
    it("should return error message", () => {
      const result = caughtResultToString(new Error("Some message"));

      assert.equal(result, "Some message");
    });

    it("should return string", () => {
      const result = caughtResultToString("Some string");

      assert.equal(result, "Some string");
    });

    it("should return number as string", () => {
      const result = caughtResultToString(1234);

      assert.equal(result, "1234");
    });
  });
});
