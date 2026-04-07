import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import xss from "xss-clean";
import hpp from "hpp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createServer } from "https";
import { readFileSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Security Headers
app.use(helmet());

// CORS Configuration
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://yourdomain.com"
        : "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Data Sanitization against XSS
app.use(xss());

// Prevent HTTP Parameter Pollution
app.use(hpp());

// Serve static files from the dist directory
app.use(express.static(join(__dirname, "dist")));

// All other routes should serve the index.html
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === "production") {
  // SSL configuration for HTTPS
  const httpsOptions = {
    key: readFileSync("/path/to/key.pem"),
    cert: readFileSync("/path/to/cert.pem"),
  };

  createServer(httpsOptions, app).listen(PORT, () => {
    console.log(`Secure server running on port ${PORT}`);
  });
} else {
  app.listen(PORT, () => {
    console.log(`Development server running on port ${PORT}`);
  });
}
