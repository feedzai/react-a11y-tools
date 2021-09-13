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
const REPORTS_FOLDER = "reports";
const FINAL_OUTPUT_FOLDER = "coverage";
const { log } = console;
/**
 * Run "nyc merge" inside the reports folder, merging the two coverage files into one,
 * then generate the final report on the coverage folder
 *
 * @param {string[]} commands
 */
function run(commands) {
	commands.forEach((command) => {
		execSync(command, { stdio: "inherit" });
	});
}

/**
 * Create the reports folder and move the reports from cypress and jest inside it
 *
 * @returns {void}
 */
function bootstrapFolders() {
	fs.emptyDirSync(REPORTS_FOLDER);

	fs.copyFileSync("cypress-coverage/coverage-final.json", `${REPORTS_FOLDER}/from-cypress.json`);
	fs.copyFileSync("jest-coverage/coverage-final.json", `${REPORTS_FOLDER}/from-jest.json`);
	log(chalk.green("✓ Copied jest and cypress coverage folders!"));
	fs.emptyDirSync(".nyc_output");
	fs.emptyDirSync(FINAL_OUTPUT_FOLDER);
	log(chalk.green("✓ Finished bootstraping folders!"));
}

bootstrapFolders();
run([
	// "nyc merge" will create a "coverage.json" file on the root, we move it to .nyc_output
	`nyc merge ${REPORTS_FOLDER} && shx mv coverage.json .nyc_output/out.json`,
	`nyc report --reporter=text-summary`,
	`nyc report --reporter=html --report-dir=${FINAL_OUTPUT_FOLDER}`,
]);
