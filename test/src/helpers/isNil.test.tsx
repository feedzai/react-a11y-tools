import { isNil } from "../../../src/helpers";

describe("isNil", () => {
	it("should return true if the passed value is a nil", () => {
		expect(isNil(null)).toBe(true);
		expect(isNil(undefined)).toBe(true);
	});

	it("should return false if the passed value is not nil", () => {
		expect(isNil("null")).toBe(false);
		expect(isNil("undefined")).toBe(false);
	});
});
