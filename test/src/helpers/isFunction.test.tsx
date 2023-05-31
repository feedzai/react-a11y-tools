import { isFunction } from "../../../src/helpers";

describe("isFunction", () => {
	it("should return true if the passed value is a function", () => {
		const testFunction = jest.fn();
		const dummyFunction = () => "test";

		expect(isFunction(testFunction)).toBeTruthy();
		expect(isFunction(dummyFunction)).toBeTruthy();
	});
});
