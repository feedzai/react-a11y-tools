import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import path from "path";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

const bundle = (config) => ({
	...config,
	input: "src/index.tsx",
	external: (id) => !/^[./]/.test(id),
});

export default [
	bundle({
		plugins: [
			postcss({
				minimize: true,
				extensions: [".css"],
				extract: path.resolve("dist/index.css"),
			}),
			esbuild({
				sourceMap: true,
				target: "es2018",
			}),
		],
		output: [
			{
				file: packageJson.main,
				format: "cjs",
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: "esm",
				sourcemap: true,
			},
		],
	}),
	bundle({
		plugins: [
			peerDepsExternal(),
			postcss({
				minimize: true,
				extensions: [".css"],
				extract: path.resolve("dist/index.css"),
			}),
			dts(),
		],
		output: {
			file: packageJson.typings,
			format: "es",
		},
	}),
];
