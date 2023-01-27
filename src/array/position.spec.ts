import { assert } from "chai";
import { last, first } from "./position";

describe("position", () => {
  describe("last", () => {
    it("should return only result when only one item", () => {
      const result = last([1]);

      assert.equal(result, 1);
    });

    it("should return only result when multiple items", () => {
      const result = last(["hello", "world"]);

      assert.equal(result, "world");
    });

    it("should throw when no items", () => {
      const runner = () => last([]);

      assert.throws(runner, "Unable to find last - empty array");
    });

    it("should throw custom message when no items", () => {
      const runner = () => last([], "Custom message");

      assert.throws(runner, "Custom message");
    });
  });

  describe("first", () => {
    it("should return only result when only one item", () => {
      const result = first([1]);

      assert.equal(result, 1);
    });

    it("should return only result when multiple items", () => {
      const result = first(["hello", "world"]);

      assert.equal(result, "hello");
    });

    it("should throw when no items", () => {
      const runner = () => first([]);

      assert.throws(runner, "Unable to find first - empty array");
    });

    it("should throw custom message when no items", () => {
      const runner = () => first([], "Custom message");

      assert.throws(runner, "Custom message");
    });
  });
});
