import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      host: true,
      port: parseInt(env.VITE_PORT, 10) || 3000,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/app/styles/mixins" as *;',
        },
      },
    },
  };
});
