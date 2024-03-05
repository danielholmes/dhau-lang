import { assert } from "chai";
import { formatPercentage } from "./format.ts";

describe("format", () => {
  describe("formatPercentage", () => {
    it("should return whole ratio correctly", () => {
      const result = formatPercentage(0.01);

      assert.equal(result, "1%");
    });

    it("should return fractional ratio round down correctly", () => {
      const result = formatPercentage(0.01432);

      assert.equal(result, "1%");
    });

    it("should return fractional ratio round up correctly", () => {
      const result = formatPercentage(0.987);

      assert.equal(result, "99%");
    });

    it("should return decimal places correctly", () => {
      const result = formatPercentage(0.67432, { decimalPlaces: 2 });

      assert.equal(result, "67.43%");
    });
  });
});
