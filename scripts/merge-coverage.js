/**
 * merge-reports.js
 *
 * This script merges the coverage reports from Cypress and Jest into a single one,
 * inside the "coverage" folder
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
const { execSync } = require("child_process");
const fs = require("fs-extra");
const chalk = require("chalk");

const COVERAGE_FOLDER = "coverage-reports";
const REPORTS_FOLDER = `${COVERAGE_FOLDER}/reports`;
const FINAL_OUTPUT_FOLDER = "coverage";

const { log } = console;

/**
 * Run "nyc merge" inside the reports folder, merging the two coverage files into one,
 * then generate the final report on the coverage folder
 *
 * @param {string[]} commands
 * @returns {Promise<void>}
 */
function runCommand(commands) {
	return new Promise((resolve, reject) => {
		try {
			commands.forEach((command) => {
				execSync(command, { stdio: "inherit" });
			});
			resolve();
		} catch (err) {
			log(chalk.yellowBright(`⚠️ Error running commands: ${err}`));
			reject(err);
		}
	});
}

/**
 * Create the reports folder and move the reports from cypress and jest inside it
 *
 * @returns {Promise<void>}
 */
function bootstrapFolders() {
	return new Promise((resolve, reject) => {
		try {
			// Cleans the reports folder
			fs.emptyDirSync(REPORTS_FOLDER);

			// Copies each coverage file to the reports folder
			runCommand([
				`cp ${COVERAGE_FOLDER}/jest/coverage-final.json ${REPORTS_FOLDER}/from-jest.json`,
				`cp ${COVERAGE_FOLDER}/cypress/coverage-final.json ${REPORTS_FOLDER}/from-cypress.json`,
			]);
			log(chalk.green("✓ Copied jest and cypress coverage folders!"));

			// Cleans the nyc folder and the coverage folder
			fs.emptyDirSync(".nyc_output");
			fs.emptyDirSync(FINAL_OUTPUT_FOLDER);
			log(chalk.green("✓ Finished bootstraping folders!"));

			resolve();
		} catch (err) {
			log(chalk.yellowBright(`⚠️ Error bootstraping folders: ${err}`));

			reject();
		}
	});
}

bootstrapFolders()
	.then(() =>
		runCommand([
			// Merge the reports folder's json
			`nyc merge ${REPORTS_FOLDER}`,

			// Move merged coverage.json to .nyc_output
			`mv coverage.json .nyc_output/out.json`,

			// Create text-summary+html report and output to coverage directory
			`npx nyc report --reporter=text-summary`,
			`npx nyc report --reporter=html --report-dir=${FINAL_OUTPUT_FOLDER}`,
		]),
	)
	.then(() => {
		log(chalk.green("✓ Finished merging coverage!"));
	})
	.catch((err) => {
		log(chalk.yellowBright(`⚠️ Error merging reports: ${err}`));
	});
