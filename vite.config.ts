/// <reference types="vitest" />
/// <reference types="vitest/globals" />
import { join, resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import IstanbulPlugin from "vite-plugin-istanbul";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({
			outDir: "dist/types",
			insertTypesEntry: true,
		}),
		IstanbulPlugin({
			cypress: true,
			requireEnv: false,
		}),
	],
	resolve: {
		alias: [
			{
				find: /~(.+)/,
				replacement: join(process.cwd(), "node_modules/$1"),
			},
			{
				find: "src",
				replacement: resolve(__dirname, "./src"),
			},
		],
	},
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.tsx"),
			name: "ReactA11yTools",
			formats: [
				"es",
				"umd",
			],
			fileName: (format) => {
				const OUTPUT = {
					"es": "index.es.mjs",
					"umd": "index.umd.cjs",
				};

				return OUTPUT[format] ?? "index.js"
			},
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
	test: {
		globals: true,
		environment: "jsdom",
		include: ["./test/vitest/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		setupFiles: "./setupVitest.ts",
		coverage: {
			all: true,
			enabled: true,
			reporter: [
				"html",
				"json",
				"text-summary"
			],
			provider: "istanbul",
			reportsDirectory: './coverage-reports/vitest',
			exclude: [
				'coverage/**',
				'dist/**',
				'**/[.]**',
				'packages/*/test?(s)/**',
				'**/*.d.ts',
				'**/virtual:*',
				'**/__x00__*',
				'**/\x00*',
				'test/cypress/**',
				'test?(s)/**',
				'test?(-*).?(c|m)[jt]s?(x)',
				'**/*{.,-}{test,spec}.?(c|m)[jt]s?(x)',
				'**/__tests__/**',
				'**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
				'**/vitest.{workspace,projects}.[jt]s?(on)',
				'**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}',
				"documentation/**",
				"coverage-reports/**",
				"coverage/**"
			],
		},
	}
});
