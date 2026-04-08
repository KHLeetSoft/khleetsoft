import express from "express";
import { createServer as createHttpsServer } from "https";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const dist = join(__dirname, process.env.STATIC_DIR || "dist");

app.use(express.static(dist));

app.get("*", (req, res) => {
  res.sendFile(join(dist, "index.html"));
});

const PORT = Number(process.env.PORT) || 3000;

const keyPath =
  typeof process.env.SSL_KEY_PATH === "string" ? process.env.SSL_KEY_PATH.trim() : "";
const certPath =
  typeof process.env.SSL_CERT_PATH === "string" ? process.env.SSL_CERT_PATH.trim() : "";

if (keyPath && certPath) {
  try {
    const opts = {
      key: readFileSync(keyPath),
      cert: readFileSync(certPath),
    };
    createHttpsServer(opts, app).listen(PORT, () => {
      console.log(`HTTPS listening on port ${PORT}`);
    });
  } catch (e) {
    console.error("HTTPS failed to start, falling back to HTTP:", e.message);
    app.listen(PORT, () => {
      console.log(`HTTP listening on port ${PORT}`);
    });
  }
} else {
  app.listen(PORT, () => {
    console.log(`HTTP listening on port ${PORT}`);
  });
}
