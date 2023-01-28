import { assert } from "chai";
import { lastOrThrow, firstOrThrow } from "./position";

describe("position", () => {
  describe("lastOrThrow", () => {
    it("should return only result when only one item", () => {
      const result = lastOrThrow([1]);

      assert.equal(result, 1);
    });

    it("should return only result when multiple items", () => {
      const result = lastOrThrow(["hello", "world"]);

      assert.equal(result, "world");
    });

    it("should throw when no items", () => {
      const runner = () => lastOrThrow([]);

      assert.throws(runner, "Unable to find last - empty array");
    });

    it("should throw custom message when no items", () => {
      const runner = () => lastOrThrow([], "Custom message");

      assert.throws(runner, "Custom message");
    });
  });

  describe("firstOrThrow", () => {
    it("should return only result when only one item", () => {
      const result = firstOrThrow([1]);

      assert.equal(result, 1);
    });

    it("should return only result when multiple items", () => {
      const result = firstOrThrow(["hello", "world"]);

      assert.equal(result, "hello");
    });

    it("should throw when no items", () => {
      const runner = () => firstOrThrow([]);

      assert.throws(runner, "Unable to find first - empty array");
    });

    it("should throw custom message when no items", () => {
      const runner = () => firstOrThrow([], "Custom message");

      assert.throws(runner, "Custom message");
    });
  });
});
