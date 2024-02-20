/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from "cypress";
const codeCoverageTask = require('@cypress/code-coverage/task');

const CYPRESS_FOLDER = "./test/cypress";

export default defineConfig({

	viewportWidth: 1280,
	viewportHeight: 800,
	retries: {
		runMode: 2,
	},
	video: false,
	downloadsFolder: `${CYPRESS_FOLDER}/downloads`,
	fixturesFolder: `${CYPRESS_FOLDER}/fixtures`,
	screenshotsFolder: `${CYPRESS_FOLDER}/screenshots`,
	videosFolder: `${CYPRESS_FOLDER}/videos`,
	supportFolder: `${CYPRESS_FOLDER}/support`,
	e2e: {
		baseUrl: "http://localhost:3000/react-a11y-tools",
		specPattern: `${CYPRESS_FOLDER}/e2e/**/*.cy.{js,jsx,ts,tsx}`,
		supportFile: `${CYPRESS_FOLDER}/support/e2e.ts`,
		setupNodeEvents(on, config) {
			codeCoverageTask(on, config);

			return config;
		},
	},
	component: {
		supportFile: `${CYPRESS_FOLDER}/support/component.ts`,
		specPattern: `${CYPRESS_FOLDER}/component-testing/**/*.spec.{js,jsx,ts,tsx}`,
		indexHtmlFile: `${CYPRESS_FOLDER}/support/component-index.html`,
		devServer: {
			framework: "react",
			bundler: "vite",
		},
		setupNodeEvents(on, config) {
			codeCoverageTask(on, config);

			return config;
		},
	},
});
