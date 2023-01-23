import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { visualizer } from "rollup-plugin-visualizer";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "index.tsx"),
      formats: ["es"],
      fileName: "index",
    },
  },

  plugins: [peerDepsExternal(), dts({ skipDiagnostics: true }), visualizer()],
});
