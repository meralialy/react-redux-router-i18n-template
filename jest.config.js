module.exports = {
	collectCoverageFrom: ["src/**", "!src/**/*.json"],
	coverageDirectory: "coverage",
	coveragePathIgnorePatterns: ["index.js", "./src/i18n/locales/"],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	setupFilesAfterEnv: ["./jest.setup.js"],
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.(js|jsx)$": "babel-jest",
	},
};
