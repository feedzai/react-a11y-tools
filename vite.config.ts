import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import IstanbulPlugin from "vite-plugin-istanbul";

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
		react(),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.tsx"),
			name: "ReactA11yTools",
			formats: ["es", "umd"],
			fileName: (format) => {
				const OUTPUT = {
					es: "index.es.mjs",
					umd: "index.umd.cjs",
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
