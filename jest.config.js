module.exports = {
	setupFiles: ['<rootDir>/jest.setup.js'],
	verbose: true,
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	transform: {
		"^.+\\.js$": "babel-jest",
		"^.+\\.(css|scss|less)$": "jest-css-modules"
	}
}