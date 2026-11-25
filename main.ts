import * as fs from "node:fs";
import * as path from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line =
  "Out today on human-approved leave. Your urgent email will wait here unread until tomorrow, when I'll ignore it with renewed energy.";

const entryPath = path.join(outDir, "entry.txt");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(entryPath, line + "\n", "utf8");
fs.chmodSync(entryPath, 0o644);
