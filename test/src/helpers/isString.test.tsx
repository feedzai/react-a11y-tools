import { isString } from "../../../src/helpers";

describe("isString", () => {
	it("should return true if the passed value is a string", () => {
		expect(isString("lorem ipsum")).toBe(true);
		expect(isString("true")).toBe(true);
		expect(isString("")).toBe(true);
	});
	it("should return false if the passed value is not a string", () => {
		expect(isString(true)).toBe(false);
		expect(isString(123)).toBe(false);
		expect(isString(null)).toBe(false);
	});
});
