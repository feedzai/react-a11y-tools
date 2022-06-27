module.exports = {
	preset: "ts-jest",
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	collectCoverage: true,
	coverageDirectory: "<rootDir>/coverage-reports/jest",
	coverageReporters: ["lcov", "json"],
	testURL: "http://localhost/",
	setupFiles: ["raf/polyfill"],
	moduleNameMapper: {
		"\\.(css|scss)$": "identity-obj-proxy",
		"\\.(png|gif)$": "identity-obj-proxy",
		"^src(.*)$": "<rootDir>/src$1",
	},
	modulePathIgnorePatterns: ["npm-cache", ".npm", ".cache", "cypress", "stories"],
};
