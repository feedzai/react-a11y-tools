import { isBoolean, boolOrBoolString } from "../../../src/helpers";

describe("isBoolean", () => {
	it("should return true if the passed value is boolean", () => {
		expect(isBoolean(true)).toBeTruthy();
		expect(isBoolean(false)).toBeTruthy();
	});
});

describe("boolOrBoolString", () => {
	it("should return true if the passed value is a trueboolean", () => {
		expect(boolOrBoolString(true)).toBeTruthy();
		expect(boolOrBoolString("true")).toBeTruthy();
		expect(boolOrBoolString("false")).toBeFalsy();
	});
});
