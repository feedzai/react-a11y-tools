/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from "cypress";
const codeCoverageTask = require('@cypress/code-coverage/task')

export default defineConfig({
	viewportWidth: 1280,
	viewportHeight: 800,
	retries: {
		runMode: 2,
	},
	video: false,
	e2e: {
		baseUrl: "http://localhost:3000/react-a11y-tools",
		setupNodeEvents(on, config) {
			codeCoverageTask(on, config);

			return config;
		},
	},
	component: {
		specPattern: "cypress/test/**/*.spec.{js,jsx,ts,tsx}",
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
