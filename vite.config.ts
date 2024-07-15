/// <reference types="vitest/globals" />
import { resolve } from "node:path";
import type { RollupOptions } from "rollup";
import { InlineConfig } from "vitest";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import IstanbulPlugin from "vite-plugin-istanbul";
import tsconfigPaths from "vite-tsconfig-paths";

type ModuleFormat =
	| "amd"
	| "cjs"
	| "es"
	| "iife"
	| "system"
	| "umd"
	| "commonjs"
	| "esm"
	| "module"
	| "systemjs";

const BASE_EXTERNAL_LIBRARIES = {
	react: "React",
	"react-dom": "ReactDOM",
	"react/jsx-runtime": "react/jsx-runtime",
	"@feedzai/js-utilities": "JSUtilities",
	"focus-trap-react": "FocusTrapReact",
};

const ROLLUP_OPTIONS: RollupOptions = {
	external: [...Object.keys(BASE_EXTERNAL_LIBRARIES)],
	output: {
		globals: {
			...BASE_EXTERNAL_LIBRARIES,
		},
	},
};

/**
 * Gets a per-file format filename.
 *
 * @param format
 * @returns
 */
function getFilename(format: ModuleFormat) {
	const OUTPUT: Partial<Record<typeof format, string>> = {
		es: `index.mjs`,
		cjs: `index.cjs`,
	};

	return OUTPUT[format] ?? `index.cjs`;
}

const VITEST_CONFIG: InlineConfig = {
	globals: true,
	environment: "jsdom",
	include: ["./test/vitest/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
	setupFiles: "./config/setupVitest.ts",
	coverage: {
		all: true,
		enabled: true,
		reporter: ["html", "json", "text-summary"],
		provider: "istanbul",
		reportsDirectory: "./coverage-reports/vitest",
		exclude: [
			"coverage/**",
			"dist/**",
			"**/[.]**",
			"packages/*/test?(s)/**",
			"**/*.d.ts",
			"**/virtual:*",
			"**/__x00__*",
			"**/\x00*",
			"test/cypress/**",
			"test?(s)/**",
			"test?(-*).?(c|m)[jt]s?(x)",
			"**/*{.,-}{test,spec}.?(c|m)[jt]s?(x)",
			"**/__tests__/**",
			"**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
			"**/vitest.{workspace,projects}.[jt]s?(on)",
			"**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}",
			"documentation/**",
			"coverage-reports/**",
			"coverage/**",
		],
	},
};

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		dts({
			insertTypesEntry: true,
		}),
		IstanbulPlugin({
			cypress: true,
			requireEnv: false,
		}),
		tsconfigPaths(),
		react(),
	],
	resolve: {
		alias: [
			{
				find: "src",
				replacement: resolve(__dirname, "./src"),
			},
		],
	},
	css: {
		modules: {
			generateScopedName: "fdz-css-[hash:base64:8]",
		},
	},
	build: {
		minify: true,
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "ReactA11yTools",
			formats: ["es", "cjs"],
			fileName: getFilename,
		},
		rollupOptions: ROLLUP_OPTIONS,
	},
	test: VITEST_CONFIG,
});
