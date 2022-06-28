import { isNumber } from "../../../src/helpers";

describe("isNumber", () => {
	it("should return true if the passed value is an integer", () => {
		expect(isNumber(10)).toBe(true);
		expect(isNumber(parseInt("10"))).toBe(true);
	});
	it("should return false if the passed value is not a number", () => {
		expect(isNumber("10")).toBe(false);
		expect(isNumber("")).toBe(false);
		expect(isNumber(true)).toBe(false);
	});
});
