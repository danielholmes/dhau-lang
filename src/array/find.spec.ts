import { assert } from "chai";
import { findOnly, findOnlyIndex } from "./find";

describe("find", () => {
  describe("findOnly", () => {
    it("should return only result when only one item", () => {
      const result = findOnly([1], (i) => i === 1);

      assert.equal(result, 1);
    });

    it("should return only result when multiple items", () => {
      const result = findOnly([3, 4, 5, 1], (i) => i === 1);

      assert.equal(result, 1);
    });

    it("should throw when no matching result", () => {
      const runner = () => findOnly([2, 3, 4], (i) => i === 1);

      assert.throws(runner, "Expected exactly one item, found 0");
    });

    it("should throw when multiple matching results", () => {
      const runner = () => findOnly([1, 2, 3, 1, 4], (i) => i === 1);

      assert.throws(runner, "Expected exactly one item, found more than 1");
    });

    it("should throw custom message when multiple matching results", () => {
      const runner = () =>
        findOnly([2, 3, 1, 4, 1], (i) => i === 1, "Custom message");

      assert.throws(runner, "Custom message");
    });
  });

  describe("findOnlyIndex", () => {
    it("should return only result when only one item", () => {
      const result = findOnlyIndex([1], (i) => i === 1);

      assert.equal(result, 0);
    });

    it("should return only result when multiple items", () => {
      const result = findOnlyIndex([0, 982, 1], (i) => i === 1);

      assert.equal(result, 2);
    });

    it("should throw when no matching result", () => {
      const runner = () => findOnlyIndex([2, 3, 4], (i) => i === 1);

      assert.throws(runner, "Expected exactly one item, found 0");
    });

    it("should throw when multiple matching results", () => {
      const runner = () => findOnlyIndex([1, 2, 3, 1, 4], (i) => i === 1);

      assert.throws(runner, "Expected exactly one item, found more than 1");
    });

    it("should throw custom message when multiple matching results", () => {
      const runner = () =>
        findOnlyIndex([2, 3, 1, 4, 1], (i) => i === 1, "Custom message");

      assert.throws(runner, "Custom message");
    });
  });
});
