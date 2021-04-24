module.exports = {
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	collectCoverage: true,
	coverageDirectory: "<rootDir>/jest-coverage",
	coverageReporters: ["json", "lcov", "text-summary", "clover"],
	coverageThreshold: {
		global: {
			statements: 90,
			branches: 90,
			functions: 90,
			lines: 90,
		},
	},
	testURL: "http://localhost/",
	setupFiles: ["raf/polyfill"],
	moduleNameMapper: {
		"\\.(css|scss)$": "identity-obj-proxy",
		"\\.(png|gif)$": "identity-obj-proxy",
	},
	modulePathIgnorePatterns: ["npm-cache", ".npm", ".cache", "cypress", "stories"],
};
