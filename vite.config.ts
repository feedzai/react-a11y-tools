import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import IstanbulPlugin from "vite-plugin-istanbul";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		dts({
			insertTypesEntry: true,
		}),
		IstanbulPlugin(),
		react(),
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.tsx"),
			name: "ReactA11yTools",
			formats: ["es", "cjs"],
			fileName: (format) => {
				const OUTPUT = {
					es: "index.es.mjs",
					cjs: "index.cjs.cjs",
				};

				return OUTPUT[format];
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
});
